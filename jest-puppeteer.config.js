module.exports = {
  launch: {
    headless: true,
    slowMo: 80,
  },
  browserContext: "default",
  server: [
    {
      command: "npm run start:server",
      port: 5001,
    },
    {
      command: "npm run start:parcel",
      port: 1234,
    },
  ],
};
