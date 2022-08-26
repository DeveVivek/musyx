import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [], 
    dicover_weekly: null,
    spotify: null,
    top_artists: null,
    playing: false,
    item: null,
};

const reducer = ( state, action ) => 
{
    console.log(action);
    switch(action.type){
        case "SET_USER": 
            return{
                ...state,
                user: action.user,
            };
        
        case "SET_PLAYING":
            return{
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM": 
            return{
                ...state,
                item:action.item,
            };
        
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        
        case "SET_TOP_ARTIST":
            return{
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return{
                ...state,
                playlists: action.spotify,
            };

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };

        default: 
            return state;
    }
};

export default reducer;