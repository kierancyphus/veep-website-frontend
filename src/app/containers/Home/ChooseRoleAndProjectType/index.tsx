import React, { FC } from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { WithProjectType, WithProjectTypeSetter } from 'types/projects'
import { WithUserType, WithUserTypeSetter } from 'types/user'
import { ChooseOption } from './ChooseOption'
import { Fade } from 'react-reveal'

interface RoleAndProjectDescriptionProps extends WithProjectType, WithUserType {
  youAre: Array<string>
  youWill: Array<string>
}

const RoleAndProjectDescription: FC<RoleAndProjectDescriptionProps> = ({
  projectType,
  userType,
  youAre,
  youWill,
}) => (
  <Box>
    <Typography variant="h5">You...</Typography>
    <Box marginLeft={2} marginTop={1}>
      {youAre.map(item => (
        <Typography variant="body1" color="textSecondary">
          {item}
        </Typography>
      ))}
    </Box>
    <br />
    <Box marginLeft={2}>
      {youWill.map(item => (
        <Typography variant="body1" color="textSecondary">
          {item}
        </Typography>
      ))}
    </Box>
  </Box>
)

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
    <Box
      padding={5}
      margin={5}
      borderRadius={5}
      style={{ backgroundColor: 'rgb(232,232,232)' }}
    >
      <Fade down>
        <Box marginBottom={4} display="flex" justifyContent="center">
          <Typography variant="h4" color="textSecondary">
            Choose.
          </Typography>
        </Box>
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
            <RoleAndProjectDescription
              userType={userType}
              projectType={projectType}
              youAre={[
                ' - are looking to get involved in the community',
                " - don't have a huge amount of industry experience",
                ' - are growth oriented',
              ]}
              youWill={[
                ' - will develop key industry (not just technical) skills',
                ' - will deliver a product that will have an impact in the community',
                ' - will be prepared to start your first summer internship',
              ]}
            />
          </Grid>
        </Grid>
      </Fade>
    </Box>
  )
}
