const saludo = "Bienvenido a nuestra pagina web"
const ItemListContainer = (props) => {
  return ( 
  <div>
    <h3> {props.saludo}</h3>
  </div>
  )
}
export default ItemListContainer;