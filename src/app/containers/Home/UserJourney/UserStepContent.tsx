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
  Grid,
} from '@material-ui/core'
import { ChevronLeft, ChevronRight } from 'react-feather'
import { Fade } from 'react-reveal'
import { Link as RouterLink } from 'react-router-dom'
import { WithUserType } from 'types/user'
import { WithProjectType } from 'types/projects'
import { WithPhone } from '../Home'

export interface UserStepContentProps
  extends WithSetStep,
    WithActiveStep,
    WithProjectType,
    WithUserType,
    WithPhone {
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
  isPhone,
}) => {
  const [direction, setDirection] = useState<Direction>(Direction.NONE)
  return (
    <Box display="flex" justifyContent="center">
      <Card elevation={5}>
        <Box display="flex">
          <Box display="flex" alignItems="center">
            <IconButton
              disabled={activeStep === 0}
              onClick={() => {
                setStep(step => step - 1)
                setDirection(Direction.LEFT)
              }}
            >
              <ChevronLeft size={40} />
            </IconButton>
          </Box>

          <Fade
            left={direction === Direction.LEFT}
            right={direction === Direction.RIGHT}
          >
            <CardContent>
              <Typography variant="h6">{`Important Dates: ${dates}`}</Typography>
              <br />
              <Typography variant="body1">{content}</Typography>
              {links && (
                <>
                  <br />
                  <Grid container>
                    {Object.entries(links).map(([text, href]) => (
                      <Grid
                        item
                        key={`${text}-${href}`}
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                      >
                        <Box display="flex" justifyContent="center">
                          <Link
                            component={RouterLink}
                            to={`${href}?projectType=${projectType}&userType=${userType}`}
                            style={{ width: '100%' }}
                          >
                            <Button key={`${text}-${href}`} fullWidth>
                              {text}
                            </Button>
                          </Link>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </CardContent>
          </Fade>
          <Box display="flex" alignItems="center">
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
        </Box>
      </Card>
    </Box>
  )
}
