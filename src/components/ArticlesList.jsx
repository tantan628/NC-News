import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import * as api from '../api';

import ArticleCard from './ArticleCard';

const ArticlesList = ({ filterByTopic }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const articlesData = await api.getArticles(filterByTopic);
            setArticles(articlesData);
        }
        getData();
    }, [filterByTopic]);


    return (
        <Box className="articles-list-container">
            <Grid container spacing={2}>
                {articles.map((article) => {
                    return ArticleCard(article);
                })}
            </Grid>
        </Box>
    )
};

export default ArticlesList;