import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {

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

    const handleClick3 = (e) => {
        console.log(e.target);
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

    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {name}</p>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={handleClick}>Click to Count</button>
            <button onClick={handleClick2}>Click Me</button>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked} />
                            <label
                                style={(item.checked) ? 
                                    {textDecoration:'line-through'} : null} 
                                onDoubleClick={() => handleCheck(item.id)}
                            >
                            {item.item}</label>
                            {/* <button>Delete</button> */}
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (<p style={{marginTop:'2rem'}}>List is Empty.</p>)
            }
            
        </main>
    )
}

export default Content;