const nextEnv = require("next-env")
const dotenvLoad = require("dotenv-load")

dotenvLoad()

const withNextEnv = nextEnv()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: "94a902d75b1542f78058ce24a14e6cbc",
  },
  images: {
    domains: [
      "crests.football-data.org",
      "upload.wikimedia.org",
      "flagcdn.com",
    ],
  },
}

module.exports = nextConfig
