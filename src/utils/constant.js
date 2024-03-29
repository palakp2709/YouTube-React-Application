const GOOGLE_API_KEY = "AIzaSyAR5BEcmaRTbTBuqqNgeX7tlErOuD8BPyo"


export const YOUTUBE_VIDEOS_URL =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+ GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_SEARCH_SUGGESTIONS_API = 
`https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}=shinshan&type=video&part=snippet`
