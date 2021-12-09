import Decider, {Round, Throw} from "../src/decider";
import FakeRoundRepo from "./FakeRoundRepo";

describe('the decider', () => {
    let decider
    beforeEach(() => {
        decider = new Decider(new FakeRoundRepo())
    })

    describe("get history", () => {
        describe("when no rounds have been played", () => {
            it('tells the observer no rounds have been played', () => {
                const observer = {noRounds: jest.fn()}

                decider.getHistory(observer)

                expect(observer.noRounds).toHaveBeenCalled()
            })
        })

        describe("when rounds have been played", () => {
            it('passes rounds to the observer', () => {
                const observer = {
                    invalidInput: () => {
                    },
                    p1Wins: () => {
                    },
                    p2Wins: () => {
                    },
                    tie: () => {
                    },
                    rounds: jest.fn()
                }
                decider.play(observer, Throw.rock, 'sailboat')
                decider.play(observer, Throw.rock, Throw.scissors)
                decider.play(observer, Throw.rock, Throw.paper)
                decider.play(observer, Throw.rock, Throw.rock)
                decider.getHistory(observer)

                expect(observer.rounds).toHaveBeenCalledWith([
                    new Round(Throw.rock, 'sailboat', 'invalid'),
                    new Round(Throw.rock, Throw.scissors, 'p1Wins'),
                    new Round(Throw.rock, Throw.paper, 'p2Wins'),
                    new Round(Throw.rock, Throw.rock, 'tie')
                ])
            })
        })
    })
})
