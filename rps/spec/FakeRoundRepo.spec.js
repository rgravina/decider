import roundRepoContract from "./RoundRepoContract";
import FakeRoundRepo from "./FakeRoundRepo";

describe("fake round repo", () => {
    roundRepoContract(FakeRoundRepo)
})