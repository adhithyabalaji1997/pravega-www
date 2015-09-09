import React, { Component, PropTypes } from 'react';

import '../styles/sponsors.css';

class Sponsors extends Component {
  render() {
    return (
      <div className="sponsors-page">
        <div className="sponsors-title"> SPONSORS 2015 </div>
        <SponsorDetails />
      </div>
    );
  }
}

class SponsorDetails  {
    static propTypes = {
      width: PropTypes.number.isRequired,
      imgsrc: PropTypes.string.isRequired
    }

    render()  {
      return (
        <div>
        </div>
      );
    }
}

export default Sponsors;
