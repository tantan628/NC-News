import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import * as api from '../api';

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
        <section>
            <Typography variant="caption">{article.topic[0].toUpperCase() + article.topic.slice(1)}</Typography>
            <Typography variant="h2">{article.title}</Typography>
            <Typography variant="subtitle1">By: {article.author}</Typography>
            <Typography variant="subtitle1">Published: {publishedDate}</Typography>
            <Typography variant="body1">{article.body}</Typography>
        </section>
    )
};

export default ArticlePage;