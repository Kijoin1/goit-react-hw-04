import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
export const fetchImagesByTopic = async (topic, page = 0) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: 'sIgMFhC19hAMFVrdIuVR8VtQKfwYcXtlN_fzwSLifcY',
      query: topic,
      page,
      per_page: 15,
    },
  });

  return data;
};
