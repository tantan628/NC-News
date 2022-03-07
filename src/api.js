import axios from 'axios';

const baseUrl = "https://tanisnewsapi.herokuapp.com/api";

export const getArticles = async () => {
    let requestUrl = `${baseUrl}/articles`;
    const { data } = await axios.get(requestUrl);
    return data.articles;
};