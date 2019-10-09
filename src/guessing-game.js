class GuessingGame {

    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.isLower = false;
        this.getMiddle();
    }

    guess() {
        return this.middle;
    }

    lower() {
        this.isLower = true;
        this.max = this.middle;
        this.getMiddle();
    }

    greater() {
        this.isLower = false;
        this.min = this.middle;
        this.getMiddle();
    }

    getMiddle() {
        let result = Math.ceil((this.max + this.min) / 2);
        this.middle = result;
    }
}

module.exports = GuessingGame;
