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
      <TitleScreen startRef={startRef} isPhone={isPhone} />
      <Grid container ref={startRef}>
        <Grid item lg={2} md={1} />
        <Grid item lg={8} md={10} sm={12} xs={12}>
          <Card elevation={5}>
            <Box paddingX={isPhone ? 0 : 5}>
              <TextSection
                title="About us."
                content="The Volunteer Engineering Experience Program (VEEP) is an undergraduate club based at the University of Toronto that pairs local, community oriented organizations with student teams who have technical expertise to create a product that will improve our partner organizations’ impact on their community. Through the process, students develop industry skills not taught in school and participate in a culture of using engineering for social and humanitarian wellness."
                Icon={PeopleIcon}
                isPhone={isPhone}
              />
              <TextSection
                title="Purpose."
                content="Our purpose is twofold - facilitate impact in social contexts through public good oriented projects hosted for technically adept students. It begins with a catch 22 scenario of students everywhere while looking for internships. Employers require that students have prior experience so it feels impossible to get a foot in the door. VEEP addresses this gap by hosting and supporting industry level projects to get students the skill and experience they need. Secondly, we empower students to serve their communities with their technical abilities and by extension, learn more about the needs of the communities around them. Our students learn to showcase their experience in nuanced projects where many stakeholders are involved."
                Icon={SearchIcon}
                iconLeft
                isPhone={isPhone}
              />
              <TextSection
                title="Our Program."
                content="Our project cycle takes course over a 6-8 month period, beginning in September of the fall semester until April of the Winter semester. Students work in teams of 4-6 with a project manager on a weekly basis on their project. While they communicate with their client, they have the full support of VEEP to complete the project. At the end of the year, students showcase their work at an end-of-year event for clients and students alike."
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
        <Grid item lg={2} md={1} />
      </Grid>
    </>
  )
}
