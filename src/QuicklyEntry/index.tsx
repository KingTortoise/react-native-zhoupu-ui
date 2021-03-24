/*
 * @Description: 快捷入口（设计术语：金刚区）；一般在首页banner区下方，属于页面的核心功能区域，多以宫格的形式排列展现的图标，一般情况一屏4~10个。
 * @Company: zhoupudata
 * @Author: fengwenlong
 * @Date: 2021-02-25 19:46:35
 * @LastEditors: jinwenwu
 * @LastEditTime: 2021-03-24 13:47:37
 */
import React from 'react';
import {
  Dimensions,
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import { debounce } from 'lodash';

type ItemType = {
  // 宫格内图标
  icon: ImageURISource | string;
  // 宫格内标题
  title: string;
  // 点击宫格的回调函数
  callback?: () => void;
};

type PropsType = {
  /**
   * @description       金刚区数据
   */
  data: ItemType[];
  /**
   * @description       金刚区的外层样式
   * @default           {}
   */
  rootStyle?: { [key: string]: any };
  /**
   * @description       列数
   * @default           4
   */
  columns?: number;
  /**
   * @description       宫格的上下的内边距
   */
  innerVerticalPadding?: number;
  /**
   * @description       宫格内图标与文字的间距
   */
  textPadding?: number;
  /**
   * @description       文字的字体大小
   */
  fontSize?: number;
  /**
   * @description       文字的颜色
   */
  fontColor?: string;
  /**
   * @description       图标大小
   */
  iconSize?: number;
};

export default class QuicklyEntry extends React.Component<PropsType> {
  itemStyle: { item: any; icon: any; title: any } = {
    item: {},
    icon: {},
    title: {},
  };
  constructor(props: PropsType) {
    super(props);
    console.log(this.props);
    this.initItemStyle();
  }

  /**
   * 初始化每个宫格的样式，如果有设置对应属性取相应的属性，否则取默认值
   * fontSize: 12
   * fontColor: '#666D7F'
   * iconSize: 40
   * 宫格内部上下边距：14
   * 图标与文字间距： 8
   */
  initItemStyle() {
    const {
      rootStyle = {},
      columns = 4,
      fontSize,
      iconSize,
      fontColor,
      innerVerticalPadding,
      textPadding,
    } = this.props;
    const { width } = rootStyle;
    let itemWidth = 0;
    if (width) {
      itemWidth = Math.floor(width / columns);
    } else {
      const screenWidth = Dimensions.get('window').width;
      itemWidth = Math.floor(screenWidth / columns);
    }
    this.itemStyle = StyleSheet.create({
      item: {
        width: itemWidth,
        paddingVertical: innerVerticalPadding || 14,
        flexDirection: 'column',
        alignItems: 'center',
      },
      icon: {
        height: iconSize || 40,
        width: iconSize || 40,
        resizeMode: 'contain',
      },
      title: {
        fontSize: fontSize || 12,
        color: fontColor || '#666D7F',
        marginTop: textPadding || 8,
        includeFontPadding: false,
      },
    });
  }

  render() {
    const { rootStyle, data = [] } = this.props;
    return (
      <View style={[entryStyle.root, rootStyle && rootStyle]}>
        {data.map((item: ItemType, index: number) => {
          const { icon, title, callback } = item;
          const onItemClick = debounce(
            callback
              ? callback
              : () => {
                  return;
                },
            200,
            { trailing: false, leading: true }
          );
          return (
            <TouchableOpacity
              key={`index_${title}_${index}`}
              style={this.itemStyle.item}
              activeOpacity={0.9}
              onPress={onItemClick}
            >
              <Image
                style={this.itemStyle.icon}
                source={typeof icon === 'string' ? { uri: icon } : icon}
              />
              <Text style={this.itemStyle.title}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const entryStyle = StyleSheet.create({
  root: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
});
