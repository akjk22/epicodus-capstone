import React from 'react';
import { masterRapperList } from '../data/fakeRapperService';


class RappersDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterRapperList: FakeRapperList(),
    };
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <select>{this.state.masterRapperList.map((rapper) => <option key={rapper.id} value={rapper.name}>{rapper.name}</option>)}</select>
      </div>
      </React.Fragment>
    );
  }
}

export default RappersDropDown;