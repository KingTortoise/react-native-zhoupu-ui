---
title: QuicklyEntry
group:
  title: QuicklyEntry
nav:
  title: '组件'
  path: /components
---

## Demo

```tsx
/**
 * title: Foo demo
 */

import React from 'react';
import { QuicklyEntry } from 'react-native-zhoupu-ui';
import icon_follow from './images/icon_follow.png';
import icon_frozen from './images/icon_frozen.png';
import icon_history from './images/icon_history.png';
import icon_receied from './images/icon_received.png';
import icon_visit from './images/icon_visit.png';

export const quickEntryDate = [
  {
    title: 'item1',
    icon: icon_follow,
    callback: () => {
      console.log(`item1 clicked!!`);
    },
  },
  {
    title: 'item2',
    icon: icon_frozen,
    callback: () => {
      console.log(`item2 clicked!!`);
    },
  },
  {
    title: 'item3',
    icon: icon_history,
    callback: () => {
      console.log(`item3 clicked!!`);
    },
  },
  {
    title: 'item4',
    icon: icon_receied,
    callback: () => {
      console.log(`item4 clicked!!`);
    },
  },
  {
    title: 'item5',
    icon: icon_visit,
    callback: () => {
      console.log(`item5 clicked!!`);
    },
  },
  {
    title: 'item6',
    icon: icon_follow,
    callback: () => {
      console.log(`item6 clicked!!`);
    },
  },
  {
    title: 'item7',
    icon: icon_frozen,
    callback: () => {
      console.log(`item7 clicked!!`);
    },
  },
  {
    title: 'item8',
    icon: icon_history,
    callback: () => {
      console.log(`item8 clicked!!`);
    },
  },
  {
    title: 'item9',
    icon: icon_receied,
    callback: () => {
      console.log(`item9 clicked!!`);
    },
  },
];

export default () => <QuicklyEntry data={quickEntryDate} />;
```

<API></API>
