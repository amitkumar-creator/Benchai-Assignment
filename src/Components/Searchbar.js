import React, {useState} from 'react'

export const Searchbar = (props) => {
    const [input, setInput] = useState({
        search:"",
    })
    const handleInput = (e)=>{
         setInput({search:e.target.value})
    }
    const handleSubmit =(e)=>{
       e.preventDefault();
       props.SearchItem('title', input.search)
    }
    return (
        <div className="search_style">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="type text here" 
                    onChange={handleInput}
                    value={input.search}
                    name="search"
                />
                <button
                onClick={handleSubmit}
                >Search</button>
            </form>
        </div>
    )
}
