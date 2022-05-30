/* eslint-disable no-console */
import axios from 'axios'

const getResponse = async () => {
  const data = await axios
    .post('https://front-exercise.z1.digital/evaluations')
    .then((response) => response)
  return data
}

export { getResponse }
