
'use client';
import { useEffect, useState, useRef } from 'react';
import {Dropzone} from '@mantine/dropzone';

import { Button, TextInput, Stack, Text, Group, Loader, Alert, Modal } from '@mantine/core';
import { IconPhoto, IconUpload, IconX, IconCheck } from '@tabler/icons-react';
import './translate_base.css';

const Translate_Base = () => {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [textInput, setTextInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseVideoUrl, setResponseVideoUrl] = useState<string[] | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [word, setWord] = useState<string>("");
    const videoContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (videoContainerRef.current) {
            videoContainerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [responseVideoUrl]);

    const handleDrop = (files: File[]) => {
        if (files.length > 0) {
            setVideoFile(files[0]);
            setUploadStatus('Tải lên video hoàn tất.');
        }
    };

    const handleSubmit = async () => {
        if (!videoFile && !textInput.trim()) {
            setUploadStatus('Vui lòng tải lên video hoặc nhập văn bản trước khi gửi.');
            return;
        }

        setLoading(true);
        setUploadStatus(null);

        const formData = new FormData();

        if (videoFile) {
            formData.append('video', videoFile);
        }
        if (textInput.trim()) {
            formData.append('text_name', textInput);
        }

        try {


            console.log(formData.get('video'));
            console.log(formData.get('text_name'));
            const videoName = formData.get("video");


            const videoNameStr = videoName instanceof File
                ? videoName.name.split('.').slice(0, -1).join('.')
                : "";

            const textName = formData.get("text_name");
            setWord((videoNameStr as string) || (textName as string) || "");


            const response = await fetch('http://127.0.0.1:5002/process_video', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
            });

            const data = await response.json();
            setUploadStatus('Vui lòng chờ một lát');
            const randomTime = Math.floor(Math.random() * 2000) + 3000;
            setTimeout(() => {
                setResponseVideoUrl(data.video_urls);
                setUploadStatus('Phiên dịch hoàn tất, hãy xem và tải video ở bên dưới');
                setModalOpen(true);
            }, randomTime);

        } catch (error) {
            console.error('Error:', error);
            setUploadStatus('Đã có lỗi xảy ra, vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    const handleRetry = () => {
        setVideoFile(null);
        setTextInput('');
        setResponseVideoUrl(null);
        setUploadStatus(null);
        setModalOpen(false);
    };
    const handleCloseModal = () => {
        setVideoFile(null);
        setTextInput('');
        setResponseVideoUrl(null);
        setUploadStatus(null);
        setModalOpen(false);
    }

    return (
        <div className="container">
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'monospace', color: '#012970' }}>Phiên Dịch</h1>
            </div>

            <Stack gap="md">
                {!responseVideoUrl && (
                    <>
                        <Dropzone
                            onDrop={handleDrop}
                            accept={['video/mp4', 'video/webm']}
                            multiple={false}
                            className="dropzone"
                            onReject={() => setUploadStatus('Loại tệp không được hỗ trợ. Vui lòng tải lên video hợp lệ.')}
                        >
                            <Group justify="center" gap="xl" style={{ pointerEvents: 'none' }}>
                                <Dropzone.Accept>
                                    <IconUpload style={{ width: 52, height: 52, color: '#4dabf7' }} stroke={1.5} />
                                </Dropzone.Accept>
                                <Dropzone.Reject>
                                    <IconX style={{ width: 52, height: 52, color: '#f03e3e' }} stroke={1.5} />
                                </Dropzone.Reject>
                                <Dropzone.Idle>
                                    <IconPhoto style={{ width: 52, height: 52, color: '#adb5bd' }} stroke={1.5} />
                                </Dropzone.Idle>

                                <div>
                                    <Text size="xl" inline>
                                        {/* Drag a video here or click to select one */}
                                        Kéo một video vào đây hoặc nhấp để chọn một video
                                    </Text>
                                    <Text size="sm" color="dimmed" inline mt={7}>
                                        Chỉ hỗ trợ video MP4 và WebM. Kích thước tệp tối đa: 10MB.
                                        {/* Only MP4 and WebM videos are supported. Maximum file size: 10MB. */}
                                    </Text>
                                </div>
                            </Group>
                        </Dropzone>

                        {videoFile && (
                            <Alert icon={<IconCheck size="1rem" />} title="Video Status" color="green">
                                Tập tin đã chọn:: {videoFile.name}
                            </Alert>
                        )}

                        {uploadStatus && (
                            <Alert title="Status" color={loading ? 'blue' : 'gray'}>
                                {uploadStatus}
                            </Alert>
                        )}

                        <TextInput
                            label="Text to Video"
                            placeholder="Enter text here"
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            required={false}
                        />

                        <div className="button-group">
                            <Button onClick={handleSubmit} disabled={loading}>
                                {loading ? <Loader size="xs" /> : 'Submit'}
                            </Button>
                        </div>
                    </>
                )}

                {responseVideoUrl && responseVideoUrl.length > 0 && (
                    <Modal opened={modalOpen} onClose={() => handleCloseModal()}
                        size="70%"
                        title="Phiên dịch hoàn thành"
                        // size="lg"
                        className="custom_modal"
                    >
                        <h3>{word}</h3>
                        <div className="video-flex">
                            {responseVideoUrl.slice(0, 2).map((video, index) => {
                                const videoUrl = `http://localhost:5002/${video}`;
                                return (
                                    <div key={video} className="video-item">
                                        <video controls>
                                            <source src={videoUrl} type="video/mp4" />
                                            Trình duyệt của bạn không hỗ trợ thẻ video.
                                        </video>
                                    </div>
                                );
                            })}
                        </div>

                        <h3>Tải xuống video phiên dịch:</h3>
                        <div className="download-video-flex">
                            {responseVideoUrl.slice(0, 2).map((video, index) => {
                                const videoUrl = `http://localhost:5002/${video}`;
                                return (
                                    <div key={videoUrl} className="download-video-item">
                                        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                                            Download Video {index + 1}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>

                        <Button onClick={handleRetry} fullWidth mt="md">
                            Thử lại
                        </Button>
                    </Modal>
                )}
            </Stack>
        </div>
    );
};

export default Translate_Base;
