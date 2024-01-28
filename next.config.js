// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule for PDF files
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: `${isServer ? '../' : ''}static/files/`,
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
