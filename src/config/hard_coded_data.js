const key = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YouTube_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  key;

export const YouTube_Suggestion_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
