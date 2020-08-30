import React, { FC } from 'react'
import { Box, Button, useTheme } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

export const SocialMediaRow: FC = () => {
  const theme = useTheme()
  const size = theme.typography.h2.fontSize

  return (
    <Box display="flex" justifyContent="space-around" paddingX={10}>
      <Button
        fullWidth
        onClick={() =>
          (window.location.href = 'https://www.facebook.com/uoftveep')
        }
      >
        <FacebookIcon style={{ fontSize: size }} />
      </Button>
      <Button fullWidth>
        <InstagramIcon style={{ fontSize: size }} />
      </Button>
      <Button fullWidth>
        <MailOutlineIcon style={{ fontSize: size }} />
      </Button>
    </Box>
  )
}
