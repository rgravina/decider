import Decider, {Throw} from "../src/decider";
import FakeRoundRepo from "./FakeRoundRepo";

describe('playing a game', () => {
    let decider, roundRepo
    beforeEach(() => {
        roundRepo = new FakeRoundRepo()
        decider = new Decider(roundRepo)
    })

    describe("normal game", () => {
        it('rock vs scissors', () => {
            const observer = {p1Wins: jest.fn()}

            decider.play(observer, Throw.rock, Throw.scissors)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('scissors vs rock', () => {
            const observer = {p2Wins: jest.fn()}

            decider.play(observer, Throw.scissors, Throw.rock)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('rock vs paper', () => {
            const observer = {p2Wins: jest.fn()}

            decider.play(observer, Throw.rock, Throw.paper)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('paper vs rock', () => {
            const observer = {p1Wins: jest.fn()}

            decider.play(observer, Throw.paper, Throw.rock)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('paper vs scissors', () => {
            const observer = {p2Wins: jest.fn()}

            decider.play(observer, Throw.paper, Throw.scissors)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('scissors vs paper', () => {
            const observer = {p1Wins: jest.fn()}

            decider.play(observer, Throw.scissors, Throw.paper)

            expect(observer.p1Wins).toHaveBeenCalled()
        })
    })

    describe("tie game", () => {
        it('rock vs rock', () => {
            const observer = {tie: jest.fn()}

            decider.play(observer, Throw.rock, Throw.rock)

            expect(observer.tie).toHaveBeenCalled()
        })
    })

    describe("error handling", () => {
        it('rock vs sailboat', () => {
            const observer = {invalidInput: jest.fn()}

            decider.play(observer, Throw.rock, 'sailboat')

            expect(observer.invalidInput).toHaveBeenCalled()
        })

        it('sailboat vs rock', () => {
            const observer = {invalidInput: jest.fn()}

            decider.play(observer, 'sailboat', Throw.rock)

            expect(observer.invalidInput).toHaveBeenCalled()
        })

        it('sailboat vs sailboat', () => {
            const observer = {invalidInput: jest.fn()}

            decider.play(observer, 'sailboat', 'sailboat')

            expect(observer.invalidInput).toHaveBeenCalled()
        })
    })
})
