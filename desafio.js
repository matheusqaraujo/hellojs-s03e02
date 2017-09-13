const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {
  ret.data.filter(e => e.user.login && new Date(e.created_at) < new Date("2017-09-15") && e.body.includes("hellojs-s03e02")).forEach(e => {
    console.log(e.user.login + " ----- " + e.body.trim())
  });
})