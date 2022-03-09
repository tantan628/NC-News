import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import * as api from '../../api';

import ArticlesList from "./ArticlesList";

const HomeSearch = () => {
    const { topicSlug } = useParams();
    const [chosenTopic, setChosenTopic] = useState(topicSlug);
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

    return (
        <section>
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
            <ArticlesList chosenTopic={chosenTopic} />
        </section>
    )
};

export default HomeSearch;