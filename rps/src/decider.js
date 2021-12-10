export const Throw = {
    rock: 'rock',
    scissors: 'scissors',
    paper: 'paper'
}

export class Round {
    constructor(p1, p2, result) {
        this.p1 = p1;
        this.p2 = p2;
        this.result = result;
    }
}

export default class Decider {
    constructor(roundRepo) {
        this.roundRepo = roundRepo;
    }

    play(observer, player1, player2) {
        new PlayRound(observer, this.roundRepo, player1, player2).play()
    }

    getHistory(observer) {
        if (this.roundRepo.isEmpty()) {
            observer.noRounds()
        } else {
            observer.rounds(this.roundRepo.getAll())
        }
    }
}

export const Result =  {
    invalid: 'invalid',
    p1Wins: 'p1Wins',
    p2Wins: 'p2Wins',
    tie: 'tie',
}

class PlayRound {
    constructor(observer, roundRepo, player1, player2) {
        this.observer = observer
        this.roundRepo = roundRepo
        this.player1 = player1
        this.player2 = player2
    }

    play() {
        if (this.invalidInput()) {
            this.roundRepo.save(new Round(this.player1, this.player2, Result.invalid))
            this.observer.invalidInput()
            return
        }

        if (this.tie()) {
            this.roundRepo.save(new Round(this.player1, this.player2, Result.tie))
            this.observer.tie()
            return
        }

        if (this.p2Wins()) {
            this.roundRepo.save(new Round(this.player1, this.player2, Result.p2Wins))
            this.observer.p2Wins()
            return
        }

        this.roundRepo.save(new Round(this.player1, this.player2, Result.p1Wins))
        this.observer.p1Wins()
    }

    invalidInput() {
        return this.invalidThrow(this.player1) || this.invalidThrow(this.player2)
    }

    invalidThrow(player) {
        return player !== Throw.rock && player !== Throw.scissors && player !== Throw.paper;
    }

    tie() {
        return this.player1 === this.player2;
    }

    p2Wins() {
        if (this.player1 === Throw.scissors && this.player2 === Throw.rock) {
            return true
        }
        if (this.player1 === Throw.rock && this.player2 === Throw.paper) {
            return true
        }
        return this.player1 === Throw.paper && this.player2 === Throw.scissors;
    }
}
