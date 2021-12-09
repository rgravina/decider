import {Round, Throw} from "../src/decider";

const RoundRepoContract = (klass) => {
    describe("round repo contract", () => {
        let roundRepo
        beforeEach(() => {
            roundRepo = new klass()
        })

        describe("when no rounds have been played", () => {
            it("is empty", () => {
                expect(roundRepo.isEmpty()).toBe(true)
            })
        })

        describe("when rounds have been played", () => {
            beforeEach(() => {
                roundRepo.save(new Round(Throw.rock, 'sailboat', 'invalid'))
            })

            it("is not empty", () => {
                expect(roundRepo.isEmpty()).toBe(false)
            })

            it("gets all rounds", () => {
                expect(roundRepo.getAll()).toEqual([new Round(Throw.rock, 'sailboat', 'invalid')])
            })
        })
    })
}

export default RoundRepoContract