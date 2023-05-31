import {createProxyMiddleware} from "http-proxy-middleware";

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://grandmen.herokuapp.com',
            changeOrigin: true,
        })
    );
};
