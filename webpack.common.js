const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
  entry: './src/index.tsx',
  // # output에 관한 설정
  output: {
    filename: '[name].bundle.js', // output시 지정할 파일명
    path: path.resolve(__dirname, 'dist'), // output 디렉토리
    clean: true, // 빌드 시 마다 디렉토리의 내용을 전부 삭제
  },
  // # 최적화 옵션
  optimization: {
    minimize: true, // 최적화 활성화
    // 최적화 플러그인 설정
    minimizer: [new ESBuildMinifyPlugin()],
  },
  // # 모듈
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        exclude: /.yarn/,
        options: {
          loader: 'tsx',
          target: 'esnext',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
