//IMPORTS - Components
import ErrorComponent from "../ErrorComponent";
import ArticleVoting from "./ArticleVoting";
import CommentsList from "./CommentsList";

//IMPORTS - React
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

//IMPORTS - Mui
import { Typography, Grid } from "@mui/material";

//IMPORTS - Api
import * as api from '../../api';

//-----------COMPONENT-----------
const ArticlePage = () => {
    const [error, setError] = useState(null);
    const [article, setArticle] = useState({});
    const [message, setMessage] = useState('');
    const { articleId } = useParams();

    useEffect(() => {
        const getData = async () => {
            try{
                const articleData = await api.getArticleById(articleId);
                setArticle(articleData);
            } catch (err) {
                setError({ err })
            }
        }
        getData();
    }, [articleId])

    if(error) {
        return <ErrorComponent error={error} setError={setError} />
    }

    const publishedDate = new Date(article.created_at).toDateString().slice(3)

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography variant="caption">{article.topic}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2">{article.title}</Typography>
            </Grid>
            <Grid item xs={4} sm={5}>
                <Typography variant="subtitle1">By: {article.author}</Typography>
            </Grid>
            <Grid item xs={4} sm={2}>
                <ArticleVoting article={article} message={message} setMessage={setMessage} />
            </Grid>
            <Grid item xs={4} sm={5}>
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