import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import * as api from '../../api';

const CommentsList = ({ articleId }) => {
    const[comments, setComments] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const commentsData = await api.getComments(articleId);
            setComments(commentsData);
        }
        getData()
    }, [articleId]);

    return (
        <Box className="comments-list-container">
            <Grid container spacing={2}>
                {comments.map((comment) => {
                    return CommentCard(comment);
                })}
            </Grid>
        </Box>
    )
};

export default CommentsList;