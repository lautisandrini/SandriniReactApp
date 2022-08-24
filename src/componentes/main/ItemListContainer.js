
import Item from "./Item"


const ItemListContainer = () => {
    const items = [
        {
            nombre: 'Creatina',
            id: '1',
            precio: '$3000'
        },
        {
            nombre: 'Proteina',
            id: '2',
            precio: '$1500'
        },
        {
            nombre: 'Aminoacidos',
            id: '3',
            precio: '$2500'
        }
        ]

    return (
        <div>
            <Item producto={ items[0] }/>
            <Item producto={ items[1] }/>
            <Item producto={ items[1] }/>
        </div>
    )
}

export default ItemListContainer