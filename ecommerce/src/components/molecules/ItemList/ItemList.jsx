import React from 'react'
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({products}) => {
  return (
    <div className='item-list'>
        {
          products.map((element, index) => {
            return <Item key={index} product={element} />
          })
        }   
    </div>
  );
}

export default ItemList