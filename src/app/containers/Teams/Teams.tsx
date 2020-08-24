import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { BasicPageContainer } from '../Common/BasicPageContainer'

export const Teams: FC = () => {
  return (
    <BasicPageContainer title="Teams.">
      <Typography variant="h4">
        This could be you! Check back in September for project applications to
        open!
      </Typography>
    </BasicPageContainer>
  )
}
