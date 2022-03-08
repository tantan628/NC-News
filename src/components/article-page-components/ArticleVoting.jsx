import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { IconButton, Typography, Grid } from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import * as api from '../../api';
import { UserContext } from '../../contexts/UserContext';


const ArticleVoting = ({ article, message, setMessage }) => {
    const [voteCount, setVoteCount] = useState(article.votes);
    const articleId = article.article_id;

    const [voters, setVoters] = useState([]);
    const { user } = useContext(UserContext);
    const [downvoteColour, setDownvoteColour] = useState('lightgrey');
    const [upvoteColour, setUpvoteColour] = useState('lightgrey');


    useEffect(() => {
        setVoteCount(article.votes);
    }, [article.votes])

    const incrementVote = () => {
        setVoteCount((currCount) => currCount + 1);
        setUpvoteColour('#07B094');
        setVoters((currVoters) => {
            const newVoters = currVoters.map((voterObj) => {
                return {...voterObj};
            });
            newVoters.push({ user, voteUp: true})
            return newVoters;
        })
        api.changeArticleVotes(articleId, 1);
    };

    const changeVoteUpToDown = () => {
        setVoteCount((currCount) => currCount - 2);
        setUpvoteColour('lightgrey');
        setDownvoteColour('#AF3D33');
        setVoters((currVoters) => {
            const newVoters = currVoters.map((voterObj) => {
                if(voterObj.user === user) {
                    return { user, voteUp: false}
                } else {
                    return { ...voterObj };
                }
            })
            return newVoters;
        })
        api.changeArticleVotes(articleId, -2);
    };

    const changeVoteUpToNeutral = () => {
        setVoteCount((currCount) => currCount - 1);
                    setUpvoteColour('lightgrey');
                    setVoters((currVoters) => {
                        const newVoters = currVoters.map((voterObj) => {
                                return { ...voterObj }
                        })
                        return newVoters.filter((voterObj) => {
                            return voterObj.user !== user;
                        });
                    })
                    api.changeArticleVotes(articleId, -1);
    };

    const decrementVote = () => {
        setVoteCount((currCount) => currCount - 1);
        setDownvoteColour('#AF3D33');
        setVoters((currVoters) => {
            const newVoters = currVoters.map((voterObj) => {
                return {...voterObj};
            });
            newVoters.push({ user, voteUp: false})
            return newVoters;
        })
        api.changeArticleVotes(articleId, -1);
    };

    const changeVoteDownToUp = () => {
        setVoteCount((currCount) => currCount + 2);
        setDownvoteColour('lightgrey');
        setUpvoteColour('#07B094');
        setVoters((currVoters) => {
            const newVoters = currVoters.map((voterObj) => {
                if(voterObj.user === user) {
                    return { user, voteUp: true}
                } else {
                    return { ...voterObj };
                }
            })
            return newVoters;
        })
        api.changeArticleVotes(articleId, 2);
    };

    const changeVoteDownToNeutral = () => {
        setVoteCount((currCount) => currCount + 1);
        setDownvoteColour('lightgrey');
        setVoters((currVoters) => {
            const newVoters = currVoters.map((voterObj) => {
                    return { ...voterObj }
            })
            return newVoters.filter((voterObj) => {
                return voterObj.user !== user;
            });
        })
        api.changeArticleVotes(articleId, 1);
    };

    const upvoteClick = () => {
        if(user) {
            setMessage('');
            const userVotes = voters.filter(voter => voter.user === user)
            if(userVotes.length > 0) {
                if(!userVotes[0].voteUp) {
                    changeVoteDownToUp();
                } else {
                    changeVoteUpToNeutral();
                }
            } else {
                incrementVote();
            }
        } else {
            setMessage('You must be logged in as a user to vote.')
        }
    };

    const downvoteClick = () => {
        if(user) {
            setMessage('');
            const userVotes = voters.filter(voter => voter.user === user)
            if(userVotes.length > 0) {
                if(userVotes[0].voteUp) {
                    changeVoteUpToDown();
                } else {
                    changeVoteDownToNeutral();
                }
            } else {
                decrementVote();
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