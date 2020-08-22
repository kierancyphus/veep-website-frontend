import React, { FC } from 'react'
import { getQueryValues } from 'utils/getQueryValues'
import { useLocation } from 'react-router-dom'
import { TabsAndContent } from './TabsAndContent'
import { ProjectCardProps } from './ProjectCard'
import { CardLayoutContainer } from './CardLayoutContainer'
import { BasicPageContainer } from '../Common/BasicPageContainer'

// Testing variables - This will throw some react errors because all of the keys are the same.
const testProject: ProjectCardProps = {
  orgName: 'Organization',
  projectTitle: 'Database Management System',
  description:
    'Organization uses this current implementation which has the issues of X, Y and Z. This project will look to resolve those by developing a database management system that has a connecting API used by their existing website. Some other stuff that I cant think of now',
  roles: [
    'Frontend Software Engineer',
    'Backend Software Engineer',
    'Fullstack Engineer',
    'Product Manager / Communications Lead',
  ],
  apply: 'google.com',
  key: 'some-unique-key',
}

/**
 * In the future, this will have to make an api call to the core to get all of the projects
 * This api should also include queries so that the user can filter by year, tools, roles...
 */
export const Projects: FC = () => {
  const location = useLocation()
  const timeToTabMapper = { upcoming: 0, current: 1, previous: 2 }
  const initialProjectType = location.search
    ? timeToTabMapper[getQueryValues(location.search).time]
    : undefined

  const content = {
    'Upcoming Projects': [
      <CardLayoutContainer
        cardLayoutData={{
          Community: [testProject, testProject, testProject],
          'Campus Clubs': [testProject, testProject],
          Research: [testProject],
        }}
      />,
    ],
    'Current Projects': [
      <CardLayoutContainer
        cardLayoutData={{
          Community: [testProject, testProject, testProject],
          'Campus Clubs': [testProject, testProject],
          Research: [testProject],
        }}
      />,
    ],
    'Previous Projects': [
      <CardLayoutContainer
        cardLayoutData={{
          2019: [testProject],
          2020: [testProject, testProject],
        }}
      />,
    ],
  }
  return (
    <BasicPageContainer title="Projects.">
      <TabsAndContent content={content} initialTab={initialProjectType} />
    </BasicPageContainer>
  )
}
