//IMPORTS - Components
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

//IMPORTS - React
import { useEffect, useState } from "react";

//IMPORTS - Mui
import { Box, Grid } from "@mui/material";

//IMPORTS - Api
import * as api from '../../api';

//-----------COMPONENT-----------
const CommentsList = ({ articleId }) => {
    const[comments, setComments] = useState([]);

    useEffect(() => {
        const getData = async () => {
            if(articleId) {
                const commentsData = await api.getComments(articleId);
                setComments(commentsData);
            }
        }
        getData()
    }, [articleId]);

    return (
        <Box className="comments-list-container">
            <PostComment articleId={articleId} setComments={setComments} />
            <Grid container spacing={2}>
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id} setComments={setComments} />
                })}
            </Grid>
        </Box>
    )
};

export default CommentsList;