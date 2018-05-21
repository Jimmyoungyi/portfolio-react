import React from 'react';

import BriefControllerDisplay from './brief_controller_display';

const BriefController = (props)=>{
  if(!props.tags){
    return <div></div>
  }
  return (
    <div className="brief-controller">
      <ul className="tags">
        {props.tags.map( key => <li key={key}
                                    className={`${props.currentTag===key? "active": ""} center`}
                                    style={{width:`${100/props.tags.length}%`}}
                                    onClick={ () => {
                                      props.onChangeSelectedController(key);
                                      props.onChangeSelectedControllerindex(0);
                                    }}
                                  >{key.replace('-',' ')}</li> )}
      </ul>
      <BriefControllerDisplay
        display={props.display}
        currentSelect={props.currentSelect}
        onChangeSelectedControllerindex={props.onChangeSelectedControllerindex}
      />
    </div>
  );
}

export default BriefController;
