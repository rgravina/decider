import React from "react"

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.decider.getHistory(this)
    }

    noRounds() {
        this.setState({content: <NoRounds/>})
    }

    rounds(rounds) {
        this.setState({content: <Rounds rounds={rounds}/>})
    }

    getHistory() {
        this.props.decider.getHistory(this)
    }

    render() {
        return <div style={{display: 'flex', flexDirection: "column", maxWidth: '12em'}}>
            <button onClick={this.getHistory.bind(this)}>GET HISTORY</button>
            {this.state.content}
        </div>
    }
}

const NoRounds = () => <p>NO ROUNDS!</p>

const throwMessage = {
    "rock": "Rock",
    "paper": "Paper",
    "scissors": "Scissors",
}

const resultMessage = {
    "p1Wins": "Player 1 Wins",
    "p2Wins": "Player 2 Wins",
    "tie": "Tie",
    "invalid": "Invalid",
}

const Rounds = ({rounds}) => {
    return <table>
        <thead>
        <tr>
            <th>P1</th>
            <th>P2</th>
            <th>Result</th>
        </tr>
        </thead>
        <tbody>
        {
            rounds.map((round, index) => {
                return (<tr key={index}>
                    <td>{throwMessage[round.p1] || round.p1}</td>
                    <td>{throwMessage[round.p2] || round.p2}</td>
                    <td>{resultMessage[round.result]}</td>
                </tr>)
            })
        }
        </tbody>
    </table>
}