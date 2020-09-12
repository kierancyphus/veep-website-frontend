import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { ProjectCard, ProjectCardProps } from '../ProjectCard'
import { BoxFade } from '../../Common/BoxFade/BoxFade'
import { CardLayout } from '../../Common/CardLayout'

export type ProjectMap = Record<string | number, ProjectCardProps[]>

export interface CardLayoutContainerProps {
  cardLayoutData: ProjectMap
}

export const CardLayoutContainer: FC<CardLayoutContainerProps> = ({
  cardLayoutData,
}) => (
  <>
    {Object.entries(cardLayoutData).map(([separator, cardData]) => (
      <BoxFade down marginY={3} key={separator}>
        <Typography variant="h4" color="textSecondary">
          {separator}
        </Typography>
        <br />
        <CardLayout cards={cardData} Element={ProjectCard} />
      </BoxFade>
    ))}
  </>
)
