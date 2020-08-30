import React, { ElementType, FC } from 'react'
import {
  Grid,
  Typography,
  Box,
  Tab,
  Tabs,
  Button,
  Link,
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { Fade } from 'react-reveal'
import { IconGrid } from './IconGrid'

export interface WithPhone {
  isPhone: boolean
}
interface TextSectionProps extends WithIcon, WithPhone {
  title: string
  content: string
  links?: Record<string, string>
}

interface WithIcon {
  Icon?: ElementType
  iconLeft?: boolean
}

interface WithLeft {
  left: boolean
}

export const TextSection: FC<TextSectionProps> = ({
  title,
  content,
  links,
  Icon,
  iconLeft,
  isPhone,
}) => (
  <Fade down>
    <Box marginX={isPhone ? 6 : 10} marginY={isPhone ? 6 : 15}>
      <Grid container>
        {iconLeft && Icon && !isPhone && (
          <>
            <IconGrid Icon={Icon} iconLeft={iconLeft} isPhone={isPhone} />
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          </>
        )}
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box
            width="100%"
            display="flex"
            justifyContent={isPhone ? '' : iconLeft ? 'flex-end' : ''}
          >
            <Tabs value={0} textColor="primary" variant="standard">
              <Tab
                label={
                  <Typography variant="h4" noWrap>
                    {title}
                  </Typography>
                }
              />
            </Tabs>
          </Box>

          <br />
          <Typography
            variant="h5"
            align={isPhone ? undefined : iconLeft ? 'right' : 'left'}
          >
            {content}
          </Typography>
          <Box display="flex" justifyContent="center">
            {links &&
              Object.entries(links).map(([text, href]) => (
                <Link component={RouterLink} to={href} key={`${text}-${href}`}>
                  <Button>{text}</Button>
                </Link>
              ))}
          </Box>
        </Grid>
        {!iconLeft && Icon && !isPhone && (
          <>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
            <IconGrid Icon={Icon} iconLeft={iconLeft} isPhone={isPhone} />
          </>
        )}
      </Grid>
    </Box>
  </Fade>
)
