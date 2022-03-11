import { Card, Grid, Typography } from "@mui/material"
import DeleteComment from "./DeleteComment";

const CommentCard = ({ comment, setComments }) => {
    const publishedDate = new Date(comment.created_at).toDateString().slice(3)

    return (
        <Grid item xs={12}>
            <Card raised={true}>
            <Grid container>
                <Grid item xs={10}>
                    <Typography variant="body2">{comment.body}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <p>voting here</p>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="caption">{comment.author}</Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="caption">{publishedDate}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <DeleteComment comment={comment} setComments={setComments} />
                </Grid>
            </Grid>
            </Card>
        </Grid>
    )
};

export default CommentCard;