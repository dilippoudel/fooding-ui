import { useState } from 'react'
import Card from '../Card/Card'
import './Header.css'
const Header = (props) => {
  const filterHandler = (e) => {
    props.onFilter(e.target.innerText.toLowerCase())
  }
  return (
    <Card className="header">
      <h2 className="title">Our Menu</h2>
      <ul className="lists">
        <li className="list-item" onClick={filterHandler}>
          All
        </li>
        <li className="list-item" onClick={filterHandler}>
          Breakfast
        </li>
        <li className="list-item" onClick={filterHandler}>
          Lunch
        </li>
        <li className="list-item" onClick={filterHandler}>
          Shakes
        </li>
      </ul>
    </Card>
  )
}
export default Header
