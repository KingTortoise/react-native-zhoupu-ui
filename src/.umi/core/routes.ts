// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/node_modules/dumi-theme-mobile/src/layouts/demo.tsx').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-mobile/src/builtins/Previewer.tsx');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/node_modules/dumi-theme-mobile/src/layouts/index.tsx').default],
    "routes": [
      {
        "path": "/components/quickly-entry",
        "component": require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/src/QuicklyEntry/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/QuicklyEntry/index.md",
          "updatedTime": 1616585357000,
          "componentName": "QuicklyEntry",
          "title": "QuicklyEntry",
          "group": {
            "title": "QuicklyEntry",
            "path": "/components/quickly-entry"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "QuicklyEntry"
      },
      {
        "path": "/components/zptext",
        "component": require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/src/ZPText/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/ZPText/index.md",
          "updatedTime": 1616585357000,
          "componentName": "ZPText",
          "title": "ZPText",
          "group": {
            "title": "ZPText",
            "path": "/components/zptext"
          },
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Demo",
              "heading": "demo"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ]
        },
        "title": "ZPText"
      },
      {
        "path": "/",
        "component": require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1616487896000,
          "title": "ZhoupuData-UI - 基于 dumi 和 TypeScript 实现的移动端组件库",
          "hero": {
            "title": "ZhoupuData-UI",
            "desc": "<div class=\"markdown\"><p>移动端组件库</p></div>",
            "actions": [
              {
                "text": "开始使用",
                "link": "/guide"
              }
            ]
          },
          "features": [
            {
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>使用方式简单</p></div>"
            },
            {
              "title": "React 进阶必备",
              "desc": "<div class=\"markdown\"><p>使用 React 函数式编程</p></div>"
            },
            {
              "title": "TypeScript",
              "desc": "<div class=\"markdown\"><p>代码全部使用 TypeScript 开发，提供完整的组件和 API 类型定义</p></div>"
            }
          ],
          "slugs": []
        },
        "title": "ZhoupuData-UI - 基于 dumi 和 TypeScript 实现的移动端组件库"
      },
      {
        "path": "/guide",
        "component": require('/Users/jinwenwu/Documents/work_zhoupu/react-native-zhoupu-ui/docs/guide/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1616487896000,
          "title": "介绍",
          "order": 1,
          "toc": "menu",
          "nav": {
            "title": "指南",
            "order": 0,
            "path": "/guide"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "介绍",
              "heading": "介绍"
            },
            {
              "depth": 2,
              "value": "使用方法",
              "heading": "使用方法"
            }
          ]
        },
        "title": "介绍"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/quickly-entry"
      }
    ],
    "title": "ZhoupuData-UI",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
