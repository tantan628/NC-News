import { ButtonBase, Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ArticleCard = (article) => {

    return (
        <Grid item xs={12} key={article.article_id}>
            <Link to={`/articles/${article.article_id}`} className="article-card-linking">
            <ButtonBase sx={{ minWidth: '100%' }}>
            <Card raised={true} sx={{ minWidth: '100%' }}>
                    <CardContent>
                    <Typography color="text.secondary" variant="overline">
                        {article.topic}
                    </Typography>
                    <Typography variant="h5">
                        {article.title}
                    </Typography>
                    <Typography variant="subtitle2">
                        Author: {article.author} Votes: {article.votes}
                    </Typography>
                    </CardContent>
            </Card>
            </ButtonBase>
            </Link>
        </Grid>
    )
};

export default ArticleCard;