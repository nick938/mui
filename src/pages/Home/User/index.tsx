import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
} from '@mui/material'
import Header from '../../../components/Header'
import avatar from '../../../assets/img/avator.jpg'
import { flexbox, fontSize } from '@mui/system'
import Main from '../../../components/Main'
import post1 from '../../../assets/md/blog-post.1.md'
import post2 from '../../../assets/md/blog-post.2.md'
import post3 from '../../../assets/md/blog-post.3.md'
import { Link, NavLink } from 'react-router-dom'
const theme = {}

const posts = [post1, post2, post3]
export default function App() {
  return (
    <Grid container spacing={1} sx={{ padding: '2.5rem' }}>
      <Grid item xs={7}>
        <Box sx={{ display: 'flex' }}>
          <Avatar src={avatar} sx={{ width: 96, height: 96 }} />
          <Box flexGrow={1}>
            <Box sx={{ fontSize: '2rem' }}>用户名</Box>
            <p>个人简介</p>
          </Box>
          <Button>修改资料</Button>
          <Button href='/editor'>写文章</Button>
        </Box>
        <Box>
          <Link to={'/'}>动态</Link>{' '} 
          <Link to={'/'}>文章</Link>
          <Main title='' posts={posts} />
        </Box>
      </Grid>
      <Grid item xs={4} sx={{ marginLeft: 2 }}>
        <h1>关注了</h1>
        <h1>关注者</h1>
      </Grid>
    </Grid>
  )
}
