import React from 'react'
// import './Jumbotron.css'
import Cover from './images/wordpress-recipe.jpg'


class Jumbotron extends React.Component {
  render () {
  return (
    <grid container spacing={24}>
      <div className= "Cover" style={{ minHeight:'auto', maxHeight:'auto'}}>
        <img style={{ width:'100%', height:'100 px', backgroundImage: 'url({Cover})'}} src={Cover} alt="jumbotron"/>
      </div>
    </grid>
    )  
  }
}
export default Jumbotron