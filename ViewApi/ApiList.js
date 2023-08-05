import React from 'react';
import ApiListItem from './ApiListItem';


const ApiList = ({ allTasks }) => (
  <div>
    {allTasks.map((item) => (
      <ApiListItem key = {item.id} item = {item}/>
    ))}

  </div>
);

export default ApiList;