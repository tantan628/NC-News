import axios from 'axios';

const baseUrl = "https://tanisnewsapi.herokuapp.com/api";

export const getArticles = async (chosenTopic) => {
    let requestUrl = `${baseUrl}/articles`;
    const { data } = await axios.get(requestUrl, {
        params: {
            topic: chosenTopic
        }
    });
    return data.articles;
};

export const getArticleById = async (articleId) => {
    let requestUrl = `${baseUrl}/articles/${articleId}`;
    const { data } = await axios.get(requestUrl);
    return data.article;
};

export const getTopics = async () => {
    let requestUrl = `${baseUrl}/topics`;
    const { data } = await axios.get(requestUrl);
    return data.topics;
};