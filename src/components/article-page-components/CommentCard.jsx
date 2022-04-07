//IMPORTS - Components
import DeleteComment from "./DeleteComment";

//IMPORTS - Mui
import { Card, Grid, Typography } from "@mui/material"

//-----------COMPONENT-----------
const CommentCard = ({ comment, setComments }) => {
    const publishedDate = new Date(comment.created_at).toDateString().slice(3)

    return (
        <Grid item xs={12}>
            <Card raised={true} sx={{ maxWidth: 700, alignContent: "center" }}>
            <Grid container>
                <Grid item xs={10}>
                    <Typography variant="body2">{comment.body}</Typography>
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