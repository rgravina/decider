import FakeRoundRepo from "./FakeRoundRepo";
import RoundRepoContract from "./RoundRepoContract";

describe("fake round repo supports the round repo contract", () => {
    RoundRepoContract(FakeRoundRepo)
})
