import { Card, Grid, Typography } from "@mui/material"

const CommentCard = ({ comment }) => {
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
                    <p>delete button here</p>
                </Grid>
            </Grid>
            </Card>
        </Grid>
    )
};

export default CommentCard;