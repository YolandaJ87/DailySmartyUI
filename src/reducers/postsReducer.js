import {SET_REDUCENT_POSTS} from "../actions/types";

consts INIT_STATE = { 
    posts: [],
    recentPosts: []
}

export default function (state = INIT_STATE, action){
    switch (action.type){
        case SET_RECENT_POSTS:
            return [...state, recentPosts: action.payload];
        default: 
        return state;
    }
}