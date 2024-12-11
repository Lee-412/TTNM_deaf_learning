
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
            setUploadStatus('Video uploaded successfully.');
        }
    };

    const handleSubmit = async () => {
        if (!videoFile && !textInput.trim()) {
            setUploadStatus('Please upload a video or enter text before submitting.');
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

            const response = await fetch('http://127.0.0.1:5002/process_video', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
            });

            const data = await response.json();
            setResponseVideoUrl(data.video_urls);
            setUploadStatus('Translation complete! Download your video below.');
            setModalOpen(true);

        } catch (error) {
            console.error('Error:', error);
            setUploadStatus('Error processing your request. Please try again.');
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
                <h1 style={{ fontFamily: 'monospace', color: '#012970' }}>Dịch thuật</h1>
            </div>

            <Stack gap="md">
                {!responseVideoUrl && (
                    <>
                        <Dropzone
                            onDrop={handleDrop}
                            accept={['video/mp4', 'video/webm']}
                            multiple={false}
                            className="dropzone"
                            onReject={() => setUploadStatus('File type not supported. Please upload a valid video.')}
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
                                        Drag a video here or click to select one
                                    </Text>
                                    <Text size="sm" color="dimmed" inline mt={7}>
                                        Only MP4 and WebM videos are supported. Max file size: 10MB.
                                    </Text>
                                </div>
                            </Group>
                        </Dropzone>

                        {videoFile && (
                            <Alert icon={<IconCheck size="1rem" />} title="Video Status" color="green">
                                Selected file: {videoFile.name}
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
                        title="Translation Complete"
                        // size="lg"
                        className="custom_modal"
                    >
                        <h3>Translation Videos:</h3>
                        <div className="video-flex">
                            {responseVideoUrl.slice(0, 2).map((video, index) => {
                                const videoUrl = `http://localhost:5002/${video}`;
                                return (
                                    <div key={video} className="video-item">
                                        <video controls>
                                            <source src={videoUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                );
                            })}
                        </div>

                        <h3>Download Translation Videos:</h3>
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
                            Try Again
                        </Button>
                    </Modal>
                )}
            </Stack>
        </div>
    );
};

export default Translate_Base;
