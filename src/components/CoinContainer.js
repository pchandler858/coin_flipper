import React, { Component } from "react";
import { choice } from "./Helpers";
import Coin from "./Coin";

export class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/gtwtsre" },
      { side: "tails", imgSrc: "https://tinyurl.com/scx6wdr" }
    ]
  };
  constructor(props) {
    super(props);

    this.state = {
      gameStarted: false,
      curSide: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        curSide: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {this.state.curSide && <Coin info={this.state.curSide} />}
        <button onClick={this.handleClick}>Click to flip</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
