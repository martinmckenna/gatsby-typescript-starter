import React from "react"

import { convert } from 'src/utils/convertToHello'

const App: React.FC<{}> = props => {
  return (
    <div>{convert('hello world')}</div>
  )
}

export default App;
