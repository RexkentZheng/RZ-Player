/*
 * @Author: your name
 * @Date: 2020-06-04 21:19:06
 * @LastEditTime: 2020-06-09 20:44:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \autoChessTTe:\RN-Apps\RZPlayer\babel.config.js
 */ 
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['import', {libraryName: '@ant-design/react-native'}],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
