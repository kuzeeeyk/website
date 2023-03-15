import axios from "axios";
export default defineEventHandler(async event => {
  const spotifyCookie = process.env.SP_DC;
  async function getAccessToken() {
    const response = await axios.get(
      "https://open.spotify.com/get_access_token?reason=transport&productType=web_player", {
      headers: {
        Cookie: `sp_dc=${spotifyCookie}`
      }
    });
    return response.data.accessToken;
  }
  const activity = await axios.get(
    "https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  });
  const data = !activity.data ? { error: "No activity" } : 
  {
    artist: {
      name: activity.data.item.artists[0].name,
      url: activity.data.item.artists[0].external_urls.spotify,
    },
    track: {
      name: activity.data.item.name,
      url: activity.data.item.external_urls.spotify,
    },
    progress: activity.data.progress_ms,
    duration: activity.data.item.duration_ms,
    isPlaying: activity.data.is_playing,
  };
  return (data.isPlaying || data.error) ? data : { error: "No activity (paused)" };
})