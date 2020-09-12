import React, { FC } from 'react'
import { Typography, Box, IconButton } from '@material-ui/core'
import { BoxFade } from 'app/containers/Common/BoxFade/BoxFade'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { SocialMediaRow } from './SocialMediaRow'
import { WithPhone } from 'types/app'
import SmallLogo from 'assets/logos/small.png'

interface TitleScreenProps extends WithPhone {
  startRef: React.RefObject<HTMLDivElement>
}

export const TitleScreen: FC<TitleScreenProps> = ({ startRef, isPhone }) => {
  const words = [
    'Community Engagement.',
    'Learning Opportunities.',
    'Industry Experience.',
  ]

  // const theme = useTheme()

  return (
    <BoxFade height="84vh" marginY="8vh" paddingX="10vw" down cascade>
      <div>
        <Box display="flex" justifyContent="center">
          <img
            src={SmallLogo}
            alt="logo"
            style={{ height: isPhone ? '6rem' : '10rem' }}
          />
        </Box>
        {words.map(word => (
          <Box
            display="flex"
            justifyContent="center"
            marginBottom={5}
            key={word}
          >
            <Typography variant="h1" color="textSecondary" align="center">
              {word}
            </Typography>
          </Box>
        ))}

        <SocialMediaRow />

        <Box display="flex" justifyContent="center" marginTop={isPhone ? 1 : 5}>
          <IconButton
            color="primary"
            onClick={() =>
              startRef && startRef.current
                ? startRef.current.scrollIntoView({ behavior: 'smooth' })
                : null
            }
          >
            <ExpandMoreIcon style={{ fontSize: '75px' }} />
          </IconButton>
        </Box>
      </div>
    </BoxFade>
  )
}
