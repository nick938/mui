import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../../../components/Header'
import MainFeaturedPost from '../../../components/MainFeaturedPost'
import FeaturedPost from '../../../components/FeaturedPost'
import Main from '../../../components/Main'
import Sidebar from '../../../components/Sidebar'
import Footer from '../../../components/Footer'
import Markdown from '../../../components/Markdown'

import post1 from '../../../assets/md/blog-post.1.md'
import post2 from '../../../assets/md/blog-post.2.md'
import post3 from '../../../assets/md/blog-post.3.md'

const sections = [
  { title: '科技', url: '#' },
  { title: '设计', url: '#' },
  { title: '文化', url: '#' },
  { title: '商业', url: '#' },
  { title: '政治', url: '#' },
  { title: '观点', url: '#' },
  { title: '科学', url: '#' },
  { title: '健康', url: '#' },
  { title: '潮流', url: '#' },
  { title: '旅行', url: '#' },
]

const mainFeaturedPost = {
  title: '主要文章',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: '详细内容...',
}

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
]

const posts = [post1, post2, post3]

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
}

const theme = createTheme()

export default function Blog() {
  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title='From the firehose' posts={posts} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </>
  )
}
