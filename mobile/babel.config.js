module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          test: './test',
        },
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    ],
    'react-native-reanimated/plugin', // has to be listed last.
  ],
};
