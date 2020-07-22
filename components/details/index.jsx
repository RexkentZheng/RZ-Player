import React, { Component } from 'react';
import tools from './../../lib/site/tools';
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import styles from './../style';
import Loading from './../loading/index';
import {observer, inject} from 'mobx-react';
import VideoPlayer from 'react-native-rn-videoplayer';

@inject('store')
@observer
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen: false,
      loading: false,
      details: {
        m3u8_urls: [],
        imgUrl: '   ',
      },
      m3u8Url: '---'
    }
  }

  componentDidMount() {
    const { site, detail } = this.props.route.params;
    this.setState({
      loading: true
    });
    tools.detail_get(site, detail).then((res) => {
      this.setState({
        loading: false,
        details: res,
        m3u8Url: this.getUrl(res.m3u8_urls[0])
      }, () => {
        this.player.reLoad()
      })
    })
  }

  getName (name) {
    return name.split('$')[0].split('>')[1]
  }

  getUrl (name) {
    const inputDom = name.split(this.getName(name))[0];
    const valuePart = inputDom.split(' ')[3];
    console.log(valuePart.split('"')[1])
    return valuePart.split('"')[1];
  }

  getImgUrl (dom) {
    const valuePart = dom.split(' ')[2];
    return valuePart.split('"')[1];
  }

  updateM3U8 (m3u8Url) {
    this.setState({ m3u8Url }, () => {
      this.player.reLoad()
    })
  }

  updateScreenType (status) {
    this.setState({
      fullScreen: status === 'full'
    })
  }

  renderAllSeenList = () => (
    <View style={{ backgroundColor: "rgba(0,0,0,0.6)", position: "absolute", top: 0, bottom: 0, right: 0, }}>
        <ScrollView>
          {
            this.state.details.m3u8_urls.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.detailWrapperItem}
                  key={`episo-${index}`}
                  onPress={() => this.updateM3U8(this.getUrl(item))}>
                  <Text style={styles.detailWrapperItemText}>{this.getName(item)}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>      
      </View>
    )

  render() {
    const { navigation, store } = this.props;

    return (
      <ScrollView style={styles.detail}>
        <StatusBar barStyle="dark-content" hidden={this.state.fullScreen} />
        <Loading loading={this.state.loading} text='正在载入详情，请稍候' />
        <VideoPlayer
            url={this.state.m3u8Url}
            ref={(ref)=>this.player=ref}
            navigation={navigation}//路由 用于小屏屏播放的返回按钮
            onWindowChange={(status) => this.updateScreenType(status)}
            continuous={true}
            renderAllSeenList={this.renderAllSeenList}
          />
          <View style={{flex: 1, display: `${this.state.fullScreen ? 'none' : 'flex'}`}}>
            <Text style={styles.detailTitle}>{this.state.details.name}</Text>
            <View style={styles.detailImgWrapper}>
              <Image
                source={{uri: this.getImgUrl(this.state.details.imgUrl)}}
                style={styles.detailImg} />
            </View>
            <Text style={styles.detailDesc}>{this.state.details.desc}</Text>
            <View style={styles.detailWrapper}>
              {
                this.state.details.m3u8_urls.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.detailWrapperItem}
                      key={`episo-${index}`}
                      onPress={() => this.updateM3U8(this.getUrl(item))}>
                      <Text style={styles.detailWrapperItemText}>{this.getName(item)}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
        </View>
      </ScrollView>
    )
  }
}
