import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Markdown from './Markdown'
// import { Editor, Viewer } from '@bytemd/react'
// import gfm from '@bytemd/plugin-gfm'
// import highlight from '@bytemd/plugin-highlight'
// import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs.css'
// import zhHans from 'bytemd/lib/locales/zh_Hans.json'


interface MainProps {
  posts: ReadonlyArray<string>
  title: string
}

export default function Main(props: MainProps) {
  const { posts, title } = props

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3, //这个样式不起作用
        },
      }}
    >
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown value={post} key={post.substring(0, 40)} />
      ))}
    </Grid>
  )
}
