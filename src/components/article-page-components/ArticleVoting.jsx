import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { IconButton, Typography, Grid } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import * as api from '../../api';
import { UserContext } from '../../contexts/UserContext';


const ArticleVoting = ({ article, message, setMessage }) => {
    const articleId = article.article_id;
    const { user } = useContext(UserContext);

    //voteCount optimistically rendered
    const [voteCount, setVoteCount] = useState(article.votes);

    const [downvoteColour, setDownvoteColour] = useState('lightgrey');
    const [upvoteColour, setUpvoteColour] = useState('lightgrey');

    useEffect(() => {
        setVoteCount(article.votes);
    }, [article.votes]);

    const incrementVote = () => {
        setVoteCount((currCount) => currCount + 1);
        setUpvoteColour('#07B094');
        api.changeArticleVotes(articleId, 1);
    };

    const changeVoteUpToDown = () => {
        setVoteCount((currCount) => currCount - 2);
        setUpvoteColour('lightgrey');
        setDownvoteColour('#AF3D33');
        api.changeArticleVotes(articleId, -2);
    };

    const changeVoteUpToNeutral = () => {
        setVoteCount((currCount) => currCount - 1);
        setUpvoteColour('lightgrey');
        api.changeArticleVotes(articleId, -1);
    };

    const decrementVote = () => {
        setVoteCount((currCount) => currCount - 1);
        setDownvoteColour('#AF3D33');
        api.changeArticleVotes(articleId, -1);
    };

    const changeVoteDownToUp = () => {
        setVoteCount((currCount) => currCount + 2);
        setDownvoteColour('lightgrey');
        setUpvoteColour('#07B094');
        api.changeArticleVotes(articleId, 2);
    };

    const changeVoteDownToNeutral = () => {
        setVoteCount((currCount) => currCount + 1);
        setDownvoteColour('lightgrey');
        api.changeArticleVotes(articleId, 1);
    };

    const upvoteClick = () => {
        if(user) {
            setMessage('');
            if(upvoteColour === '#07B094') {
                changeVoteUpToNeutral();
            } else {
                if(downvoteColour === '#AF3D33') {
                    changeVoteDownToUp();
                } else {
                    incrementVote();
                }
            }
        } else {
            setMessage('You must be logged in as a user to vote.')
        }
    };

    const downvoteClick = () => {
        if(user) {
            setMessage('');
            if(downvoteColour === '#AF3D33') {
                changeVoteDownToNeutral();
            } else {
                if(upvoteColour === '#07B094') {
                    changeVoteUpToDown();
                } else {
                    decrementVote();
                }
            }
        } else {
            setMessage('You must be logged in as a user to vote.')
        }
    };

    return (
        <Grid container spacing={0}>
            <Grid item xs={4}>
                <IconButton aria-label="vote down" onClick={downvoteClick}>
                    <ArrowCircleDownRoundedIcon className="vote-up-icon" sx={{backgroundColor: downvoteColour}}/>
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="subtitle1">Votes: {voteCount} </Typography>
            </Grid>
            <Grid item xs={4}>
                <IconButton aria-label="vote up" onClick={upvoteClick}>
                    <ArrowCircleUpRoundedIcon className="vote-down-icon" sx={{backgroundColor: upvoteColour}} />
                </IconButton>
            </Grid>
        </Grid>
    )
};

export default ArticleVoting;