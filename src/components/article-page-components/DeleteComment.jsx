import { IconButton, Modal, Typography, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import * as api from '../../api';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';


const DeleteComment = ({ comment, setComments }) => {
    const [open, setOpen] = useState(false);
    const [displayIcon, setDisplayIcon] = useState('none');
    const commentId = comment.comment_id
    const { user } = useContext(UserContext);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if(user === comment.author) {
            setDisplayIcon('')
        }
    }, [user, comment.author]);

    const confirmDeleteClick = () => {
        setComments((currComments) => {
            const newComments = currComments.map((comment) => {
                return { ...comment }
            });
            return newComments.filter((comment) => {
                return comment.comment_id !== commentId
            });
        });
        handleClose();
        api.deleteComment(commentId);
    };

    return (
        <section>
            <IconButton aria-label="delete" color="error" onClick={handleOpen} sx={{ display: displayIcon }}>
                <DeleteIcon />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
                <Box className="modal-form-container">
                    <Typography variant="body1">
                        Are you sure you wish to delete your comment? It will be permanently lost.
                    </Typography>
                    <Button variant="outlined" onClick={handleClose}>
                        Go back
                    </Button>
                    <Button variant="outlined" onClick={confirmDeleteClick}>
                        Delete
                    </Button>
                </Box>
            </Modal>
        </section>
    )
};

export default DeleteComment;