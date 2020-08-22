import React, { FC } from 'react'
import { BasicPageContainer } from '../Common/BasicPageContainer'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const Events: FC = () => {
  // const [month, setMonth] = useState(0)

  // const months = {
  //   September: 0,
  //   October: 1,
  //   November: 2,
  //   December: 3,
  //   January: 4,
  //   February: 5,
  //   March: 6,
  //   April: 7,
  //   May: 8,
  //   June: 9,
  //   July: 10,
  //   August: 11,
  // }

  // const marks: Mark[] = Object.entries(months).map(([month, value]) => {
  //   return { value: value, label: month }
  // })

  // marks.push({ value: 12, label: 'September' })

  const History = useHistory()
  console.log('History', History)

  return (
    <BasicPageContainer title="Events.">
      {/* <Slider
        marks={marks}
        min={0}
        max={12}
        step={0.1}
        onChange={(event, value) => console.log(value)}
        valueLabelFormat={(value, index) => (
          <h1>
            {value}
            {index}
          </h1>
        )}
      /> */}
      <Typography variant="h4">Coming Soon.</Typography>
    </BasicPageContainer>
  )
}
