import React, { Component } from 'react';

import BriefController from './brief_controller';
import BriefControllerDetail from './brief_controller_detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedControler : null,
      selectedControllerIndex: 0
    };
    this.briefData = {};
  }
  componentDidMount() {
    fetch('./brief_data.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.briefData = result;
          this.setState({
            selectedControler : 'education',
            selectedControllerIndex: 0
          });
          console.log(this.briefData, this.state.selectedControler, this.state.selectedControllerIndex);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  getBriefTag = ()=>{
    if(this.state.selectedControler){
      let allTag = [];
      for(let key in this.briefData){
        allTag.push(key);
      }
      return allTag;
    }
  }
  getBriefDisplay = () => {
    if(this.state.selectedControler){
      return this.briefData[this.state.selectedControler];
    }
  }
  getBriefDetail = () => {
    if(this.state.selectedControler){
      return this.briefData[this.state.selectedControler][this.state.selectedControllerIndex].detail;
    }
  }

  onChangeSelectedController = (controller) => {
    this.setState({
      selectedControler : controller
    })
  }
  onChangeSelectedControllerindex = (index) => {
    this.setState({
      selectedControllerIndex: index
    })
  }

  render() {
    return (
      <div className="app">
      <div className="about-me">
        <BriefController
          tags={this.getBriefTag()}
          display={this.getBriefDisplay()}
          currentTag={this.state.selectedControler}
          currentSelect={this.state.selectedControllerIndex}
          onChangeSelectedController={this.onChangeSelectedController}
          onChangeSelectedControllerindex={this.onChangeSelectedControllerindex}
        />
        <BriefControllerDetail detail={this.getBriefDetail()}/>
      </div>

      </div>
    );
  }
}

export default App;
