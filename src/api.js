import axios from 'axios';

const baseUrl = "https://tanisnewsapi.herokuapp.com/api";

export const getArticles = async (chosenTopic) => {
    console.log(chosenTopic)
    let requestUrl = `${baseUrl}/articles`;
    const { data } = await axios.get(requestUrl, {
        params: {
            topic: chosenTopic
        }
    });
    return data.articles;
};

export const getTopics = async () => {
    let requestUrl = `${baseUrl}/topics`;
    const { data } = await axios.get(requestUrl);
    return data.topics;
};