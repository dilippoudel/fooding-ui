import Card from '../Card/Card'
import './Menu.css'
const Menu = (props) => {
  const datas = props.items
  return (
    <Card className="items">
      {datas.map((data) => (
        <div className="menu item" key={data.id}>
          <div className="image-container">
            <img src={`${data.imgLink}`} alt="food" />
          </div>
          <div className="menu-description">
            <div className="menu-header">
              <p className="item name">{data.name}</p>
              <p className="price">{data.price}</p>
            </div>
            <div>
              <hr className="seperation" />
            </div>

            <p className="item-description">{data.descripton}</p>
          </div>
        </div>
      ))}
    </Card>
  )
}
export default Menu
