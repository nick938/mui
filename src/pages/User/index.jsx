import { useState } from 'react'
import { Editor, Viewer } from '@bytemd/react'
// import gfm from '@bytemd/plugin-gfm'
import 'bytemd/dist/index.css'
const plugins = [
  // gfm(),
  // Add more plugins here
]

export default function App() {
  const [value, setValue] = useState('')

  return (
    <Editor
      value={value}
      // plugins={plugins}
      onChange={(v) => {
        setValue(v)
      }}
    />
  )
}
