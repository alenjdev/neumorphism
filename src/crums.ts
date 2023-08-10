// const [player, setPlayer] = useState(undefined);

// const [is_paused, setPaused] = useState(false);
// const [is_active, setActive] = useState(false);
// const [current_track, setTrack] = useState(track);

// useEffect(() => {
//   if (!player) return;
//   player.addListener("player_state_changed", (state) => {
//     if (!state) {
//       return;
//     }

//     setTrack(state.track_window.current_track);
//     setPaused(state.paused);

//     player.getCurrentState().then((state) => {
//       !state ? setActive(false) : setActive(true);
//     });
//   });
// }, [player]);

// useEffect(() => {
//   const script = document.createElement("script");
//   script.src = "https://sdk.scdn.co/spotify-player.js";
//   script.async = true;

//   document.body.appendChild(script);

//   window.onSpotifyWebPlaybackSDKReady = () => {
//     const player = new window.Spotify.Player({
//       name: "Web Playback SDK",
//       getOAuthToken: (cb) => {
//         cb(token);
//       },
//       volume: 0.5,
//     });

//     console.log(player);
//     setPlayer(player);

//     player.addListener("ready", ({ device_id }) => {
//       console.log("Ready with Device ID", device_id);
//     });

//     player.addListener("not_ready", ({ device_id }) => {
//       console.log("Device ID has gone offline", device_id);
//     });

//     player.connect();
//   };
// }, []);

// useEffect(() => {
//   if (!player) return;
//   player.addListener("player_state_changed", (state) => {
//     if (!state) {
//       return;
//     }
//     setTrack(state.track_window.current_track);
//     setPaused(state.paused);
//     console.log(state);

//     player.getCurrentState().then((state) => {
//       !state ? setActive(false) : setActive(true);
//     });
//   });
// }, [player]);

// const token =
//   "BQD1rqcnRuuus2bWVFhAz5-s4IAae3_9a39oh5cL73_eY-lPxnpaLUgFUJCX1xKfw-59Hc7rmqWf6tqttk4lL8v_3QOH-5Q5lE8NIlguoaMaBtc14Pd8DEmbKq991DD9UhfiJAKNeQlXKw-rJKEyrPbf5xTkMFrrT5X-Hnt9A_Z-R3qsCw5xsAC__Q315eG5OiQVOx1RHYUKb-1VKFpayxI-AAHz";

// const track = {
//   name: "",
//   album: {
//     images: [{ url: "" }],
//   },
//   artists: [{ name: "" }],
// };
