import React,{useState} from 'react';
import '../styles/Child.css';

const Selection =({applyColor})=>{
    const[backColor,setBackground] =useState({background:""});
    return (
       <div
            className="fix-box"
            style={backColor}
            onClick={()=>{applyColor(setBackground);
            }}>
            <h1 className="subheading">{"Selection"}</h1>
            </div>
        
    );
};
 

export default Selection;