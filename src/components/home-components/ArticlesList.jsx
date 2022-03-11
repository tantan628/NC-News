//IMPORTS - Components
import ErrorComponent from "../ErrorComponent";
import ArticleCard from './ArticleCard';

//IMPORTS - React
import { useEffect, useState } from "react";

//IMPORTS - Mui
import { Box, Grid } from "@mui/material";

//IMPORTS - Api
import * as api from '../../api';

//-----------COMPONENT-----------
const ArticlesList = ({ chosenTopic, chosenSorting, chosenOrder, setChosenTopic }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try{
                const articlesData = await api.getArticles(chosenTopic, chosenSorting, chosenOrder);
                setArticles(articlesData);
            } catch (err) {
                setError({ err });
            }
        }
        getData();
    }, [chosenTopic, chosenSorting, chosenOrder]);

    if(error) {
        return (
        <Box className="articles-list-container">
            <ErrorComponent error={error} setError={setError} setChosenTopic={setChosenTopic} />
        </Box>
        )
    }

    return (
        <Box className="articles-list-container">
            <Grid container spacing={2}>
                {articles.map((article) => {
                    return ArticleCard(article);
                })}
            </Grid>
        </Box>
    )
};

export default ArticlesList;