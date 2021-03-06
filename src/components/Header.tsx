import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import avatar from '../assets/img/avator.jpg'
import Avatar from '@mui/material/Avatar'
import { maxWidth, textAlign } from '@mui/system'
import { auto } from '@popperjs/core'
interface HeaderProps {
  sections?: ReadonlyArray<{
    title: string
    url: string
  }>
  title: string
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size='small' href='/'>
          主页
        </Button>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {false ? (
          <Link href='/user'>
            <Avatar
              sx={{ width: 36, height: 36 }}
              alt='Remy Sharp'
              src={avatar}
            />
          </Link>
        ) : (
          <Button href='/login'>登录</Button>
        )}
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{
          justifyContent: 'space-between',
          overflowX: 'auto',
          maxWidth: '1200px',
          marginX: auto,
        }}
      >
        {sections?.map((section) => (
          <Link
            color='inherit'
            noWrap
            key={section.title}
            variant='body2'
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}
