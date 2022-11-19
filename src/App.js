import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import React, { Fragment, useState } from 'react'

import './App.css'
const menuItems = [
  {
    id: 1,
    name: 'ButterMilk',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.1.jpeg',
    category: 'breakfast',
  },
  {
    id: 2,
    name: 'Rice with ButterChicken',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.7.jpeg',
    category: 'lunch',
  },
  {
    id: 3,
    name: 'Mango Lussi with butter bread',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.3.jpeg',
    category: 'lunch',
  },
  {
    id: 4,
    name: 'Dinner Double',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.4.jpeg',
    category: 'shakes',
  },
  {
    id: 5,
    name: 'Country Delight',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.5.jpeg',
    category: 'snack',
  },
  {
    id: 6,
    name: 'Egg Potatoes',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.6.jpeg',
    category: 'breakfast',
  },
  {
    id: 7,
    name: 'ButterMilk',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.8.jpeg',
    category: 'breakfast',
  },
  {
    id: 8,
    name: 'Godzilla Milkshake',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.9.jpeg',
    category: 'breakfast',
  },
  {
    id: 9,
    name: 'Oreo Dream',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.10.jpeg',
    category: 'dinner',
  },
  {
    id: 10,
    name: 'Banana Lassi',
    descripton: 'I am baby woke milkshk wolf bitters live edge',
    price: '$15.99',
    imgLink: '../images/img.2.jpeg',
    category: 'shakes',
  },
]

function App() {
  const [items, setItems] = useState(menuItems)
  const [filterItems, setFilterItems] = useState(menuItems)
  const getOptions = (props) => {
    const filteredData = items.filter((item) => item.category === props)
    if (props === 'all') {
      setFilterItems(menuItems)
    } else {
      setFilterItems(filteredData)
    }
  }
  return (
    <Fragment>
      <Header onFilter={getOptions} />
      <Menu items={filterItems} />
    </Fragment>
  )
}

export default App
