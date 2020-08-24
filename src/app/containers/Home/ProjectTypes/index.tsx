import React, { FC } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { WithProjectTypeSetter, Projects } from 'types/projects'
import { Fade } from 'react-reveal'
import { ProjectTypeCard } from './ProjectTypeCard'
import { useTranslation } from 'react-i18next'
// import research from 'src/assets/research.jpg'
// import campus from 'src/assets/campus.jpg'
// import community from 'src/assets/community.jpg'

export interface ProjectTypeProps extends WithProjectTypeSetter {
  projectTypeToStringMap: Record<number, string>
}

export const ProjectTypes: FC<ProjectTypeProps> = ({
  setProjectType,
  projectTypeToStringMap,
}) => {
  const { t } = useTranslation('translation')
  const projects = [
    { type: Projects.COMMUNITY, img: 'community' },
    { type: Projects.CLUBS, img: 'campus' },
    { type: Projects.RESEARCH, img: 'research' },
  ]
  const links = {
    'Upcoming Projects': '/upcoming-projects',
    'Current Projects': '/current-projects',
    'Previous Projects': '/previous-projects',
  }
  return (
    <Box
      padding={5}
      margin={5}
      borderRadius={5}
      style={{ backgroundColor: 'rgb(232,232,232)' }}
    >
      <Box marginBottom={4} display="flex" justifyContent="center">
        <Typography variant="h4" color="textSecondary">
          Project Types.
        </Typography>
      </Box>

      <Grid container spacing={3} justify="center">
        {projects.map(({ type, img }) => (
          <Grid item xl={4} lg={4} md={12} key={`project-card-${type}`}>
            <Fade down>
              <ProjectTypeCard
                projectType={type}
                description={t(`home.projects_${type}_description`)}
                setProjectType={setProjectType}
                title={projectTypeToStringMap[type]}
                links={links}
              />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
