'use client'
import { useRef, useState, useEffect } from 'react'
import { Container, Button, Text, Box, Paper } from '@mantine/core'
import styles from './CameraView.module.css'

const CameraView = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])

    const [stream, setStream] = useState<MediaStream | null>(null)
    const [result, setResult] = useState<React.ReactNode>('none')
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>('')

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
            // create url video => check result
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, {
                    type: 'video/webm'
                })
                const url = URL.createObjectURL(blob)
                setVideoUrl(url)

                // fetch ở đây
                setResult(url)
            }

        } catch (err) {
            console.error("Something Wrong with camera:", err)
        }
    }
    // start record
    const startRecording = async () => {
        setResult('Chuẩn bị ghi...')
        await startCamera()

        setTimeout(() => {
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.start(1000)
                setIsRecording(true)
                setResult('Đang ghi...')
            }
        }, 3000)
    }
    // stop record
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

    // Cleanup streams
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
        console.log(result);
        window.open(result)

    }
    return (
        <Container className={styles.container} style={{ textAlign: 'center', width: '100%', height: "auto"}}>
            <Text size="xl" className={styles.title}>
                Kiểm tra ký hiệu
            </Text>

            <div className={styles.showContainer} >
            
            <Container>
            <Button variant='outline' className={styles.resultBox} style={{flex: "30%", maxWidth: "100%"}}
                onClick={() => {
                    handleClickButtonResult(result)
                }}>
                <Text className={styles.resultText}>Kết quả: Click me</Text>
            </Button>

            {!isRecording ? (
                <Button
                    onClick={startRecording}
                    variant="filled"
                    color="blue"
                    mt="md"
                    className={styles.button}
                >
                    Bắt đầu ghi
                </Button>
            ) : (
                <Button
                    onClick={stopRecording}
                    variant="filled"
                    color="red"
                    mt="md"
                    className={styles.button}
                >
                    Dừng ghi
                </Button>
            )}
            </Container>

            <Container className={styles.cameraContainer} style={{flex: "50%"}} >
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className={styles.video}
                    style={{ width: '100%', maxWidth: '1250px',height: "auto", border: '2px solid #ccc' }}
                />
            </Container>

            
            </div>
            

            
        </Container>
    )
}

export default CameraView