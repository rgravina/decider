import React from "react";
import History from "./History";

export default class Decider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    submitHandler() {
        this.props.decider.play(this, this.state.p1, this.state.p2)
    }

    invalidInput() {
        this.setState({result: 'INVALID!'})
    }

    tie() {
        this.setState({result: 'TIE!'})
    }

    p1Wins() {
        this.setState({result: 'PLAYER 1 WINS!'})
    }

    p2Wins() {
        this.setState({result: 'PLAYER 2 WINS!'})
    }

    onP1Change(event) {
        this.setState({p1: event.target.value})
    }

    onP2Change(event) {
        this.setState({p2: event.target.value})
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: "column", maxWidth: '12em'}}>
                {this.state.result}
                <input name="p1" onChange={this.onP1Change.bind(this)}/>
                <input name="p2" onChange={this.onP2Change.bind(this)}/>
                <button onClick={this.submitHandler.bind(this)}>PLAY</button>
            </div>
        )
    }
}
