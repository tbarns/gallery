const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:5000', // Where your Express server is running
      changeOrigin: true,
      headers: {
        host: 'timothybarnaby.com',  // Your custom domain
      },
    })
  );
};
