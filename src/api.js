import axios from 'axios';

const baseUrl = "https://tanisnewsapi.herokuapp.com/api";

export const getTopics = async () => {
    const requestUrl = `${baseUrl}/topics`;
    const { data } = await axios.get(requestUrl);
    return data.topics;
};

export const getUsers = async () => {
    const requestUrl = `${baseUrl}/users`;
    const { data } = await axios.get(requestUrl);
    return data.users;
};

export const getArticles = async (chosenTopic, chosenSorting, chosenOrder) => {
    const requestUrl = `${baseUrl}/articles`;
    const { data } = await axios.get(requestUrl, {
        params: {
            topic: chosenTopic,
            sort_by: chosenSorting,
            order: chosenOrder
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

export const postComment = async (articleId, user, commentBody) => {
    console.log(articleId, user, commentBody)
    const requestUrl = `${baseUrl}/articles/${articleId}/comments`;
    const body = {
        username: user,
        body: commentBody
    };
    const { data } = await axios.post(requestUrl, body);
    return data.comment;
};