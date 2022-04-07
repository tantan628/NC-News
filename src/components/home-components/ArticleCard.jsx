//IMPORTS - React
import { Link } from "react-router-dom";

//IMPORTS - Mui
import { ButtonBase, Card, CardContent, Grid, Typography } from "@mui/material";

//-----------COMPONENT-----------
const ArticleCard = (article) => {
    const publishedDate = new Date(article.created_at).toDateString().slice(3)

    return (
        <Grid item xs={12} key={article.article_id}>
            <Link to={`/articles/${article.article_id}`} className="article-card-linking">
            <ButtonBase sx={{ minWidth: '100%' }}>
            <Card raised={true} sx={{ minWidth: 375, maxWidth: 800 }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                            <Typography color="text.secondary" variant="overline">
                            {article.topic}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography color="text.secondary" variant="overline">
                                {publishedDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h3">
                            {article.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">
                            Author: {article.author}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">
                            Votes: {article.votes}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="subtitle2">
                                Comments: {article.comment_count}
                            </Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
            </Card>
            </ButtonBase>
            </Link>
        </Grid>
    )
};

export default ArticleCard;