import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import ArticlesList from "./ArticlesList";

const MainSection = ({ topics, filterByTopic }) => {
    const [chosenTopic, setChosenTopic] = useState(filterByTopic);

    const navigate = useNavigate();

    const handleTopicChange = (event) => {
        const newTopic = event.target.value
        setChosenTopic(newTopic);
        if(newTopic === "All Topics") {
            navigate('/')
        } else {
            navigate(`/${newTopic}`)
        }
    };

    return (
        <section>
            <Box className="topics-selector-container">
                <FormControl className="topics-selector">
                    <InputLabel id="topics-selection-label">Topic</InputLabel>
                    <Select labelId="topics-selection-label" value={chosenTopic} label="Topics" onChange={handleTopicChange}>
                        <MenuItem value="All Topics">All Topics</MenuItem>
                        {topics.map((topic) => {
                            return (
                                <MenuItem value={topic.slug} key={topic.slug}>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>
            <ArticlesList filterByTopic={filterByTopic} />
        </section>
    )
};

export default MainSection;