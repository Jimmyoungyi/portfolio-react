import React from 'react';

const BriefControllerDisplay = (props)=>{
  if(!props.display){
    return <div></div>
  }

  return (
    <ul className="biref-controller-display">
      {props.display.map((key,index)=>{
        const SUB = key.subtitle ? `, ${key.subtitle}` : '';
        return (
          <li
            key={index}
            className={props.currentSelect===index? "active" : ""}
            onClick={() => props.onChangeSelectedControllerindex(index)}
          >
            <p>{key.title}<span>{SUB}</span></p>
            <p>{key.info}</p>
            <p>{key.content}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default BriefControllerDisplay;
