
import Item from "./Item"


const ItemListContainer = () => {
    const items = [
        {
            id: '1',
            nombre: 'Creatina Star',
            precio: '$2000',
        },
        {
            id: '2',
            nombre: 'Creatina Gentech',
            precio: '$1800'
        },
        {
            id: '3',
            nombre: 'Aminoacidos Star',
            precio: '$1600'
        },
        {
            id: '4',
            nombre: 'Aminoacidos Gentech',
            precio: '$1200'
        },
        {
            id: '5',
            nombre: 'Proteina Star',
            precio: '$2000'
        },
        {
            id: '6',
            nombre: 'Proteina Gentech',
            precio: '$1500'
        }
        ]

    return (
        <div>
            <Item producto={ items[0] }/>
            <Item producto={ items[1] }/>
            <Item producto={ items[2] }/>
            <Item producto={ items[3] }/>
            <Item producto={ items[4] }/>
            <Item producto={ items[5] }/>
        </div>
    )
}

export default ItemListContainer