import React from "react";

export default function TodoItem(props){
    

    return (
    <div onClick={()=>{
        props.onChecked(props.id);
    }}>
    <li>{props.content}</li>
    </div>
    )

}