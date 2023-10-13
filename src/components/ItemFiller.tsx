import React from 'react';

type ItemFillerProps = {
  text: string
}

const ItemFiller = ({ text }: ItemFillerProps) => {
  return (
    <li>{text}</li>
  );
};

export default ItemFiller;