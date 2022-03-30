import { useState } from 'react'
import { Editor, Viewer } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs.css'
// import highlight from '@bytemd/plugin-highlight-ssr'
import zhHans from 'bytemd/lib/locales/zh_Hans.json'

import post1 from '../../assets/md/blog-post.1.md'

//TODO:代码语法高亮 用户界面
const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
]

export default function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <Editor
        locale={zhHans}
        value={value}
        plugins={plugins}
        uploadImages={async (files) => {
          // TODO: upload images here
          return [
            {
              url: 'https://picsum.photos/200/300',
            },
          ]
        }}
        onChange={(v) => {
          setValue(v)
        }}
      />
      <Viewer value={post1} plugins={plugins}></Viewer>
    </>
  )
}
