import React from "react"
import {container, page, setupDOM, submitForm, teardownDOM} from "./helper";
import {render} from "react-dom";
import History from "../src/History";
import {Result, Round, Throw} from "rps/src/decider";

beforeEach(() => setupDOM())
afterEach(() => teardownDOM())
const renderApp = (decider) => render(<History decider={decider}/>, container)

describe("history", () => {
    describe("when there are no rounds", () => {
        it("displays no rounds", () => {
            const decider = {
                getHistory: (observer) => observer.noRounds()
            }

            renderApp(decider)

            expect(page()).toContain("NO ROUNDS!")
        })
    })

    describe("when there are rounds", () => {
        it("displays rounds", () => {
            const decider = {
                getHistory: (observer) => observer.rounds([new Round(Throw.rock, Throw.scissors, Result.p1Wins)])
            }

            renderApp(decider)

            expect(page()).toContain("Rock")
            expect(page()).toContain("Scissors")
            expect(page()).toContain("Player 1 Wins")
        })
    })

    describe("when the get history button is pressed", () => {
        it("updates rounds", () => {
            const decider = {
                getHistory: jest.fn()
                    .mockImplementationOnce((observer) => observer.rounds([new Round(Throw.rock, Throw.scissors, Result.p1Wins)]))
                    .mockImplementationOnce((observer) => observer.rounds([new Round(Throw.paper, 'sailboat', Result.invalid)]))
            }

            renderApp(decider)
            submitForm()

            expect(page()).toContain("Paper")
            expect(page()).toContain("sailboat")
            expect(page()).toContain("Invalid")
        })
    })
})
