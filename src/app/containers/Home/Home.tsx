import React, { FC, useRef, useState } from 'react'
import { Grid, Card, Box, useTheme, useMediaQuery } from '@material-ui/core'
import { steps } from './resources'
import { Users, userTypeToStringMap } from 'types/user'
import { Projects, projectTypeToStringMap } from 'types/projects'
import { ProjectTypes } from './ProjectTypes'
import { UserJourney } from './UserJourney/UserJourney'
import { ChooseRoleAndProjectType } from './ChooseRoleAndProjectType'
import PeopleIcon from '@material-ui/icons/People'
import SearchIcon from '@material-ui/icons/Search'
import AssignmentIcon from '@material-ui/icons/Assignment'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import { TitleScreen } from './TitleScreen/TitleScreen'
import { TextSection } from './TextSection/TextSection'

export const Home: FC = () => {
  const [userType, setUserType] = useState<Users>(Users.STUDENT)
  const [projectType, setProjectType] = useState<Projects>(Projects.COMMUNITY)
  const startRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <TitleScreen startRef={startRef} />
      <Grid container ref={startRef}>
        <Grid item lg={2} md={1}></Grid>
        <Grid item lg={8} md={10} sm={12} xs={12}>
          <Card elevation={5}>
            <Box paddingX={isPhone ? 0 : 5}>
              <TextSection
                title="About us."
                content="An undergraduate club that partners local, community oriented
                  organizations with students teams to generate a product for
                  the community and develop industry skills not taught in
                  school."
                Icon={PeopleIcon}
                isPhone={isPhone}
              />
              <TextSection
                title="Purpose."
                content="There is often a catch 22 scenario for students when looking for internships – everyone requires that you have prior experience so it’s impossible to get a foot in the door. VEEP addresses this by not only running industry level projects to get students the skill and experience they need, but also by providing a public service which feels good and looks good on students’ resumes."
                Icon={SearchIcon}
                iconLeft
                isPhone={isPhone}
              />
              <TextSection
                title="Our Program."
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum blanditiis aut sapiente expedita, voluptates nemo praesentium quibusdam sit recusandae possimus nesciunt ipsa, porro optio! Alias minus natus sapiente mollitia nulla perspiciatis quisquam eveniet ullam sequi maxime adipisci deleniti, vitae illo aut sit autem! Minima itaque fuga nam voluptatibus error."
                Icon={AssignmentIcon}
                isPhone={isPhone}
              />
              <ProjectTypes
                setProjectType={setProjectType}
                projectTypeToStringMap={projectTypeToStringMap}
              />
              <TextSection
                title="Your Journey."
                content="Select your desired role and project types below to get an insight about the expectations for the role, what you can expect to get out of it, and what a year with VEEP would look like for you"
                iconLeft
                Icon={FlightTakeoffIcon}
                isPhone={isPhone}
              />
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
            </Box>
          </Card>
        </Grid>
        <Grid item lg={2} md={1}></Grid>
      </Grid>
    </>
  )
}
