import React, { FC, useState, ReactNode, useEffect } from 'react'
import { Box, Tab, Tabs, Typography } from '@material-ui/core'

export interface TabsAndContentProps {
  initialTab?: number
  content: Record<string, ReactNode[]>
}

/**
 * This whole comp is sketchy - figure out how to fix it when there is wifi
 */
export const TabsAndContent: FC<TabsAndContentProps> = ({
  initialTab,
  content,
}) => {
  const [tab, setTab] = useState<number | undefined>()
  const keys = Object.keys(content)
  // this should be unnecessary, but for some reason it's not rendering the bar underneath
  // on mount, and so this is the only way to force it
  useEffect(() => {
    const interval = setTimeout(
      () =>
        setTab(
          initialTab && initialTab >= 0 && initialTab < keys.length
            ? initialTab
            : 0,
        ),
      100,
    )
    return () => clearInterval(interval)
  }, [setTab, initialTab, keys.length])

  return (
    <Box maxWidth="100%">
      <Tabs
        value={tab || 0}
        textColor="primary"
        onChange={(event, value) => setTab(value)}
        centered
        variant="fullWidth"
      >
        {keys.map(label => (
          <Tab
            label={<Typography variant="h5">{label}</Typography>}
            key={label}
          />
        ))}
      </Tabs>
      <Box marginY={5} key={tab}>
        {content[keys[tab || 0]][0] && content[keys[tab || 0]][0]}
      </Box>
    </Box>
  )
}
