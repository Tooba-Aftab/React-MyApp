import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
    const [name,setName] = useState("Tooba");
    const [count,setCount] = useState(0);
    const [items,setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Item 1"
        },
        {
            id: 2,
            checked: true,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const [newItem, setNewItem] = useState('');

    const nameHandler = () => {
        const names = ["Tooba", "Kinza", "Hadia"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

    const handleClick = () => {
        setCount(count+1);
        console.log(count);
        setCount(count+1);
        console.log(count);
    }

    const handleClick2 = (name) => {
        console.log(count);
    }
    
    const handleCheck = (id) => {
        const listItems = items.map((item)=>item.id === id ? {...item, checked: !item.checked} : item);
        console.log(listItems)
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }
    
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleSubmit = (e) => {
      console.log('submitted');
    }

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        count={count}
        name={name}
        nameHandler={nameHandler}
        handleClick={handleClick}
        handleClick2={handleClick2}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;