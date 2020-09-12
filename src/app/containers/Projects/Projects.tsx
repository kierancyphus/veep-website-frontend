import React, { FC } from 'react'
import { getQueryValues } from 'utils/getQueryValues'
import { useLocation } from 'react-router-dom'
import { TabsAndContent } from './TabsAndContent'
import { CardLayoutContainer } from './CardLayoutContainer'
import { BasicPageContainer } from '../Common/BasicPageContainer'
import {
  upcomingProjects,
  currentProjects,
  previousProjects,
} from './projectStore'

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
      <CardLayoutContainer cardLayoutData={upcomingProjects} />,
    ],
    'Current Projects': [
      <CardLayoutContainer cardLayoutData={currentProjects} />,
    ],
    'Previous Projects': [
      <CardLayoutContainer cardLayoutData={previousProjects} />,
    ],
  }
  return (
    <BasicPageContainer title="Projects.">
      <TabsAndContent content={content} initialTab={initialProjectType} />
    </BasicPageContainer>
  )
}
