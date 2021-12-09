import React from "react"
import ReactTestUtils from 'react-dom/test-utils'
import {container, page, setupDOM, submitForm, teardownDOM} from "./helper";
import {render} from "react-dom";
import Decider from "../src/Decider";

beforeEach(() => setupDOM())
afterEach(() => teardownDOM())
const renderApp = (decider) => render(<Decider decider={decider}/>, container)

describe("decider", () => {
    describe("submitting a game", () => {
        let playSpy
        beforeEach(() => {
            playSpy = jest.fn()
            renderApp({
                play: playSpy
            })
        })

        it("passes player throws to the decider module", () => {
            const p1 = document.querySelector('[name="p1"]')
            const p2 = document.querySelector('[name="p2"]')
            p1.value = 'rock'
            p2.value = 'scissors'
            ReactTestUtils.Simulate.change(p1)
            ReactTestUtils.Simulate.change(p2)

            submitForm()

            expect(playSpy).toHaveBeenCalledWith(expect.anything(), 'rock', 'scissors')
        })
    })

    describe("invalid input", () => {
        beforeEach(() => {
            renderApp({
                play(observer) {
                    observer.invalidInput()
                }
            })
        })

        it("no message is shown until button pressed", () => {
            expect(page()).not.toContain("INVALID!")
        })

        it("when input is empty, shows error message", () => {
            submitForm()
            expect(page()).toContain("INVALID!")
        })
    })

    describe("tie", () => {
        beforeEach(() => {
            renderApp({
                play(observer) {
                    observer.tie()
                }
            })
        })

        it("no message is shown until button pressed", () => {
            expect(page()).not.toContain("TIE!")
        })

        it("when input is empty, shows error message", () => {
            submitForm()
            expect(page()).toContain("TIE!")
        })
    })

    describe("player 1 wins", () => {
        beforeEach(() => {
            renderApp({
                play(observer) {
                    observer.p1Wins()
                }
            })
        })

        it("no message is shown until button pressed", () => {
            expect(page()).not.toContain("PLAYER 1 WINS!")
        })

        it("when input is empty, shows error message", () => {
            submitForm()
            expect(page()).toContain("PLAYER 1 WINS!")
        })
    })

    describe("player 2 wins", () => {
        beforeEach(() => {
            renderApp({
                play(observer) {
                    observer.p2Wins()
                }
            })
        })

        it("no message is shown until button pressed", () => {
            expect(page()).not.toContain("PLAYER 2 WINS!")
        })

        it("when input is empty, shows error message", () => {
            submitForm()
            expect(page()).toContain("PLAYER 2 WINS!")
        })
    })
})
