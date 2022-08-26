<<<<<<< HEAD
import React,{ useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import { getAccessToken } from './components/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
//npm i spotify-web-api-js 
//https://github.com/JMPerez/spotify-web-api-js
import Player from './components/Player'
import {useDataLayerValue} from './DataLayer'


const spotifyOb = new SpotifyWebApi()

function App() {
  //deployed
    //const [token , setToken] = useState(null)
    const [{token},dispatch] = useDataLayerValue()
            //DataLayer.user is destructured in this
            //state in {} will get everything
    useEffect(() => {
      const hash = getAccessToken();
      window.location.hash=""
      const _token = hash.access_token

      if (_token){

        dispatch(
          {
            type: 'SET_TOKEN',
            token: _token,
          }
        )
        spotifyOb.setAccessToken(_token) //spotify object from spotify WebApi Wrapper which helps us communicate with Spotify app

        spotifyOb.getMe().then(user => {
          dispatch(
            {
              type: 'SET_USER',
              user:user,
            }
          )
        })
        spotifyOb.getUserPlaylists().then((playlists) => {
          dispatch(
            {
              type: 'SET_PLAYLISTS',
              playlists:playlists,
            }
          )
        })
      }
      spotifyOb.getMyTopArtists().then((response) =>
=======
import React, { useState, useEffect } from 'react';
import './App.css';
import SpotifyWebApi from "spotify-web-api-js";
import {useStateValue} from "./StateProvider";
import Player from "./Player"
import { getTokenFromResponse } from "./spotify";
import Login from "./Login";

const s = new SpotifyWebApi();

function App() {
  const [{ token}, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if(_token){
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getPlaylist("34jVVE1HHOv9KGl3nZrKpN").then((response) => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
      
      s.getMyTopArtists().then((response) => 
>>>>>>> 0892223 (new)
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

<<<<<<< HEAD
      //enter your own discover weekly playlist id to get your songs
      spotifyOb.getPlaylist("37i9dQZEVXcIdICMRECAXa").then((response)=>{
        dispatch(
          {
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly:response,
          }
        )
      })
      
    },[token,dispatch])
  return (
      
    <div className="App">
      { token ?  <Player spotify={spotifyOb}/> :  <Login/>}
    </div>
  )

}

export default App;


//useEffect Hook 
/**
 * It runs a piece of code based on a given condition
 * It runs a function given inside it
 * //we give [] to specify it to run it only once
 * //if we put a variable inside [name,age] the useEffect will run whenever the name var changes.
 */

 //Problem: Prop Drilling
 //Solution:Context API
=======
      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS", playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      { !token && <Login />}
      { token && <Player spotify = {s} />}
    </div>
  );
}

export default App;
>>>>>>> 0892223 (new)
