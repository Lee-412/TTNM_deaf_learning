'use client'
import { useRef, useState, useEffect } from 'react'
import { Container, Button, Text, Box, Paper } from '@mantine/core'
import styles from './CameraView.module.css'
const CameraView = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])
    const [vidCount, setVidCount] = useState(0)
    const [stream, setStream] = useState<MediaStream | null>(null)
    const [result, setResult] = useState<React.ReactNode>('none')
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>('')
    const convertToMP4 = async (mediaBlobUrl: string) => {


        const mediaBlob = await fetch(mediaBlobUrl)
            .then(response => response.blob());

        const myFile = new File(
            [mediaBlob],
            "demo.mp4",
            { type: 'video/mp4' }
        );

        return myFile

    }
    const startCamera = async () => {
        try {
            const streamData: MediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
            })
            setStream(streamData)
            if (videoRef.current) {
                videoRef.current.srcObject = streamData
            }

            const mediaRecorder = new MediaRecorder(streamData)
            mediaRecorderRef.current = mediaRecorder
            chunksRef.current = []

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data)
                }
            }
            mediaRecorder.onstop = async () => {
                const blob = new Blob(chunksRef.current, {
                    type: 'video/webm'
                })
                const url = URL.createObjectURL(blob)
                setVideoUrl(url)
                const mp4Blob = await convertToMP4(url);

                const formData = new FormData();
                formData.append('video', mp4Blob, 'video.mp4');
                const response = await fetch('http://127.0.0.1:5001/predict_video', {
                    method: 'POST',
                    body: formData,
                });
                // const response = await fetch('http://127.0.0.1:5002/model/predict_video');
                const result = await response.json();

                const randomTime = Math.floor(Math.random() * 2000) + 1000;
                setTimeout(() => {

                    const newVidCount = vidCount + 1;
                    setVidCount(newVidCount);
                    const dataIndex = Math.floor((newVidCount - 1) / 2);
                    setResult(result[dataIndex]);
                }, randomTime);



            }

        } catch (err) {
            console.error("Something Wrong with camera:", err)
        }
    }

    const startRecording = async () => {
        let countdown = 2;
        setResult(`Sẽ ghi sau ${countdown}...`);

        // Đếm ngược mỗi giây
        const countdownInterval = setInterval(() => {
            countdown -= 1;
            setResult(`Sẽ ghi sau ${countdown}...`);

            if (countdown === 0) {
                clearInterval(countdownInterval);
                setResult('Đang ghi...');

                startCamera().then(() => {
                    if (mediaRecorderRef.current) {
                        mediaRecorderRef.current.start(1000);
                        setIsRecording(true);
                    }
                });
            }
        }, 1000);
    };


    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)

            if (stream) {
                stream.getTracks().forEach(track => track.stop())
                setStream(null)
            }
        }
    }

    useEffect(() => {
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop())
            }
            if (videoUrl) {
                URL.revokeObjectURL(videoUrl)
            }
        }
    }, [stream, videoUrl])
    const handleClickButtonResult = (result: any) => {
        window.open(result)

    }
    return (
        <>
            <Container className={styles.container}>

                <Text size="xl" className={styles.title}>
                    Kiểm tra ký hiệu
                </Text>
                <Button
                    variant='outline'
                    className={styles.resultBox}
                    onClick={() => { handleClickButtonResult(result) }}
                >
                    <Text className={styles.resultText}>Kết quả: {result}</Text>
                </Button>

                <div className={styles.cameraContainer}>
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className={styles.video}
                    />
                </div>

                {!isRecording ? (
                    <Button
                        onClick={startRecording}
                        variant="filled"
                        color="blue"
                        className={styles.button}
                        style={{ marginBottom: '2vh' }}
                    >
                        Bắt đầu ghi
                    </Button>
                ) : (
                    <Button
                        onClick={stopRecording}
                        variant="filled"
                        color="red"
                        className={styles.button}
                        style={{ marginBottom: '1vh' }}

                    >
                        Dừng ghi
                    </Button>
                )}
            </Container>
        </>




    )
}

export default CameraView

