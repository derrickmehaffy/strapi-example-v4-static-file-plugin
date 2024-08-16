module.exports = [
  {
    method: "GET",
    path: "/.well-known/apple-developer-merchantid-domain-association",
    handler: "plugin::well-known.wellKnown.loadFile",
    config: {
      prefix: "",
      auth: false,
    },
  },
];
