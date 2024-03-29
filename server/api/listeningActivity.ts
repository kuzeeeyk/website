import axios from "axios";
export default defineEventHandler(async (event) => {
  try {
    const spotifyCookie = process.env.SP_DC;
    async function getAccessToken() {
      const response = await axios.get(
        "https://open.spotify.com/get_access_token?reason=transport&productType=web_player",
        {
          headers: {
            Cookie: `sp_dc=${spotifyCookie}`,
          },
        }
      );
      return response.data.accessToken;
    }
    const { data: activity } = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      }
    );
    const trackId = activity?.item?.id;
    // let lyrics = { lines: [], currentLine: {}, nextLine: {} };
    // try {
    //   lyrics.lines =
    //     trackId &&
    //     (
    //       await axios.get(
    //         `https://spclient.wg.spotify.com/color-lyrics/v2/track/${trackId}?format=json&market=from_token`,
    //         {
    //           headers: {
    //             Authorization: `Bearer ${await getAccessToken()}`,
    //             "App-Platform": "WebPlayer",
    //             "User-Agent":
    //               "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36",
    //           },
    //         }
    //       )
    //     ).data.lyrics.lines
    //       .map((line) => {
    //         return {
    //           line: line.words,
    //           ms: +line.startTimeMs,
    //         };
    //       })
    //       .filter((line) => line.line != "♪");
    //   console.log(lyrics);

    //   lyrics.currentLine = lyrics.lines.find(
    //     (line) => line.ms > activity.progress_ms - 2000
    //   );
    //   lyrics.nextLine =
    //     lyrics.lines[lyrics.lines.indexOf(lyrics.currentLine) + 1];
    // } catch (err) {
    //   lyrics = { error: "No lyrics" };
    // }
    const data = !activity
      ? { error: "No activity" }
      : {
          artists: activity.item?.artists.map(
            (artist: { name: any; external_urls: { spotify: any } }) => ({
              name: artist.name,
              url: artist.external_urls.spotify,
            })
          ),
          track: {
            name: activity.item.name,
            url: activity.item.external_urls.spotify,
            id: trackId,
          },
          progress: activity.progress_ms,
          duration: activity.item.duration_ms,
          isPlaying: activity.is_playing,
          // lyrics,
        };
    return data.isPlaying || data.error
      ? data
      : { error: "No activity (paused)" };
  } catch (err) {
    console.log(err);

    return { error: "No activity" };
  }
});
