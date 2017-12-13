import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
//   constructor() {
//       super();
//       this.state = {
//           isFlipped: false
//       }
//   }

//   clickHandler() {
//       this.setState({
//           //this.state is react to modify the state bc something changed
//           //changing it to be opposite of what it currently is
//           isFlipped: !this.state.isFlipped
//       });
//   }


  render() {
      var cardClass = "MemoryCardInner";
      if (this.props.isFlipped) {
          cardClass += " flipped";
      }
    return (
        //the onClick is reserved for REACT, but onclick is a js thing but with a lowercase "c".
        <div className="MemoryCard" onClick={this.props.pickCard}>
            <div className={cardClass}>
                <div className="MemoryCardBack">
                      <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" />
                </div>
                 
                <div className="MemoryCardFront">{this.props.symbol}</div>
            </div>
          </div>
    );
  }
}

export default MemoryCard;