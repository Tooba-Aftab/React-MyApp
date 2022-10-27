import ItemsList from './ItemsList';

const Content = ({name, items, handleClick, handleClick2, nameHandler, handleCheck, handleDelete}) => 
{
    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {name}</p>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={handleClick}>Click to Count</button>
            <button onClick={handleClick2}>Click Me</button>
            {items.length ? 
            (
                <ItemsList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}/>
            ) : 
            (
                <p style={{marginTop:'2rem'}}>List is Empty.</p>
            )}
        </main>
    )
}

export default Content;