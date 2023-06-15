import axios from "axios";
export default defineEventHandler(async event => {
  try {
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
    const { data: history } = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`
      }
    })
    console.log(history);
    const data = !history.items ? { error: "No history" } :
    history.items.slice(0, 20).map(({track}: any) => ({
        artists: track.artists.map((artist: any) => ({
          name: artist.name,
        })),
        track: {
          name: track.name,
          id: track.id,
        },
        album: {
          name: track.album.name,
          image: track.album.images[0].url,
        },
      }));
    return data;
  } catch (err) {
    console.error(err);
    return { error: "Could not get history" };
  }
})