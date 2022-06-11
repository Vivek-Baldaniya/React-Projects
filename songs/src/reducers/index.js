import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: "Satisfya",
      duration: "3:00",
    },
    {
      title: "Tera Fitoor",
      duration: "5:10",
    },
    {
      title: "Amplifier",
      duration: "3:53",
    },
    {
      title: "Khaab",
      duration: "3:22",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
