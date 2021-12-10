import Decider, {Result, Round, Throw} from "../src/decider";
import FakeRoundRepo from "./FakeRoundRepo";

describe('history', () => {
    describe("when no rounds have been played", () => {
        it("tells the observer there are no rounds", () => {
            const observer = {noRounds: jest.fn()}

            const roundRepo = {
                isEmpty: () => true
            }

            const decider = new Decider(roundRepo)
            decider.getHistory(observer)

            expect(observer.noRounds).toHaveBeenCalled()
        })
    })

    describe("when rounds have been played", () => {
        it("tells the observer what rounds have been played", () => {
            const observer = {
                invalidInput: () => {},
                p1Wins: () => {},
                p2Wins: () => {},
                tie: () => {},
                rounds: jest.fn()
            }

            const roundRepo = new FakeRoundRepo()
            const decider = new Decider(roundRepo)

            decider.play(observer, Throw.rock, 'sailboat')
            decider.play(observer, Throw.rock, Throw.scissors)
            decider.play(observer, Throw.scissors, Throw.rock)
            decider.play(observer, Throw.rock, Throw.rock)
            decider.getHistory(observer)

            expect(observer.rounds).toHaveBeenCalledWith([
                new Round(Throw.rock, 'sailboat', Result.invalid),
                new Round(Throw.rock, Throw.scissors, Result.p1Wins),
                new Round(Throw.scissors, Throw.rock, Result.p2Wins),
                new Round(Throw.rock, Throw.rock, Result.tie),
            ])
        })
    })
})
