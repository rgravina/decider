import {Result, Round, Throw} from "../src/decider"

export default (klass) => {
    describe("round repo contract", () => {
        let repo
        beforeEach(() => {
            repo = new klass()
        })

        describe("when no rounds have been played", () => {
            it("is empty", () => {
                expect(repo.isEmpty()).toBe(true)
            })
        })

        describe("when rounds have been played", () => {
            beforeEach(() => {
                repo.save(new Round(Throw.rock, Throw.scissors, Result.invalid))
            })

            it("is not empty", () => {
                expect(repo.isEmpty()).toBe(false)
            })

            it("get all rounds", () => {
                expect(repo.getAll()).toEqual([new Round(Throw.rock, Throw.scissors, Result.invalid)])
            })
        })
    })
}
