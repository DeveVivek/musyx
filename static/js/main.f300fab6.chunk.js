(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{37:function(e,t,a){e.exports=a(95)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=(a(42),a(4)),i=(a(43),a(44),window.location.origin+"/"),s="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("b520e14a69d84d1692b7579b03d3d74d","\n&redirect_uri=").concat(i,"&scope=").concat(["streaming","user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-read-email","user-read-private","user-top-read","user-modify-playback-state"].join("%20"),"\n&response_type=token&show_dialog=true");var u=function(){return r.a.createElement("div",{className:"login"},r.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"Spotify logo"}),r.a.createElement("a",{href:s},"Login With Spotify"))},m=a(26),p=a.n(m),d=a(110),E=a(31),y=a.n(E),f=a(32),_=a.n(f),v=Object(n.createContext)(),g=function(e){var t=e.initialState,a=e.reducer,l=e.children;return r.a.createElement(v.Provider,{value:Object(n.useReducer)(a,t)},l)},b=function(){return Object(n.useContext)(v)},S=(a(45),a(12)),h=a.n(S),T=a(109),k=function(){var e,t=b(),a=Object(o.a)(t,1)[0].user;return r.a.createElement("header",null,r.a.createElement("div",{className:"header_left"},r.a.createElement(h.a,null),r.a.createElement("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})),r.a.createElement("div",{className:"header_right"},r.a.createElement(T.a,{src:null===a||void 0===a||null===(e=a.images[0])||void 0===e?void 0:e.url,alt:"NP"}),r.a.createElement("h4",null,null===a||void 0===a?void 0:a.display_name," ")))},O=(a(51),function(e){var t=e.track,a=b(),n=Object(o.a)(a,2),l=n[0].play_uri,c=n[1];return r.a.createElement("div",{className:"song_row",onClick:function(){c({type:"SET_PLAY_URI",play_uri:t.uri}),c({type:"SET_PLAYING",playing:!0}),l&&console.log("\ud83d\udc4d")}},r.a.createElement("img",{className:"song_rowAlbum",src:t.album.images[0].url,alt:""}),r.a.createElement("div",{className:"song_rowInfo"},r.a.createElement("h1",null,t.name),r.a.createElement("p",null,t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name)))}),I=(a(52),function(e){var t=e.spotify,a=b(),n=Object(o.a)(a,2),l=n[0].discover_weekly,c=n[1];return r.a.createElement("div",{className:"body"},r.a.createElement(k,{spotify:!0}),r.a.createElement("div",{className:"body_info"},r.a.createElement("img",{src:null===l||void 0===l?void 0:l.images[0].url,alt:"banner"}),r.a.createElement("div",{className:"body_infoText"},r.a.createElement("strong",null,"PLAYLIST"),r.a.createElement("h2",null,"Discover Weekly"),r.a.createElement("p",null,null===l||void 0===l?void 0:l.description))),r.a.createElement("div",{className:"body_songs"},r.a.createElement("div",{className:"body_icons"},r.a.createElement(d.a,{className:"body_shuffle",onClick:function(){c({type:"SET_PLAYING",playing:!0}),c({type:"SET_PLAY_URI",play_uri:"spotify:playlist:37i9dQZEVXcIdICMRECAXa"}),t.getMyCurrentPlayingTrack().then((function(e){c({type:"SET_ITEM",item:e.item})}))}}),r.a.createElement(y.a,{fontSize:"large"}),r.a.createElement(_.a,null)),null===l||void 0===l?void 0:l.tracks.items.map((function(e){return r.a.createElement(O,{key:e.track.name,track:e.track})}))))}),j=(a(53),a(33)),N=a.n(j),w=function(e){var t=e.spotify,a=b(),l=Object(o.a)(a,2),c=l[0],i=c.play_uri,s=c.token,u=c.playing,m=l[1],p=null;Object(n.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),m({type:"SET_PLAYING",playing:e.is_playing}),m({type:"SET_ITEM",item:e.item})}))}),[t,m]);return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer_player_container"},r.a.createElement(N.a,{name:"Spotify-clone",token:s,uris:[i],styles:{bgColor:" #282828",color:"#fff",loaderColor:"#1DB954",sliderColor:"#1DB954",savedColor:"#fff",trackArtistColor:"#ccc",trackNameColor:"#fff",loaderSize:1.5,sliderHandleColor:"#fff"},play:u,callback:function(e){(p=e).isPlaying&&(m({type:"SET_ITEM",item:p}),p.isPlaying||m({type:"SET_PLAYING",playing:p.isPlaying}))}})))},P=(a(92),function(e){var t=e.option,a=e.Icon;return r.a.createElement("div",{className:"sidebarOption"},a&&r.a.createElement(a,{className:"sidebarOption_icon"}),a?r.a.createElement("h4",null,t):r.a.createElement("p",null,t))}),A=(a(93),a(34)),C=a.n(A),L=a(35),Y=a.n(L),R=function(){var e,t=b(),a=Object(o.a)(t,1)[0].playlists;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("img",{className:"sidebar-logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"spotify-logo"}),r.a.createElement(P,{option:"Home",Icon:C.a}),r.a.createElement(P,{option:"Search",Icon:h.a}),r.a.createElement(P,{option:"Your Library",Icon:Y.a}),r.a.createElement("br",null),r.a.createElement("strong",{className:"sidebar_title"},"PLAYLISTS"),r.a.createElement("hr",null),null===a||void 0===a||null===(e=a.items)||void 0===e?void 0:e.map((function(e){return r.a.createElement(P,{key:e.id,option:e.name})})))},M=(a(94),function(e){var t=e.spotify;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player_body"},r.a.createElement(R,null),r.a.createElement(I,{spotify:t})),r.a.createElement(w,{spotify:t}))}),x=new p.a;var U=function(){var e=b(),t=Object(o.a)(e,2),a=t[0].token,l=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(l({type:"SET_TOKEN",token:t}),x.setAccessToken(t),x.getMe().then((function(e){l({type:"SET_USER",user:e})})),x.getUserPlaylists().then((function(e){l({type:"SET_PLAYLISTS",playlists:e})}))),x.getMyTopArtists().then((function(e){return l({type:"SET_TOP_ARTISTS",top_artists:e})})),x.getPlaylist("37i9dQZEVXcIdICMRECAXa").then((function(e){l({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})}))}),[a,l]),r.a.createElement("div",{className:"App"},a?r.a.createElement(M,{spotify:x}):r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(3);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,{initialState:{user:null,playlists:[],discover_weekly:null,top_artists:null,playing:!1,item:null,token:null,play_uri:"spotify:playlist:37i9dQZEVXcIdICMRECAXa"},reducer:function(e,t){switch(t.type){case"SET_USER":return Object(W.a)(Object(W.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(W.a)(Object(W.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(W.a)(Object(W.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(W.a)(Object(W.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_TOP_ARTISTS":return Object(W.a)(Object(W.a)({},e),{},{top_artists:t.top_artists});case"SET_PLAYING":return Object(W.a)(Object(W.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(W.a)(Object(W.a)({},e),{},{item:t.item});case"SET_PLAY_URI":return Object(W.a)(Object(W.a)({},e),{},{play_uri:t.play_uri});default:return e}}},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.f300fab6.chunk.js.map