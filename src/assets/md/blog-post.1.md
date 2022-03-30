# 博客示例

_April 1, 2020 by [Olivier](/)_

This blog post shows a few different types of content that are supported and styled with
Material styles. Basic typography, images, and code are all supported.
You can extend these by modifying `Markdown.js`.

```js
import { Editor, Viewer } from 'bytemd'
import gfm from '@bytemd/plugin-gfm'
const plugins = [
  gfm(),
  // Add more plugins here
]
const editor = new Editor({
  target: document.body, // DOM to render
  props: {
    value: '',
    plugins,
  },
})
editor.on('change', (e) => {
  editor.$set({ value: e.detail.value })
})
```

