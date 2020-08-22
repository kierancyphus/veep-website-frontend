import React, { FC } from 'react'
import { BasicPageContainer } from '../Common/BasicPageContainer'
import { Typography, Box } from '@material-ui/core'
import { BoxFade } from '../Common/BoxFade/BoxFade'
import { CardLayout } from '../Common/CardLayout'
import { ExecProfile } from './ExecProfile/ExecProfile'
import { portfolios } from './execStore'

/**
 * Like Projects, this in the future will make an api call to the core. For now, everything will be saved
 * in execStore.ts
 */
export const AboutUs: FC = () => {
  return (
    <BasicPageContainer title="About Us.">
      <Typography variant="h5">
        Who we are / what we do. What is the reasoning behind why we are doing
        this. History of VEEP as a club, what we are doing differently now from
        in the past.
      </Typography>
      <br />
      <Typography variant="h5">
        This is a paragraph about the exec team and the work that they do. We
        are always growing and super open to students joining the exec team,
        either directly from the projects or externally. Currently looking for
        designers!
      </Typography>
      {Object.entries(portfolios).map(([portfolio, portfolioData]) => (
        <BoxFade down key={portfolio} marginY={5}>
          <Box marginBottom={1}>
            <Typography variant="h4" color="textSecondary">
              {portfolio}
            </Typography>
          </Box>

          <CardLayout cards={portfolioData} Element={ExecProfile} />
        </BoxFade>
      ))}
    </BasicPageContainer>
  )
}
