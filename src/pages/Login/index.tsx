import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import * as yup from 'yup'
import { useFormik } from 'formik'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PROPERTY_TYPES } from '@babel/types'
import avatar from '../../assets/img/avator.jpg'
import axios from 'axios'
import { Alert } from '@mui/material'

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/nick938'>
        Liu Yi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

const validationSchema = yup.object({
  email: yup.string().email('邮箱格式错误').required('邮箱为空！'),
  password: yup.string().required('密码为空！'),
})

export default function SignInSide() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const emailRef = useRef()
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
      axios
        .post('http://localhost:3100/api/auth/login', {
          account: values.email,
          pwd: values.password,
          
        })
        .then((res) => {
          // if (res.data.stat === 'ok') {
          //   navigate(`/`)
          // } else {
          //   alert('账号或密码错误')
          // }
          console.log(res)
        })
        .catch((error) => console.log(error))
    },
  })
  // useEffect(load)
  function load() {
    if (Cookies.get('account')) {
      console.log(JSON.parse(Cookies.get('account') || ''))
      let res = JSON.parse(Cookies.get('account') || '')
      // data.set('email', res.username)
      // data.set('password', res.password)
      // setEmail(res.email)
      // setPassword(res.password)
      setRemember(true)
    }
  }

  function unload() {}
  function handleRember(e: any) {
    console.log(e.target.checked)
    Cookies.remove('account')
    setRemember(e.target.checked)
  }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   const data = new FormData(event.currentTarget)
  //   let account = JSON.stringify({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   })
  //   // console.log(account)
  //   if (remember) {
  //     Cookies.set('account', account, {
  //       expires: 7,
  //       secure: true,
  //     })
  //   }
  //   // if (emailRef.current) {
  //   //   console.log( emailRef.current.value )
  //   // }
  //   // console.log(document.getElementById('email')?.ariaValueText)
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //     remember: remember,
  //     // ref: emailRef.current?.value,
  //   })
  // }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ display: 'flex' }}
        >
          <Box
            sx={{
              my: 0,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              // sx={{ m: 1, bgcolor: 'secondary.main' }}
              sx={{ width: 96, height: 96 }}
              alt='Remy Sharp'
              src={avatar}
            />
            <Typography component='h1' variant='h5'>
              搞快点！
            </Typography>
            <Box
              component='form'
              // noValidate
              onSubmit={formik.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                fullWidth
                id='email'
                name='email'
                label='邮箱'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                autoFocus
              />
              <TextField
                margin='normal'
                fullWidth
                id='password'
                name='password'
                label='密码'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value='remember'
                    color='primary'
                    checked={remember}
                    onChange={handleRember}
                  />
                }
                label='记住登录'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                登录
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    忘记密码?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='/register' variant='body2'>
                    {'没有账号? 点击注册'}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
