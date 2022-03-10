import { Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import ArticleVoting from "./ArticleVoting";
import CommentsList from "./CommentsList";

const ArticlePage = () => {
    const [article, setArticle] = useState({});
    const { articleId } = useParams();

    const [message, setMessage] = useState('');

    useEffect(() => {
        const getData = async () => {
            const articleData = await api.getArticleById(articleId);
            setArticle(articleData);
        }
        getData();
    }, [articleId])

    const publishedDate = new Date(article.created_at).toDateString().slice(3)

    return (
        <Grid container spacing={1}>
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
                <ArticleVoting article={article} message={message} setMessage={setMessage} />
            </Grid>
            <Grid item xs={5}>
                <Typography variant="subtitle1">Published: {publishedDate}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">{message}</Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Typography variant="body1">{article.body}</Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Typography variant="h6">Comments</Typography>
                <CommentsList articleId={articleId}/>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    )
};

export default ArticlePage;