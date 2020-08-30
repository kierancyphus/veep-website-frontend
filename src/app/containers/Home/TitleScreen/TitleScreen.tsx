import React, { FC } from 'react'
import { Typography, Box, IconButton } from '@material-ui/core'
import { BoxFade } from 'app/containers/Common/BoxFade/BoxFade'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Fade } from 'react-reveal'
import { SocialMediaRow } from './SocialMediaRow'

export const TitleScreen: FC<{
  startRef: React.RefObject<HTMLDivElement>
}> = ({ startRef }) => {
  const words = [
    'Community Engagement.',
    'Learning Opportunities.',
    'Industry Experience.',
  ]

  return (
    <BoxFade height="84vh" marginY="8vh" paddingX="10vw" down cascade>
      <div>
        {words.map(word => (
          <Box display="flex" justifyContent="center" marginY={5} key={word}>
            <Typography variant="h1" color="textSecondary" align="center">
              {word}
            </Typography>
          </Box>
        ))}
        <Box display="flex" justifyContent="center" marginY={5}>
          <Typography variant="h1" color="primary" align="center">
            <Box fontWeight={400} letterSpacing={10}>
              VEEP
            </Box>
          </Typography>
        </Box>
        <Fade down>
          <SocialMediaRow />
        </Fade>

        <Box display="flex" justifyContent="center" marginTop={5}>
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
