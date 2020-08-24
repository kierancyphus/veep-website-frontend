import React, { FC, ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  Button,
  Link,
} from '@material-ui/core'
import { WithProjectType, WithProjectTypeSetter } from 'types/projects'
import { Link as RouterLink } from 'react-router-dom'

export interface ProjectTypeCardProps
  extends WithProjectType,
    WithProjectTypeSetter {
  imageSrc?: string
  description: string
  Icon?: ReactNode
  title: string
  links: Record<string, string>
}

export const getLink = (projectType: number, text: string): string =>
  `/projects?projectType=${projectType}&time=${text
    .split(' ')[0]
    .toLowerCase()}`

export const ProjectTypeCard: FC<ProjectTypeCardProps> = ({
  projectType,
  description,
  Icon,
  setProjectType,
  imageSrc,
  title,
  links,
}) => (
  <Card elevation={5}>
    <Box padding={3}>
      <CardActionArea onClick={() => setProjectType(projectType)}>
        {Icon && Icon}
        {imageSrc && <CardMedia src={imageSrc} />}
        <CardHeader title={title} titleTypographyProps={{ align: 'center' }} />
        <CardContent>
          <Typography variant="body1" align="center">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box display="flex" justifyContent="center" width="100%">
        <Link component={RouterLink} to="/projects" style={{ width: '100%' }}>
          <Button fullWidth>View Projects</Button>
        </Link>
      </Box>
    </Box>
  </Card>
)
