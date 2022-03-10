import { Box, FormControl, InputLabel, MenuItem, Select, Grid, Switch, FormControlLabel } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import * as api from '../../api';

import ArticlesList from "./ArticlesList";

const HomeSearch = () => {
    const { topicSlug } = useParams();
    const [chosenTopic, setChosenTopic] = useState(topicSlug);
    const [searchParams, setSearchParams] = useSearchParams();
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const topicsData = await api.getTopics();
            setTopics(topicsData);
        }
        getData();
    }, []);

    const navigate = useNavigate();
    const handleTopicChange = (event) => {
        const newTopic = event.target.value
        if(newTopic === "All Topics") {
            setChosenTopic(null)
            navigate('/')
        } else {
            setChosenTopic(newTopic);
            navigate(`/topics/${newTopic}`)
        }
    };

    const handleSortingChange = (event) => {
        const newSorting = event.target.value;
        setSearchParams(
            {
                sort_by: newSorting,
                order: searchParams.get('order') ? searchParams.get('order') : 'desc'
            }
        )
    };

    const handleOrderChange = (event) => {
        const newOrder = event.target.checked ? 'desc' : 'asc';
        setSearchParams(
            {
                sort_by: searchParams.get('sort_by') ? searchParams.get('sort_by') : 'created_at',
                order: newOrder
            }
        )
    }

    return (
        <Grid container>
            <Box className="topics-selector-container">
                <FormControl className="topics-selector">
                    <InputLabel id="topics-selection-label">Topic</InputLabel>
                    <Select labelId="topics-selection-label" value={chosenTopic || 'All Topics'} label="Topics" onChange={handleTopicChange}>
                        <MenuItem value="All Topics">All Topics</MenuItem>
                        {topics.map((topic) => {
                            return (
                                <MenuItem value={topic.slug} key={topic.slug}>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>
            <Box className="topics-selector-container">
                    <FormControl className="topics-selector">
                        <InputLabel id="sorting-selection-label">Sort By</InputLabel>
                        <Select labelId="sorting-selction-label" value={searchParams.get('sort_by') || 'created_at'} label="Sort By" onChange={handleSortingChange}>
                            <MenuItem value="created_at" key="date">Date</MenuItem>
                            <MenuItem value="author" key="author">Author</MenuItem>
                            <MenuItem value="title" key="title">Title</MenuItem>
                            <MenuItem value="votes" key="votes">Votes</MenuItem>
                            <MenuItem value="comment_count" key="comment_count">Comments</MenuItem>
                        </Select>
                    </FormControl>
            </Box>
            <Box className="topics-selector-container">
                <FormControlLabel control={<Switch checked={searchParams.get('order') === 'desc'} onChange={handleOrderChange}/>} label={searchParams.get('order') === 'desc' ? 'Descending' : 'Ascending'} />
            </Box>
            <ArticlesList chosenTopic={chosenTopic} chosenSorting={searchParams.get('sort_by')} chosenOrder={searchParams.get('order')} />
        </Grid>
    )
};

export default HomeSearch;