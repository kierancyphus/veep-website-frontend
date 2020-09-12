import React, { FC } from 'react'
import { Card, CardHeader } from '@material-ui/core'

export interface ExecProfileProps {
  name: string
  veepRole: string
  degree: string
}

export const ExecProfile: FC<ExecProfileProps> = ({
  name,
  veepRole,
  degree,
}) => (
  <Card>
    <CardHeader title={name} subheader={`${veepRole}`} />
    <CardHeader subheader={degree} />
  </Card>
)
