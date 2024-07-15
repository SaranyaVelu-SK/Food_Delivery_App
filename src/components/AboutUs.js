import React from 'react';
import UserClass from './UserClass';

class AboutUs extends React.Component{
  constructor(props){
    super(props);
    console.log('parent constructor')
  }

  componentDidMount(){
    console.log('parent did mount')
  }
  render(){
    console.log('parent render')
    return (
      <>
    <div>AboutUs</div>
    <UserClass name={'Saranya cl'} location={'Coimabtore cl'} contact={'9876543212'}/>
    <UserClass name={'Saranya cl'} location={'Coimabtore cl'} contact={'9876543212'}/>
    </>
    )
  }
}


export default AboutUs;