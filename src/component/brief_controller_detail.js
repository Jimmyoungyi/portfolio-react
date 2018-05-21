import React from 'react';

const BriefControllerDetail = (props)=>{
  if(!props.detail){
    return <div></div>
  }
  return (
    <div className="brief-controller-detail">
      <p>{props.detail.title}</p>
      <p>{props.detail.description}</p>

      {props.detail.points.map((key,index) => <li key={index}>{key}</li> )}
    </div>
  );
}

export default BriefControllerDetail;
