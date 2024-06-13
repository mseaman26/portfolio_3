// next.config.js
module.exports = {
  images: {
    deviceSizes: [320, 375, 450, 540, 640, 750, 828, 1080, 1200, 1920]
  },
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
