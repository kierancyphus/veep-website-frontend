import React, { FC } from 'react'
import { Grid, Box } from '@material-ui/core'
import { WithProjectType, WithProjectTypeSetter } from 'types/projects'
import { WithUserType, WithUserTypeSetter } from 'types/user'
import { BoxFade } from '../../Common/BoxFade/BoxFade'
import { ChooseOption } from './ChooseOption'

export interface ChooseRoleAndProjectTypeProps
  extends WithProjectType,
    WithProjectTypeSetter,
    WithUserType,
    WithUserTypeSetter {
  userTypeToStringMap: Record<number, string>
  projectTypeToStringMap: Record<number, string>
}

export const ChooseRoleAndProjectType: FC<ChooseRoleAndProjectTypeProps> = ({
  projectType,
  setProjectType,
  userType,
  setUserType,
  userTypeToStringMap,
  projectTypeToStringMap,
}) => {
  return (
    <BoxFade down margin={10}>
      <Grid container spacing={1}>
        <Grid item lg={7} sm={12}>
          <ChooseOption
            title="Role"
            toStringMap={userTypeToStringMap}
            setValue={setUserType}
            value={userType}
          />
          <ChooseOption
            title="Project Type"
            toStringMap={projectTypeToStringMap}
            setValue={setProjectType}
            value={projectType}
          />
        </Grid>
        <Grid item lg={5}>
          <Box>
            This is where all the "you are a ..." and "through this project you
            will develop..." To save on space we could use Icons for a lot of
            the technical skills
          </Box>
        </Grid>
      </Grid>
    </BoxFade>
  )
}
