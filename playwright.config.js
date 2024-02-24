module.exports = {
  use: {
    baseURL: 'https://www.traveloka.com/',
    screenshot: 'only-on-failure',
  },
  reporter: [['html', { open: 'never' }]],
};