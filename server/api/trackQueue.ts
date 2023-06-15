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
    const { data: result } = await axios.get(
      "https://api.spotify.com/v1/me/player/queue", {
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`
      }
    })
    console.log(result.queue);
    const data = !result.queue ? { error: "No queue" } :
      result.queue.slice(0, 2).map((track: any) => ({
        artists: track.artists.map((artist: any) => ({
          name: artist.name,
          url: artist.external_urls.spotify,
        })),
        track: {
          name: track.name,
          url: track.external_urls.spotify,
          id: track.id,
        },
        album: {
          name: track.album.name,
          image: track.album.images[0].url,
        }
      }));
    return data;
  } catch (err) {
    console.error(err);
    return { error: "Could not get queue" };
  }
})