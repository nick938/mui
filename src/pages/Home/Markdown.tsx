import * as React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { Editor, Viewer } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
// import highlight from '@bytemd/plugin-highlight-ssr'

import 'bytemd/dist/index.css'
import 'highlight.js/styles/vs.css'

// import zhHans from 'bytemd/lib/locales/zh_Hans.json'

// function MarkdownListItem(props: any) {
//   return <Box component='li' sx={{ mt: 1, typography: 'body1' }} {...props} />
// }
const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
]
// const options = {
//   overrides: {
//     h1: {
//       component: Typography,
//       props: {
//         gutterBottom: true,
//         variant: 'h4',
//         component: 'h1',
//       },
//     },
//     h2: {
//       component: Typography,
//       props: { gutterBottom: true, variant: 'h6', component: 'h2' },
//     },
//     h3: {
//       component: Typography,
//       props: { gutterBottom: true, variant: 'subtitle1' },
//     },
//     h4: {
//       component: Typography,
//       props: {
//         gutterBottom: true,
//         variant: 'caption',
//         paragraph: true,
//       },
//     },
//     p: {
//       component: Typography,
//       props: { paragraph: true },
//     },
//     a: { component: Link },
//     li: {
//       component: MarkdownListItem,
//     },
//   },
// }

export default function Markdown(props: any) {
  return <Viewer value={props.value} plugins={plugins}/>
}
