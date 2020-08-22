import React, { FC, useState } from 'react'
import { WithActiveStep, WithSetStep } from 'types/home'
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  Button,
  Link,
} from '@material-ui/core'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { Fade } from 'react-reveal'
import { Link as RouterLink } from 'react-router-dom'
import { WithUserType } from 'types/user'
import { WithProjectType } from 'types/projects'

export interface UserStepContentProps
  extends WithSetStep,
    WithActiveStep,
    WithProjectType,
    WithUserType {
  dates: string
  content: string
  length: number
  links?: Record<string, string>
}

enum Direction {
  NONE,
  LEFT,
  RIGHT,
}

export const UserStepContent: FC<UserStepContentProps> = ({
  activeStep,
  setStep,
  dates,
  content,
  links,
  length,
  projectType,
  userType,
}) => {
  const [direction, setDirection] = useState<Direction>(Direction.NONE)
  return (
    <Box display="flex" justifyContent="center">
      <Card elevation={5}>
        <Box display="flex" justifyContent="space-between">
          <IconButton
            disabled={activeStep === 0}
            onClick={() => {
              setStep(step => step - 1)
              setDirection(Direction.LEFT)
            }}
          >
            <ChevronLeft size={40} />
          </IconButton>
          <Fade
            left={direction === Direction.LEFT}
            right={direction === Direction.RIGHT}
            // key={`step-content-${activeStep}-${direction}`}
          >
            <CardContent>
              <Typography variant="h6">{`Important Dates: ${dates}`}</Typography>
              <br />
              <Typography variant="body1">{content}</Typography>
              {links && (
                <>
                  <br />
                  <Box display="flex" justifyContent="center">
                    {Object.entries(links).map(([text, href]) => (
                      <Link
                        component={RouterLink}
                        to={`${href}?projectType=${projectType}&userType=${userType}`}
                        key={`${text}-${href}`}
                      >
                        <Button key={`${text}-${href}`}>{text}</Button>
                      </Link>
                    ))}
                  </Box>
                </>
              )}
            </CardContent>
          </Fade>

          <IconButton
            disabled={activeStep === length}
            onClick={() => {
              setStep(step => step + 1)
              setDirection(Direction.RIGHT)
            }}
          >
            <ChevronRight size={40} />
          </IconButton>
        </Box>
      </Card>
    </Box>
  )
}
