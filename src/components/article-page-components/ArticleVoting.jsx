//IMPORTS - React
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

//IMPORTS - Mui
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { IconButton, Typography, Grid } from '@mui/material';

//IMPORTS - Api
import * as api from '../../api';

//-----------COMPONENT-----------
const ArticleVoting = ({ article, message, setMessage }) => {
    const articleId = article.article_id;
    const { user } = useContext(UserContext);

    //voteCount optimistically rendered
    const [voteCount, setVoteCount] = useState(article.votes);

    const neutral = 'lightgrey';
    const votedUp = '#07B094';
    const votedDown = '#AF3D33';

    //userVotes to be array of users already voted with boolean of whether voted up or down
    const [userVotes, setUserVotes] = useState([]);
    const [downvoteColour, setDownvoteColour] = useState(neutral);
    const [upvoteColour, setUpvoteColour] = useState(neutral);

    useEffect(() => {
        setVoteCount(article.votes);
    }, [article.votes]);

    useEffect(() => {
        setUpvoteColour(neutral);
        setDownvoteColour(neutral);
        const userVote = userVotes.find(voter => voter.user === user)
        if(userVote) {
            if(userVote.voteUp) {
                setUpvoteColour(votedUp);
            } else {
                setDownvoteColour(votedDown);
            }
        }
    }, [user, userVotes]);

    const incrementVote = () => {
        setVoteCount((currCount) => currCount + 1);
        setUserVotes((currVotes) => {
            const newVotes = currVotes.map((voterObj) => {
                return {...voterObj};
            });
            newVotes.push({ user, voteUp: true})
            return newVotes;
        })
        api.changeArticleVotes(articleId, 1);
    };

    const changeVoteUpToDown = () => {
        setVoteCount((currCount) => currCount - 2);
        setUserVotes((currVotes) => {
            const newVotes = currVotes.map((voterObj) => {
                if(voterObj.user === user) {
                    return { user, voteUp: false}
                } else {
                    return { ...voterObj };
                }
            })
            return newVotes;
        })
        api.changeArticleVotes(articleId, -2);
    };

    const changeVoteUpToNeutral = () => {
        setVoteCount((currCount) => currCount - 1);
        setUserVotes((currVotes) => {
            const newVotes = currVotes.map((voterObj) => {
                    return { ...voterObj }
            })
            return newVotes.filter((voterObj) => {
                return voterObj.user !== user;
            });
        })
        api.changeArticleVotes(articleId, -1);
    };

    const decrementVote = () => {
        setVoteCount((currCount) => currCount - 1);
        setUserVotes((currVotes) => {
            const newVotes = currVotes.map((voterObj) => {
                return {...voterObj};
            });
            newVotes.push({ user, voteUp: false})
            return newVotes;
        })
        api.changeArticleVotes(articleId, -1);
    };

    const changeVoteDownToUp = () => {
        setVoteCount((currCount) => currCount + 2);
        setUserVotes((currVotes) => {
            const newVotes = currVotes.map((voterObj) => {
                if(voterObj.user === user) {
                    return { user, voteUp: true}
                } else {
                    return { ...voterObj };
                }
            })
            return newVotes;
        })
        api.changeArticleVotes(articleId, 2);
    };

    const changeVoteDownToNeutral = () => {
        setVoteCount((currCount) => currCount + 1);
        setUserVotes((currVotes) => {
            const newVotes = currVotes.map((voterObj) => {
                    return { ...voterObj }
            })
            return newVotes.filter((voterObj) => {
                return voterObj.user !== user;
            });
        })
        api.changeArticleVotes(articleId, 1);
    };

    const upvoteClick = () => {
        if(user) {
            setMessage('');
            if(downvoteColour === votedDown) {
                changeVoteDownToUp();
            } else if(upvoteColour === votedUp) {
                changeVoteUpToNeutral();
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
            if(upvoteColour === votedUp) {
                changeVoteUpToDown();
            } else if (downvoteColour === votedDown) {
                changeVoteDownToNeutral();
            } else {
                decrementVote();
            }
        } else {
            setMessage('You must be logged in as a user to vote.')
        }
    };

    return (
        <Grid container spacing={{ xs: 1, sm: 2}}>
            <Grid item xs={4}>
                <IconButton aria-label="vote down" onClick={downvoteClick}>
                    <ArrowCircleDownRoundedIcon className="vote-up-icon" sx={{backgroundColor: downvoteColour}}/>
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="subtitle1">Votes:</Typography>
                <Typography variant="subtitle1">{voteCount}</Typography>
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