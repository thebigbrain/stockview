import React from 'react';
import ViewDivider from 'components/ViewDivider/ViewDivider';
import './ViewContent.css';
import WatchList from "../WatchList/WatchList";
import ViewPanel from "../ViewPanel/ViewPanel";


const defaultWatchListWidth = 250;
const minWatchListWidth = 150;
const defaultDividerWidth = 6;
const minPanelWidth = 200;


export default class ViewContent extends React.Component {
  state = {
    panelWidth: null,
    dividerWidth: defaultDividerWidth,
    watchListWidth: defaultWatchListWidth,
    watchListDisplay: ''
  };

  viewRightBound = null;
  maxWatchListWidth = null;

  constructor(props) {
    super(props);
    this.state.panelWidth = props.width - defaultDividerWidth - defaultWatchListWidth;
    this.maxWatchListWidth = props.width - minPanelWidth - defaultDividerWidth;
  }

  onDragStart = (e) => {
    if (this.viewRightBound == null) {
      this.viewRightBound = e.clientX + defaultWatchListWidth;
    }
  };

  onDrag = (e) => {
    let watchListDisplay = '';
    let watchListWidth = this.viewRightBound - e.clientX;
    if (watchListWidth > this.maxWatchListWidth) {
      watchListWidth = this.maxWatchListWidth;
    } else if (watchListWidth < minWatchListWidth) {
      if (watchListWidth < 40) {
        watchListDisplay = 'none';
        watchListWidth = 0;
      } else {
        watchListWidth = minWatchListWidth;
      }
    }

    let panelWidth = this.props.width - this.state.dividerWidth - watchListWidth;

    this.setState({watchListWidth, panelWidth, watchListDisplay});
  };

  onDragEnd = (e) => {
  };

  render() {
    return (
      <div className='view-content'>
        <ViewPanel width={this.state.panelWidth}/>
        <ViewDivider
          axis='x'
          width={this.state.dividerWidth}
          onDragStart={this.onDragStart}
          onDrag={this.onDrag}
          onDragEnd={this.onDragEnd}
        />
        <WatchList style={{
          width: this.state.watchListWidth,
          display: this.state.watchListDisplay
        }}/>
      </div>
    );
  }
}
