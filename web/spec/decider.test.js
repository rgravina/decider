import React from "react";
import {render} from "react-dom";
import Decider from "../src/decider";
import {container, enterText, page, setupDOM, submitForm, teardownDOM} from "./reactDomRender";

describe("decider", () => {
    beforeEach(() => setupDOM())
    afterEach(() => teardownDOM())

    describe("submit input", () => {
        let playSpy
        beforeEach(() => {
            playSpy = jest.fn()
            renderApp({
                play: playSpy
            })
        })

        it("passes input to play method", () => {
            enterText("p1", "rock")
            enterText("p2", "sailboat")

            submitForm()

            expect(playSpy).toHaveBeenCalledWith(expect.anything(), "rock", "sailboat")
        })
    })

    describe("invalid input", () => {
        beforeEach(() => {
            renderApp({
                play: (observer) => observer.invalidInput()
            })
        })

        it("does not show message", () => {
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
                play: (observer) => observer.tie()
            })
        })

        it("does not show message", () => {
            expect(page()).not.toContain("TIE!")
        })

        it("when input is empty, shows error message", () => {
            submitForm()

            expect(page()).toContain("TIE!")
        })
    })

    describe("p1 wins", () => {
        beforeEach(() => {
            renderApp({
                play: (observer) => observer.p1Wins()
            })
        })

        it("does not show message", () => {
            expect(page()).not.toContain("PLAYER 1 WINS!")
        })

        it("when input is empty, shows error message", () => {
            submitForm()

            expect(page()).toContain("PLAYER 1 WINS!")
        })
    })

    describe("p2 wins", () => {
        beforeEach(() => {
            renderApp({
                play: (observer) => observer.p2Wins()
            })
        })

        it("does not show message", () => {
            expect(page()).not.toContain("PLAYER 2 WINS!")
        })

        it("when input is empty, shows error message", () => {
            submitForm()

            expect(page()).toContain("PLAYER 2 WINS!")
        })
    })
})

const renderApp = (decider) => render(<Decider decider={decider}/>, container)

