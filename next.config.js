const withSASS = require("@zeit/next-sass")();
const withTypescript = require("@zeit/next-typescript")();

const { env } = process;

module.exports = {
  withSASS,
  withTypescript,
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error", // check rules of hooks
    "react-hooks/exhaustive-deps": "warn", // check dependencies effect
  },
  env: {
    HOSTNAME: env.HOSTNAME,
    PORT: env.PORT,
    HOST: env.HOST,
  },
};
