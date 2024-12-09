'use client';

import { useState, useEffect } from 'react';
import { Input, Pagination, Text, Container, Group, Card, Grid, Select } from '@mantine/core';
import './dictionary_base.css';

interface Video {
    gross: string;
    url: string;
}

const Dictionary_Base = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [vocabularies, setVocabularies] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5002/dictionary?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setVideos(data.videos);
            setVocabularies(data.vocabularies);
            setTotalPages(data.totalPages);
        };

        fetchData();
    }, [currentPage, itemsPerPage]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        setCurrentPage(1);

        if (query) {

            const filteredVideos = videos.filter(video => video.gross.toLowerCase().includes(query.toLowerCase()));
            const sortedVideos = filteredVideos.sort((a, b) => a.gross.localeCompare(b.gross));
            setVideos(sortedVideos);
        } else {

            const fetchData = async () => {
                const response = await fetch(`http://localhost:5002/dictionary?page=${currentPage}&limit=${itemsPerPage}`);
                const data = await response.json();
                setVideos(data.videos);
                setVocabularies(data.vocabularies);
                setTotalPages(data.totalPages);
            };

            fetchData();
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (value: string | null) => {
        if (value !== null) {
            const selectedItemsPerPage = parseInt(value, 10);
            setItemsPerPage(selectedItemsPerPage);
            setCurrentPage(1);
        }
    };

    return (
        <Container size="lg">
            <Text mb="xs" style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                Danh mục ngôn ngữ ký hiệu
            </Text>
            <Group mb="md" style={{ width: '100%' }}>
                <Input
                    placeholder="Tìm kiếm..."
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ width: '80%' }}
                />
                <Select
                    value={itemsPerPage.toString()}
                    onChange={(value: string | null) => handleItemsPerPageChange(value)}
                    data={[10, 20, 30].map(num => ({ value: num.toString(), label: `${num} items` }))}
                    style={{ width: '15%' }}
                />
            </Group>

            <Grid>
                {videos.map((video, index) => (
                    <Grid.Col span={4} key={video.url}>
                        <Card
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            style={{
                                textAlign: 'center',
                                backgroundColor: '#f5f5f5',
                                border: 'none',
                            }}
                        >
                            <video controls width="100%" style={{ border: 'none' }}>
                                <source src={video.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Text mb="xs" style={{
                                textAlign: 'center',
                                fontWeight: 'bolder',
                                marginTop: '3vh',
                                marginBottom: '0px'
                            }}>
                                {video.gross}
                            </Text>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
            <Group mt="lg"
                style={{
                    marginBottom: "2vh",
                    display: "flex",
                    justifyContent: 'space-between',
                }}
            >
                <Pagination siblings={3} defaultValue={10}
                    value={currentPage}
                    onChange={handlePageChange}
                    total={totalPages}
                    withEdges

                />
            </Group>
        </Container>
    );
};

export default Dictionary_Base;
