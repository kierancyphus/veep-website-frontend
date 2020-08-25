import React, { ElementType, FC, useRef, useState } from 'react'
import {
  Grid,
  Card,
  Typography,
  Box,
  Tab,
  Tabs,
  Button,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { steps } from './resources'
import { Users, userTypeToStringMap } from 'types/user'
import { Projects, projectTypeToStringMap } from 'types/projects'
import { ProjectTypes } from './ProjectTypes'
import { UserJourney } from './UserJourney'
import { ChooseRoleAndProjectType } from './ChooseRoleAndProjectType'
import { BoxFade } from '../Common/BoxFade/BoxFade'
import { Link as RouterLink } from 'react-router-dom'
import PeopleIcon from '@material-ui/icons/People'
import SearchIcon from '@material-ui/icons/Search'
import AssignmentIcon from '@material-ui/icons/Assignment'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

export interface WithPhone {
  isPhone: boolean
}
interface TextSectionProps extends WithIcon, WithPhone {
  title: string
  content: string
  links?: Record<string, string>
}

interface WithIcon {
  Icon?: ElementType
  iconLeft?: boolean
}

interface WithLeft {
  left: boolean
}

const IconCard = styled(Card)<WithLeft>`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    ${({ left }) => (left ? '135deg' : '225deg')},
    rgba(2, 0, 36, 1) 0%,
    rgba(41, 41, 191, 1) 0%,
    rgba(0, 212, 255, 0.3) 100%
  );
`

const IconGrid: FC<WithIcon & WithPhone> = ({ Icon, iconLeft }) => (
  <>
    {Icon && (
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <Box
          display="flex"
          alignItems="center"
          height="100%"
          justifyContent="center"
        >
          <IconCard elevation={24} left={iconLeft || false}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={4}
            >
              <Icon style={{ fontSize: '125px' }} />
            </Box>
          </IconCard>
        </Box>
      </Grid>
    )}
  </>
)

const TextSection: FC<TextSectionProps> = ({
  title,
  content,
  links,
  Icon,
  iconLeft,
  isPhone,
}) => (
  <Fade down>
    <Box marginX={isPhone ? 6 : 10} marginY={isPhone ? 6 : 15}>
      <Grid container>
        {iconLeft && Icon && !isPhone && (
          <>
            <IconGrid Icon={Icon} iconLeft={iconLeft} isPhone={isPhone} />
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          </>
        )}
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box
            width="100%"
            display="flex"
            justifyContent={isPhone ? '' : iconLeft ? 'flex-end' : ''}
          >
            <Tabs value={0} textColor="primary" variant="standard">
              <Tab
                label={
                  <Typography variant="h4" noWrap>
                    {title}
                  </Typography>
                }
              />
            </Tabs>
          </Box>

          <br />
          <Typography variant="h5" align={'justify'}>
            {content}
          </Typography>
          <Box display="flex" justifyContent="center">
            {links &&
              Object.entries(links).map(([text, href]) => (
                <Link component={RouterLink} to={href} key={`${text}-${href}`}>
                  <Button>{text}</Button>
                </Link>
              ))}
          </Box>
        </Grid>
        {!iconLeft && Icon && !isPhone && (
          <>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
            <IconGrid Icon={Icon} iconLeft={iconLeft} isPhone={isPhone} />
          </>
        )}
      </Grid>
    </Box>
  </Fade>
)

export const Home: FC = () => {
  const [userType, setUserType] = useState<Users>(Users.STUDENT)
  const [projectType, setProjectType] = useState<Projects>(Projects.COMMUNITY)
  const startRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.down('sm'))
  const words = [
    'Community Engagement.',
    'Learning Opportunities.',
    'Industry Experience.',
  ]
  return (
    <>
      <BoxFade height="60vh" marginY="20vh" paddingX="10vw" down cascade>
        <div>
          {words.map(word => (
            <Box display="flex" justifyContent="center" marginY={5} key={word}>
              <Typography variant="h1">{word}</Typography>
            </Box>
          ))}
          <Box display="flex" justifyContent="center" paddingTop={3}>
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
