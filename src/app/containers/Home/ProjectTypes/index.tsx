import React, { FC } from 'react'
import { Box, Grid } from '@material-ui/core'
import { WithProjectTypeSetter, Projects } from 'types/projects'
import { Fade } from 'react-reveal'
import { ProjectTypeCard } from './ProjectTypeCard'
import { useTranslation } from 'react-i18next'

export interface ProjectTypeProps extends WithProjectTypeSetter {
  projectTypeToStringMap: Record<number, string>
}

export const ProjectTypes: FC<ProjectTypeProps> = ({
  setProjectType,
  projectTypeToStringMap,
}) => {
  const { t } = useTranslation('translation')
  const projectTypes = [Projects.COMMUNITY, Projects.CLUBS, Projects.RESEARCH]
  const links = {
    'Upcoming Projects': '/upcoming-projects',
    'Current Projects': '/current-projects',
    'Previous Projects': '/previous-projects',
  }
  return (
    <Box margin={10}>
      <Grid container spacing={3} justify="center">
        {projectTypes.map(type => (
          <Grid item xl={4} lg={12} key={`project-card-${type}`}>
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
