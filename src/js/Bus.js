class Bus {
    constructor(direction, seats, passangers) {
        this.direction = direction
        this.stations = ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'];
        this.seats = seats
        this.passangers = passangers
        this.last_station = 0
    }

    current() {
        return this.stations[this.last_station];
    }

    next() {
        if (this.direction === "from Prague to Vienna") {
            if (this.last_station < this.stations.length - 1) {
                this.last_station++;
            }
        } else if (this.direction === "from Vienna to Prague") {
            if (this.last_station > 0) {
                this.last_station--;
            }
        }
    }

    board(count) {
        this.passengers += Math.min(count, this.seats - this.passengers);
    }

    deboard(count) {
        this.passengers = Math.max(this.passengers - count, 0);
        }


}

export const bus = new Bus('from Prague to Vienna', 30, 10);
console.log(bus.current());
bus.next();
console.log(bus.current());
bus.board(20);
console.log(bus.passengers);
bus.deboard(15);
console.log(bus.passengers);

//board(count) NOT WORKING ASK!
//deboard(count) NOT WORKING ASK!

export default Bus
