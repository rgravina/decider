import React from 'react'
import ReactDOM from 'react-dom'
import Decider from "./Decider";
import DeciderModule from "../../rps/src/decider"
import FakeRoundRepo from "rps/spec/FakeRoundRepo";
import History from "./History";

const decider = new DeciderModule(new FakeRoundRepo())

ReactDOM.render(
    <>
        <Decider decider={decider}/>
        <History decider={decider}/>
    </>,
    document.querySelector('#app')
)