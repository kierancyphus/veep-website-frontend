import React, { ElementType, FC } from 'react'
import { Grid } from '@material-ui/core'

interface WithKey {
  key: string
}

export interface CardLayoutProps {
  cards: (any & WithKey)[]
  Element: ElementType
}

export const CardLayout: FC<CardLayoutProps> = ({ cards, Element }) => {
  return (
    <Grid container spacing={3}>
      {cards.map(card => (
        <Grid item xl={4} lg={6} sm={12} key={card.key}>
          <Element {...card} />
        </Grid>
      ))}
    </Grid>
  )
}
