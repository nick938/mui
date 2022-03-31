import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import './style.css'
import { Editor } from '@bytemd/react'
import zhHans from 'bytemd/lib/locales/zh_Hans.json'
import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'

export default function Editor1() {
  const [value, setValue] = useState('')
  const plugins = [
    gfm(),
    highlight(),
    // Add more plugins here
  ]
  return (
    <Box>
      <TextField placeholder='输入标题' sx={{width:'90vw'}}></TextField>
      <Button>提交</Button>
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
    </Box>
  )
}
