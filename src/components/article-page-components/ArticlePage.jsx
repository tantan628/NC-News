import { Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import ArticleVoting from "./ArticleVoting";

const ArticlePage = () => {
    const [article, setArticle] = useState({});
    const { articleId } = useParams();

    useEffect(() => {
        const getData = async () => {
            const articleData = await api.getArticleById(articleId);
            setArticle(articleData);
        }
        getData();
    }, [articleId])

    const publishedDate = new Date(article.created_at).toDateString().slice(3)
    console.log(article)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="caption">{article.topic}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2">{article.title}</Typography>
            </Grid>
            <Grid item xs={5}>
                <Typography variant="subtitle1">By: {article.author}</Typography>
            </Grid>
            <Grid item xs={2}>
                <ArticleVoting article={article} />
            </Grid>
            <Grid item xs={5}>
                <Typography variant="subtitle1">Published: {publishedDate}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">{article.body}</Typography>
            </Grid>
        </Grid>
    )
};

export default ArticlePage;