import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { IconButton, Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import * as api from '../../api';


const ArticleVoting = ({ article }) => {
    const [voteCount, setVoteCount] = useState(article.votes);
    const articleId = article.article_id;

    useEffect(() => {
        setVoteCount(article.votes);
    }, [article.votes])

    const decrementVotes = () => {
        setVoteCount((currCount) => currCount - 1);
        api.changeArticleVotes(articleId, -1);
    };

    const incrementVotes = () => {
        setVoteCount((currCount) => currCount + 1);
        api.changeArticleVotes(articleId, 1);
    };

    return (
        <Grid container spacing={0}>
            <Grid item xs={4}>
                <IconButton aria-label="vote down" onClick={decrementVotes}>
                    <ArrowDownwardRoundedIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="subtitle1">Votes: {voteCount} </Typography>
            </Grid>
            <Grid item xs={4}>
                <IconButton aria-label="vote up" onClick={incrementVotes}>
                    <ArrowUpwardRoundedIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
};

export default ArticleVoting;