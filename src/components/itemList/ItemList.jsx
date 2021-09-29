import axios from 'axios';
import React, { useState, useEffect} from 'react'


const ItemList = () => {
  
  const [items,setItems] = useState([]);
  const [resource, setResource] = useState('todos');

  useEffect(() => {
      const fetchItems = async () => {
        try{
          const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
          console.log(response);
          const itemData = response.data.map((responseData) => {
            return{id:responseData.id,title: responseData.title};
          })
          setItems(itemData);
        }catch(err){
          console.log(err)
        }
      };
      fetchItems();
  }, [resource]);

  const onTodoButtonClick = () => {
    setResource('todos');
  }
  const onPostButtonClick = () => {
    setResource('posts');
  }
  return (
    <div>
      <button onClick={() => onTodoButtonClick()}>Todos</button>
      <button onClick={() => onPostButtonClick()}>Posts</button>
      <ul>
        {items.map((item) => (<li key={item.id}>{item.title}</li>))}
      </ul>
    </div>

  )
 
  
}

export default ItemList
