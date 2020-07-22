/*
 * @Author: RexZheng
 * @Date: 2020-06-05 22:13:26
 * @LastEditTime: 2020-06-09 22:01:55
 * @Description: 样式表
 * @FilePath: \autoChessTTe:\RN-Apps\RZPlayer\components\style.js
 */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  width7: {
    width: '70%',
  },
  buttomSearch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttomButton: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    marginLeft: 10,
  },
  buttomInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    flex: 7,
  },
  fullWidth: {
    width: '100%',
  },
  mainView: {
    position: 'relative',
    height: '100%',
  },
  buttomPart: {
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  red: {
    backgroundColor: 'red',
  },
  tableItem: {
    // height: 90,
    paddingBottom: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingLeft: 10,
  },
  tableItemTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableItemName: {
    flex: 7,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableItemType: {
    flex: 3,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableItemTime: {
    marginTop: 10,
  },
  detail: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 26,
    marginBottom: 30,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  detailDesc: {
    fontSize: 16,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  detailWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
  detailWrapperItem: {
    marginTop: 5,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 5,
    backgroundColor: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: '#FFF',
  },
  detailWrapperItemText: {
    color: '#FFF',
  },
  detailImgWrapper: {
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 30,
  },
  detailImg: {
    width: 300,
    height: 500,
  },
  detailVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  detailVideoWrapper: {
    flex: 1,
  },
  hidden: {
    display: 'none',
  },
  show: {
    display: 'flex',
  }
});
