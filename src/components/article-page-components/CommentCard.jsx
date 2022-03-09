import { Card, CardContent, Grid, Typography } from "@mui/material"

const CommentCard = (comment) => {
    return (
        <Grid item xs={12} key={comment.comment_id}>
            <Card raised={true}>
                <CardContent>
                    <Typography variant="body2">{comment.body}</Typography>
                    <Typography variant="caption">{comment.author}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
};

export default CommentCard;