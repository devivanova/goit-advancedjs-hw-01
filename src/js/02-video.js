import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const localStorageKey = "videoplayer-current-time";
const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const onPlay = function (event) {
  localStorage.setItem(localStorageKey, event.seconds);
};

player.on("timeupdate", throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(localStorageKey)) || 0);
