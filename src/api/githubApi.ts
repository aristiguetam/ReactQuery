import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
