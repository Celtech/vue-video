module.exports = {
  devServer: {
    proxy: {
      "^/mail_chimp": {
        target: process.env.VUE_APP_MAIL_CHIMP_API_DNS,
        pathRewrite: {
          "^/mail_chimp/": "",
        },
        changeOrigin: true,
      },
    },
  },
};
