import React from 'react';
import ViewDivider from "components/ViewDivider/ViewDivider";
import ViewChart from "../ViewChart/ViewChart";
import ViewControl from "../ViewControl/ViewControl";

import './ViewPanel.css';


export default class ViewPanel extends React.Component {
  render() {
    return (
      <div className='view-panel' style={{width: this.props.width}}>
        <ViewChart/>
        <ViewDivider
          axis='y'
          height='6px'
        />
        <ViewControl/>
      </div>
    );
  }
}