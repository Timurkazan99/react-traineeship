import React from 'react';
import ItemFiller from "./ItemFiller";
import {Item} from "../App";

type ListProps = {
  items: Item[];
}

const List = ({ items }: ListProps) => {
  const itemsComponents = items.map(({text, uniqId}) => (
    <ItemFiller text={text} key={uniqId}/>
  ));
  return (
    <div className='list'>
      <h4>Результаты</h4>
      <ul>
        {itemsComponents}
      </ul>
    </div>
  );
};

export default List;