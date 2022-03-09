import { UserContext } from '../../contexts/UserContext';
import * as api from '../../api';
import{ useState, useContext } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const PostComment = ({ articleId, setComments }) => {
    const { user } = useContext(UserContext);
    const [buttonDisplayValue, setButtonDisplayValue] = useState('none');
    const [commentBody, setCommentBody] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleTextFieldClick = () => {
        setButtonDisplayValue('');
    };

    const handleCommentChange = (event) => {
        setCommentBody(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(user) {
            const postedComment = await api.postComment(articleId, user, commentBody);
            setComments((currComments) => {
                const newComments = currComments.map((comment) => {
                    return { ...comment }
                });
                newComments.unshift(postedComment);
                return newComments;
            });
        } else {
            setErrorMessage('You must be logged in to comment.')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={12}>
                <TextField variant="filled" name="commentBody" label="Add a comment..." value={commentBody} size="small" margin="normal" fullWidth onClick={handleTextFieldClick} onChange={handleCommentChange}/>
            </Grid>
            <Grid item xs = {9}></Grid>
            <Grid item xs={3}>
                <Button className="comment-button" variant="contained" sx={{display: buttonDisplayValue}} type="submit">Submit</Button>
            </Grid>
            <Grid item>
                <Typography variant="caption">{errorMessage}</Typography>
            </Grid>
        </Grid>
        </form>
    )
};

export default PostComment;