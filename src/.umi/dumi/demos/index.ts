// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'QuicklyEntry-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  exports["default"] = exports.quickEntryDate = void 0;

  var _react = _interopRequireDefault(require("react"));

  var _reactNativeZhoupuUi = require("react-native-zhoupu-ui");

  var _icon_follow = _interopRequireDefault(require("/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/src/QuicklyEntry/images/icon_follow.png"));

  var _icon_frozen = _interopRequireDefault(require("/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/src/QuicklyEntry/images/icon_frozen.png"));

  var _icon_history = _interopRequireDefault(require("/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/src/QuicklyEntry/images/icon_history.png"));

  var _icon_received = _interopRequireDefault(require("/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/src/QuicklyEntry/images/icon_received.png"));

  var _icon_visit = _interopRequireDefault(require("/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/src/QuicklyEntry/images/icon_visit.png"));

  var quickEntryDate = [{
    title: 'item1',
    icon: _icon_follow["default"],
    callback: function callback() {
      console.log("item1 clicked!!");
    }
  }, {
    title: 'item2',
    icon: _icon_frozen["default"],
    callback: function callback() {
      console.log("item2 clicked!!");
    }
  }, {
    title: 'item3',
    icon: _icon_history["default"],
    callback: function callback() {
      console.log("item3 clicked!!");
    }
  }, {
    title: 'item4',
    icon: _icon_received["default"],
    callback: function callback() {
      console.log("item4 clicked!!");
    }
  }, {
    title: 'item5',
    icon: _icon_visit["default"],
    callback: function callback() {
      console.log("item5 clicked!!");
    }
  }, {
    title: 'item6',
    icon: _icon_follow["default"],
    callback: function callback() {
      console.log("item6 clicked!!");
    }
  }, {
    title: 'item7',
    icon: _icon_frozen["default"],
    callback: function callback() {
      console.log("item7 clicked!!");
    }
  }, {
    title: 'item8',
    icon: _icon_history["default"],
    callback: function callback() {
      console.log("item8 clicked!!");
    }
  }, {
    title: 'item9',
    icon: _icon_received["default"],
    callback: function callback() {
      console.log("item9 clicked!!");
    }
  }];
  exports.quickEntryDate = quickEntryDate;

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_reactNativeZhoupuUi.QuicklyEntry, {
      data: quickEntryDate
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { QuicklyEntry } from 'react-native-zhoupu-ui';\nimport icon_follow from './images/icon_follow.png';\nimport icon_frozen from './images/icon_frozen.png';\nimport icon_history from './images/icon_history.png';\nimport icon_receied from './images/icon_received.png';\nimport icon_visit from './images/icon_visit.png';\n\nexport const quickEntryDate = [\n  {\n    title: 'item1',\n    icon: icon_follow,\n    callback: () => {\n      console.log(`item1 clicked!!`);\n    },\n  },\n  {\n    title: 'item2',\n    icon: icon_frozen,\n    callback: () => {\n      console.log(`item2 clicked!!`);\n    },\n  },\n  {\n    title: 'item3',\n    icon: icon_history,\n    callback: () => {\n      console.log(`item3 clicked!!`);\n    },\n  },\n  {\n    title: 'item4',\n    icon: icon_receied,\n    callback: () => {\n      console.log(`item4 clicked!!`);\n    },\n  },\n  {\n    title: 'item5',\n    icon: icon_visit,\n    callback: () => {\n      console.log(`item5 clicked!!`);\n    },\n  },\n  {\n    title: 'item6',\n    icon: icon_follow,\n    callback: () => {\n      console.log(`item6 clicked!!`);\n    },\n  },\n  {\n    title: 'item7',\n    icon: icon_frozen,\n    callback: () => {\n      console.log(`item7 clicked!!`);\n    },\n  },\n  {\n    title: 'item8',\n    icon: icon_history,\n    callback: () => {\n      console.log(`item8 clicked!!`);\n    },\n  },\n  {\n    title: 'item9',\n    icon: icon_receied,\n    callback: () => {\n      console.log(`item9 clicked!!`);\n    },\n  },\n];\n\nexport default () => <QuicklyEntry data={quickEntryDate} />;"}},"dependencies":{"react":{"version":"*"},"react-native-zhoupu-ui":{"version":"0.1.3"},"react-native":{"version":"*"}},"componentName":"QuicklyEntry","title":"Foo demo","identifier":"QuicklyEntry-demo"},
  },
  'ZPText-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _reactNativeZhoupuUi = require("react-native-zhoupu-ui");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_reactNativeZhoupuUi.ZPText, null);
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { ZPText } from 'react-native-zhoupu-ui';\n\nexport default () => <ZPText />;"}},"dependencies":{"react":{"version":"*"},"react-native-zhoupu-ui":{"version":"0.1.3"},"react-native":{"version":"*"}},"componentName":"ZPText","identifier":"ZPText-demo"},
  },
};
