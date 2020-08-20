import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ExampleComponent = ({ startCountFrom }) => {
  const timeBeforeIncrement = 1000
  const [count, setCount] = useState(startCountFrom)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, timeBeforeIncrement)
  }, [count])

  return <p>This is an example component. {count} seconds have passed.</p>
}

ExampleComponent.defaultProps = {
  startCountFrom: 0,
}

ExampleComponent.propTypes = {
  startCountFrom: PropTypes.number,
}
