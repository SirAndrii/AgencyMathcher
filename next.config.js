// next.config.js
module.exports = {
    reactStrictMode: false,
    images: {
        loader: 'akamai', //optimization engine for images
        path: '/',
        domains: ['www.adobe.com',"cdn.dribbble.com","i.pinimg.com"],
    },
    distDir: '.next',
}