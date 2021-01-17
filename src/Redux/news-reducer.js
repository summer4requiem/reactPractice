import {NewsAPI} from '../API/api';
const SET_NEWS = 'SET-NEWS';

const setNews = (news) => {
    return {
        type: SET_NEWS,
        news: news,
    }
}

let initialState = {
    news: [],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state,
                news: action.news,
            }
        }
        default:
            return state;
    }
}

export const getNewsTC = () => {
    return dispatch => {
        NewsAPI.getNews().then((data) => {
            dispatch(setNews(data.data.articles))
        });
    }
}

export default newsReducer;