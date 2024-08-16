"use strict";

const fse = require("fs-extra");
const path = require("path");

module.exports = ({ strapi }) => ({
  async loadFile(ctx) {
    const dir = "/constants/apple-developer-merchantid-domain-association";
    const file = fse.readFileSync(path.join(__dirname, "..", dir), "utf8");
    return file.toString();
  },
});
