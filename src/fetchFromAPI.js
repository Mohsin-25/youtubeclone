import axios from "axios";

// const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "20",
    part: "id,snippet",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

//
//
//
//
//

// const options = {
//   method: "GET",
//   url: "https://youtube-v31.p.rapidapi.com/search",
//   params: {
//     relatedToVideoId: "7ghhRHRP6t4",
//     part: "id,snippet",
//     type: "video",
//     maxResults: "50",
//   },
//   headers: {
//     "X-RapidAPI-Key": "8c3ec3c425mshb7667a4fb271420p12cf3ejsn8eed16b15dd9",
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
