module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertColors: {
            currentColor: true,
          },
          removeViewBox: false,
        },
      },
    },
  ],
};
