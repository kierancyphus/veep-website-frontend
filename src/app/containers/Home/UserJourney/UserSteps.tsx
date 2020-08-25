import React, { FC } from 'react'
import { WithProjectType } from 'types/projects'
import { WithUserType } from 'types/user'
import { WithActiveStep } from 'types/home'
import {
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'

export interface UserStepsProps
  extends WithActiveStep,
    WithUserType,
    WithProjectType {
  stepListKeys: Array<string>
}

export const UserSteps: FC<UserStepsProps> = ({
  userType,
  projectType,
  stepListKeys,
  activeStep,
}) => {
  const theme = useTheme()
  const isPhone = useMediaQuery(theme.breakpoints.only('xs'))

  return (
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
  )
}
