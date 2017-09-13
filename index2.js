const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/search/users?q=sombriks").then(ret => console.log(ret.data))