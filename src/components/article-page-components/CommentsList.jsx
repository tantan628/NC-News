//IMPORTS - Components
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import ErrorComponent from "../ErrorComponent";

//IMPORTS - React
import { useEffect, useState } from "react";

//IMPORTS - Mui
import { Box, Grid } from "@mui/material";

//IMPORTS - Api
import * as api from '../../api';

//-----------COMPONENT-----------
const CommentsList = ({ articleId }) => {
    const[comments, setComments] = useState([]);
    const[error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const commentsData = await api.getComments(articleId);
                setComments(commentsData);
            } catch(err) {
                setError({ err });
            }
        }
        getData()
    }, [articleId]);

    if(error) {
        return <ErrorComponent error={error} setError={setError} />
    }
    
    return (
        <Box className="comments-list-container" sx={{ alignContent: "center" }}>
            <PostComment articleId={articleId} setComments={setComments} />
            <Grid container spacing={2} alignItems="center" justifyContent="center" direction="column">
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id} setComments={setComments} />
                })}
            </Grid>
        </Box>
    )
};

export default CommentsList;