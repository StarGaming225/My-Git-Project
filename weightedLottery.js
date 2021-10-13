const weights = {
    win: 1,
    lose: 999
  }
  const weightedLottery = weights => {
    let arr = [];
    Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++) {
        arr.push(key);
      }
    });
    return arr[(Math.random() * arr.length) | 0];
  };
  let pop = 1000
  for (let i = 0; i < pop; i ++) {
    console.log(weightedLottery(weights))
  }