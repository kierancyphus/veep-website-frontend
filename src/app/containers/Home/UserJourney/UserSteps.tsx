import React, { FC } from 'react'
import { WithProjectType } from 'types/projects'
import { WithUserType } from 'types/user'
import { WithActiveStep } from 'types/home'
import { Stepper, Step, StepLabel, Box } from '@material-ui/core'
import { WithPhone } from 'types/app'

export interface UserStepsProps
  extends WithActiveStep,
    WithUserType,
    WithProjectType,
    WithPhone {
  stepListKeys: Array<string>
}

export const UserSteps: FC<UserStepsProps> = ({
  userType,
  projectType,
  stepListKeys,
  activeStep,
  isPhone,
}) => {
  return (
    <Box display={isPhone ? 'flex' : ''} justifyContent="center" width="100%">
      <Stepper
        alternativeLabel={!isPhone}
        activeStep={activeStep}
        orientation={isPhone ? 'vertical' : 'horizontal'}
      >
        {stepListKeys.map(step => (
          <Step key={`${userType}-${projectType}-${step}`}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
