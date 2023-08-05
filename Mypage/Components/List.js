import React from 'react';
import ListItem from './ListItem';
// import './styles.css';
import Roomcard from '../Roomcard';

const List = ({ list }) => (
  <div>
    {list.map((item) => (
      <ListItem key = {item.id} item = {item}/>
    ))}

  </div>
);

export default List;