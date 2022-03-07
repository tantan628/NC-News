import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import * as api from '../api';

import ArticleCard from './ArticleCard';

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function getData() {
            const articlesData = await api.getArticles();
            setArticles(articlesData);
        }
        getData()
    }, []);

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