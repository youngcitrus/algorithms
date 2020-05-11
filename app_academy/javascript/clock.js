class Clock {
    constructor() {
        const currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        this.printTime();

        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        let hours = this.hours > 12 ? this.hours - 12 : this.hours;
        hours = hours < 10 ? '0' + String(hours) : String(hours);
        let minutes = this.minutes < 10 ? '0' + String(this.minutes) : String(this.minutes);
        let seconds = this.seconds < 10 ? '0' + String(this.seconds) : String(this.seconds);
        console.log(`${hours}:${minutes}:${seconds}`);
    }

    _tick() {
        this._incrementSeconds();
        console.clear();
        this.printTime();
    }

    _incrementSeconds() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.hours = (this.hours + 1) % 24;
    }
}

console.clear();
const clock = new Clock();