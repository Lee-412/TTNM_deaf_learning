
'use client';

import { useState, useEffect, SetStateAction } from 'react';
import { Input, Pagination, Text, Container, Group, Card, Grid, Select } from '@mantine/core';
import './dictionary_base.css';
import { Modal, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface Vocabulary {
    word: string;
    description: string;
    tl: string;
    _id: string;
    url: string;
}

const Dictionary_Base = () => {
    const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
    const [filteredVocabularies, setFilteredVocabularies] = useState<Vocabulary[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [opened, setOpened] = useState(false);
    const [selectedVocabulary, setSelectedVocabulary] = useState<Vocabulary | null>(null);

    const capitalizeFirstLetter = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };


    const isSmallScreen = useMediaQuery("(max-width: 768px)");

    const handleCardClick = (vocabulary: Vocabulary) => {
        setSelectedVocabulary(vocabulary);
        setOpened(true);  // Mở modal
    };
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5002/librarys/dictionary');
            const data = await response.json();
            // Đảm bảo data là mảng
            if (Array.isArray(data)) {
                setVocabularies(data);
                setFilteredVocabularies(data);
            } else {
                setVocabularies([]);
                setFilteredVocabularies([]);
            }

            console.log(data);

        };

        fetchData();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filteredData = vocabularies.filter(vocabulary =>
                vocabulary.word.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredVocabularies(filteredData);
            setCurrentPage(1);
        } else {
            setFilteredVocabularies(vocabularies);
        }
    }, [searchQuery, vocabularies]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (value: string | null) => {
        if (value !== null) {
            setItemsPerPage(parseInt(value, 10));
            setCurrentPage(1);
        }
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Array.isArray(filteredVocabularies) ? filteredVocabularies.slice(indexOfFirstItem, indexOfLastItem) : [];
    const totalPages = Array.isArray(filteredVocabularies) ? Math.ceil(filteredVocabularies.length / itemsPerPage) : 1;

    return (
        <Container size="lg">
            <Text mb="xs" style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: "30px" }}>
                Danh mục ngôn ngữ ký hiệu
            </Text>

            <Group mb="md" className="container-header">
                <Input
                    className="search-input"
                    placeholder="Tìm kiếm..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <Select
                    className="items-per-page"
                    value={itemsPerPage.toString()}
                    onChange={(value: string | null) => handleItemsPerPageChange(value)}
                    data={[9, 18, 27].map(num => ({ value: num.toString(), label: `${num} items` }))}
                />
            </Group>

            <Grid>
                {currentItems.map((vocabulary) => (
                    <Grid.Col span={{ base: 12, md: 6, xl: 4 }} key={vocabulary._id}>
                        <Card shadow="sm" padding="lg" radius="md" className="video-card" onClick={() => handleCardClick(vocabulary)}>
                            <video>
                                <source src={vocabulary.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Text mb="xs" className="video-title">
                                {capitalizeFirstLetter(vocabulary.word)}
                            </Text>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>


            {selectedVocabulary && (
                <Modal
                    className='modal_mantine'
                    size={isSmallScreen ? '100%' : '60%'}
                    style={{

                    }}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title={
                        <div className='modal-container-title'>
                            <Text className="modal-title">
                                {capitalizeFirstLetter(selectedVocabulary.word)}
                            </Text>
                        </div>
                    }
                >

                    <div className="modal-container">
                        <Text className="modal-description">
                            {selectedVocabulary.description ? selectedVocabulary.description : ''}
                        </Text>

                        <div className="modal-video-container">
                            <video controls>
                                <source src={selectedVocabulary.url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <Button className='modal-close-btn' onClick={() => setOpened(false)}>Đóng</Button>
                    </div>
                </Modal>
            )}
            <Group className="pagination-container">
                <Pagination
                    siblings={3}
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
