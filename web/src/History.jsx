import React from "react";

export default class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {rounds: []}
    }

    submitHandler() {
        this.props.decider.getHistory(this)
    }

    rounds(rounds) {
        this.setState({rounds: rounds})
    }

    noRounds() {
        this.setState({rounds: []})
    }

    render() {
        return <>
            <button onClick={this.submitHandler.bind(this)}>HISTORY</button>
            {this.state.rounds.length === 0 ? <NoRounds/> :
                <Rounds rounds={this.state.rounds}/>}
        </>
    }
}

const displayRound = {
    "rock": "Rock",
    "scissors": "Scissors",
    "paper": "Paper",
    "p1Wins": "Player 1 Wins",
    "p2Wins": "Player 2 Wins",
    "tie": "Tie",
    "invalid": "Invalid",
}

const NoRounds = () => {
    return "NO ROUNDS"
}

const Rounds = (props) => {
    return <table>
        <thead>
        <tr>
            <th>P1</th>
            <th>P2</th>
            <th>Result</th>
        </tr>
        </thead>
        <tbody>
        {props.rounds.map((round, index) => {
            return <tr key={index}>
                <td>{displayRound[round.p1] || round.p1}</td>
                <td>{displayRound[round.p2] || round.p2}</td>
                <td>{displayRound[round.result]}</td>
            </tr>
        })}
        </tbody>
    </table>
}
