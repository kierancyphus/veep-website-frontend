import React, { FC, useState } from 'react'
import { BoxFade } from '../../Common/BoxFade/BoxFade'
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  IconButton,
  Paper,
} from '@material-ui/core'
import { ChevronDown, ChevronUp } from 'react-feather'
import { WithKey } from 'types/projects'

/**
 * We could assign a publicId to each of the projects in the database,
 * which would serve as good keys. Alternatively, it could just be
 * `${orgName}-${projectTitle}` which should be unique
 */
export interface ProjectCardProps extends WithKey {
  orgName: string
  projectTitle: string
  description: string
  roles?: string[]
  teamMembers?: string[]
  apply?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  orgName,
  projectTitle,
  description,
  roles,
  teamMembers,
  apply,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <Card elevation={5}>
      <Box margin={1}>
        <CardHeader title={orgName} subheader={projectTitle} />
        {apply && (
          <Box display="flex" justifyContent="center" marginX={2}>
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
        <CardContent>
          {/* Icons here for tech stack */}
          <Typography variant="body1">{description}</Typography>
        </CardContent>
        {expanded &&
          ((roles && (
            <BoxFade down marginX={2}>
              <Box display="flex" justifyContent="center" marginBottom={1}>
                <Typography variant="subtitle1">Roles Available</Typography>
              </Box>
              <Paper elevation={3}>
                {roles.map(role => (
                  <Button key={`${orgName}-${projectTitle}-${role}`} fullWidth>
                    {role}
                  </Button>
                ))}
              </Paper>
            </BoxFade>
          )) ||
            (teamMembers && 'teamMembers'))}
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
