import React, { useState } from "react";

function Todo(props) {
    const [strikeThroughs, setStrikeThrough] = useState(false);


    return (
        <div>
            {strikeThroughs ?
                <li style={{textDecoration: 'line-through'}}><input type="checkbox" checked={strikeThroughs}/> {props.text}</li>
                : <li><input type="checkbox" onChange={() => setStrikeThrough(true)}/> {props.text} </li>}
        </div>

    )
}

export default Todo;