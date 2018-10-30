function produceDrivingRange(blockRange) {
  return function(starting, ending) {
    let distance = Math.abs(parseInt(ending) - parseInt(starting));
    if (distance > blockRange){
      return '${distance - blockRange} blocks out of range'
    } else {
      return 'within range by ${blockRange - distance}'
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
  return fare * tip;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
