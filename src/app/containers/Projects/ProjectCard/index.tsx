import React, { FC, useState } from 'react'
import { BoxFade } from '../../Common/BoxFade/BoxFade'
import {
  Typography,
  Card,
  CardHeader,
  Button,
  Box,
  IconButton,
  Paper,
  Avatar,
  Divider,
} from '@material-ui/core'
import { ChevronDown, ChevronUp } from 'react-feather'
import { WithKey } from 'types/projects'
import { techLogoMap, techToWebsiteMap } from 'assets/techLogos'
import { Tech } from 'types/projects'

/**
 * We could assign a publicId to each of the projects in the database,
 * which would serve as good keys. Alternatively, it could just be
 * `${orgName}-${projectTitle}` which should be unique
 */
export interface ProjectCardProps extends WithKey {
  orgName: string
  projectTitle: string
  techStack: Tech[]
  description: string
  roles?: string[]
  teamMembers?: string[]
  apply?: string
  aboutOrg?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  orgName,
  projectTitle,
  techStack,
  description,
  roles,
  teamMembers,
  apply,
  aboutOrg,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <Card elevation={5}>
      <Box margin={1}>
        <CardHeader title={orgName} subheader={projectTitle} />
        {apply && (
          <Box display="flex" justifyContent="center" marginX={2} mb={1}>
            <a
              href={apply}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <Button fullWidth variant="outlined">
                Apply
              </Button>
            </a>
          </Box>
        )}
        <Box px={2}>
          <Box display="flex" justifyContent="space-around" mb={1}>
            {techStack.map(tech => (
              <Button fullWidth>
                <a href={techToWebsiteMap[tech]} target="__blank">
                  <Avatar
                    alt={tech}
                    src={techLogoMap[tech]}
                    style={{ width: '2rem', height: '2rem' }}
                  />
                </a>
              </Button>
            ))}
          </Box>

          <Typography variant="body1">{description}</Typography>
        </Box>
        {expanded && aboutOrg && (
          <Box mx={2} my={1}>
            <Box mb={1}>
              <Typography variant="h6">About Organization</Typography>
              <Divider />
            </Box>
            <Typography>{aboutOrg}</Typography>
          </Box>
        )}
        {expanded && roles && (
          <BoxFade down marginX={2}>
            <Box mb={1}>
              <Typography variant="h6">Roles</Typography>
              <Divider />
            </Box>

            <Paper elevation={3}>
              {roles.map(role => (
                <Button key={`${orgName}-${projectTitle}-${role}`} fullWidth>
                  {role}
                </Button>
              ))}
            </Paper>
          </BoxFade>
        )}
        {expanded ? (
          <Box display="flex" justifyContent="flex-start">
            <IconButton onClick={() => setExpanded(false)}>
              <ChevronUp />
            </IconButton>
          </Box>
        ) : (
          <Box display="flex" justifyContent="flex-start">
            <IconButton onClick={() => setExpanded(true)}>
              <ChevronDown />
            </IconButton>
          </Box>
        )}
      </Box>
    </Card>
  )
}
