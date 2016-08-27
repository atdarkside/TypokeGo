import React from 'react'
import {render} from 'react-dom'


export default class UnderDevelopment extends React.Component {
  render() {
    return (
      <div>ATAMA OKASHI NARUDE</div>
    )
  }
}

render(
  <UnderDevelopment/>,
  document.getElementsByTagName('main')[0]
)
