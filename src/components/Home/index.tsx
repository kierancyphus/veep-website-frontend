import React, { FC, useState } from 'react'
import { Box } from '@material-ui/core'

enum Roles {
  STUDENT,
  CLIENT,
  SPONSOR,
  PM,
  EXEC,
}

/**
 * TODO
 *
 * Add translation
 * implement top bar
 * styling
 * import all photos
 */
const Home: FC = () => {
  const [role, setRole] = useState<Roles>(Roles.STUDENT)

  return (
    <>
      <Box>
        <h1>What is VEEP?</h1>
        <p>
          VEEP stands for Volunteering Engineering Experience Program. We work
          with not-for-profits to build the next cohort of engineering students!
          Working with us means you are looking for...
        </p>
      </Box>
      <Box>
        <h1>Community Engagement</h1>
        <p>
          You'd love the chance to make a difference in your local community.
          You bring a balance of impact and empathy to the volunteering
          community. But you also want...
        </p>
      </Box>
    </>
  )
}

export default Home
