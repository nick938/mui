import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import Container from '@mui/material/Container'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../../components/Header'

import Footer from '../../components/Footer'

import { Outlet } from 'react-router'

const sections = [
  { title: '综合', url: '/' },
  { title: '科技', url: '/science' },
  { title: '文化', url: '/cluture' },
  { title: '商业', url: '/business' },
  { title: '政治', url: '/ploitics' },
  { title: '观点', url: '/opinion' },
  { title: '健康', url: '/health' },
  { title: '潮流', url: 'style' },
  { title: '旅行', url: 'travel' },
]

const theme = createTheme({})

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title='刘易的博客' sections={sections} />
      <Container maxWidth='lg'>
        <Outlet />
      </Container>
      <Footer
        title='Footer'
        description='Something here to give the footer a purpose!'
      />
    </ThemeProvider>
  )
}
