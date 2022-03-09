import axios from 'axios';

const baseUrl = "https://tanisnewsapi.herokuapp.com/api";

export const getTopics = async () => {
    let requestUrl = `${baseUrl}/topics`;
    const { data } = await axios.get(requestUrl);
    return data.topics;
};

export const getArticles = async (chosenTopic) => {
    const requestUrl = `${baseUrl}/articles`;
    const { data } = await axios.get(requestUrl, {
        params: {
            topic: chosenTopic
        }
    });
    return data.articles;
};

export const getArticleById = async (articleId) => {
    const requestUrl = `${baseUrl}/articles/${articleId}`;
    const { data } = await axios.get(requestUrl);
    return data.article;
};

export const changeArticleVotes = async (articleId, num) => {
    const requestUrl = `${baseUrl}/articles/${articleId}`;
    const body = {
        inc_votes: num
    };
    const { data } = await axios.patch(requestUrl, body);
    return data.article;
};

export const getComments = async (articleId) => {
    const requestUrl = `${baseUrl}/articles/${articleId}/comments`;
    const { data } = await axios.get(requestUrl);
    return data.comments;
};