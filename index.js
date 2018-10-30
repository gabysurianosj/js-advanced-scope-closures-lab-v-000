function produceDrivingRange(blockRange) {
  return function (starting, ending) {
    let distance Math.abs(parseInt(ending) - parseInt(starting));
    if (distance > blockRange) {
      return '${distance - blockRange} blocks out of range'
    } else {
      return 'within range by #{blockRange - distance}'
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare)
  return fare * tip;
}
}
