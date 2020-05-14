import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state ={
      display : 'none'
    }
  }
            //taking in an event from onClick
defaultFunc = (event) => {
  //changes state of display
  this.setState({
    display : event.target.id
  })
}




  render() {

    const detailsToDisplay = <div>DIV</div>
    const showProfile = <Profile />

    //if display is ____ render a certain component
    return (
      <div>
        <MenuBar defaultFunc={this.defaultFunc} /> 
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
