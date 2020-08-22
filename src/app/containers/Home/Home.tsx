import React, { Children, FC, useState } from 'react'
import { Grid, Card, CardContent, Typography, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { steps } from './resources'
import { Users, userTypeToStringMap } from 'types/user'
import { Projects, projectTypeToStringMap } from 'types/projects'
import { ProjectTypes } from './ProjectTypes'
import { UserJourney } from './UserJourney'
import { ChooseRoleAndProjectType } from './ChooseRoleAndProjectType'
import { BoxFade } from '../Common/BoxFade/BoxFade'
import { useHistory } from 'react-router-dom'
import photo from 'assets/parallax.jpg'
import { Parallax, Background } from 'react-parallax'

/**
 * These numbers only work on my computer - NOT for different screen sizes
 * Have to go and look at the docs to figure out what the strength attribute is doing
 */
const ParallaxComp: FC = () => {
  const words = ['Pretentious.', 'Stylish.', 'White space.']
  return (
    <Parallax blur={1000} strength={1000}>
      <Background className="custom-bg">
        <img src={photo} alt="" />
        <BoxFade height="60vh" marginY="72vh" down cascade>
          <div>
            {words.map(word => (
              <Box
                display="flex"
                justifyContent="center"
                marginY={5}
                key={word}
              >
                <Typography variant="h1">{word}</Typography>
              </Box>
            ))}
          </div>
        </BoxFade>
      </Background>
      <div style={{ height: '100vh', width: '100vw' }}></div>
      {Children}
    </Parallax>
  )
}

export const Home: FC = () => {
  const [userType, setUserType] = useState<Users>(Users.STUDENT)
  const [projectType, setProjectType] = useState<Projects>(Projects.COMMUNITY)
  const { t } = useTranslation('translation')
  const words = ['Pretentious.', 'Stylish.', 'White space.']
  const History = useHistory()
  console.log('History', History)
  return (
    <>
      This should all be parallax
      <BoxFade height="60vh" marginY="20vh" paddingX="20vw" down cascade>
        <div>
          {words.map(word => (
            <Box display="flex" justifyContent="center" marginY={5} key={word}>
              <Typography variant="h1">{word}</Typography>
            </Box>
          ))}
        </div>
      </BoxFade>
      {/* <ParallaxComp /> */}
      <Grid container>
        <Grid item lg={2} md={1}></Grid>
        <Grid item lg={8} md={10} sm={12} xs={12}>
          <Card elevation={5}>
            <CardContent>
              <BoxFade down margin={10}>
                <Typography variant="h5">Some kind of title I guess</Typography>
                <br />
                <Typography variant="body1">{t('home.intro_body')}</Typography>
                <br />
                <Typography variant="body1">
                  {t('home.intro_project_desc')}
                </Typography>
              </BoxFade>
              <ProjectTypes
                setProjectType={setProjectType}
                projectTypeToStringMap={projectTypeToStringMap}
              />
              <BoxFade down marginY={5} marginX={10}>
                <Typography variant="body1">
                  To see exactly what your VEEP experience would be like, please
                  choose buttons below
                </Typography>
              </BoxFade>
              <ChooseRoleAndProjectType
                userType={userType}
                setUserType={setUserType}
                projectType={projectType}
                setProjectType={setProjectType}
                userTypeToStringMap={userTypeToStringMap}
                projectTypeToStringMap={projectTypeToStringMap}
              />
              <UserJourney
                userType={userType}
                projectType={projectType}
                steps={steps}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={2} md={1}></Grid>
      </Grid>
    </>
  )
}
