import { Card, Grid, Typography } from "@mui/material"

const ArticleCard = (article) => {
    console.log(article)

    return (
        <Grid item xs={12} key={article.article_id}>
            <Card raised="true">
                <Typography color="text.secondary" variant="overline">
                    {article.topic}
                </Typography>
                <Typography variant="h5">
                    {article.title}
                </Typography>
                <Typography variant="subtitle2">
                    Author: {article.author} Votes: {article.votes}
                </Typography>
            </Card>
        </Grid>
    )
};

export default ArticleCard;