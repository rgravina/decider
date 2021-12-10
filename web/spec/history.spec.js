import React from "react";
import {render} from "react-dom";
import {container, page, setupDOM, submitForm, teardownDOM} from "./reactDomRender";
import History from "../src/History";
import {Result, Round, Throw} from "rps/src/decider";

describe("history", () => {
    beforeEach(() => setupDOM())
    afterEach(() => teardownDOM())

    describe("when there are no rounds", () => {
        it("displays message", () => {
            renderApp({
                getHistory: (observer) => observer.noRounds()
            })

            submitForm()

            expect(page()).toContain("NO ROUNDS")
        })
    })

    describe("when there are rounds", () => {
        it("displays rounds when p1 wins", () => {
            renderApp({
                getHistory: (observer) => observer.rounds([
                    new Round(Throw.rock, Throw.scissors, Result.p1Wins),
                ])
            })

            submitForm()

            expect(page()).toContain("Rock")
            expect(page()).toContain("Scissors")
            expect(page()).toContain("Player 1 Wins")
        })

        it("displays rounds when p2 wins", () => {
            renderApp({
                getHistory: (observer) => observer.rounds([
                    new Round(Throw.scissors, Throw.rock, Result.p2Wins),
                ])
            })

            submitForm()

            expect(page()).toContain("Scissors")
            expect(page()).toContain("Rock")
            expect(page()).toContain("Player 2 Wins")
        })

        it("displays rounds when tie", () => {
            renderApp({
                getHistory: (observer) => observer.rounds([
                    new Round(Throw.paper, Throw.paper, Result.tie),
                ])
            })

            submitForm()

            expect(page()).toContain("Paper")
            expect(page()).toContain("Paper")
            expect(page()).toContain("Tie")
        })

        it("displays rounds when invalid", () => {
            renderApp({
                getHistory: (observer) => observer.rounds([
                    new Round('sailboat', 'sailboat', Result.invalid),
                ])
            })

            submitForm()

            expect(page()).toContain("sailboat")
            expect(page()).toContain("sailboat")
            expect(page()).toContain("Invalid")
        })
    })
})

const renderApp = (decider) => render(<History decider={decider}/>, container)
