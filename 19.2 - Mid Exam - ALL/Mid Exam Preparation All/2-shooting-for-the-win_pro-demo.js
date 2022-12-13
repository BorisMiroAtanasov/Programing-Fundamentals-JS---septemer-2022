function shootForTheWin(params) {
    let targets = params.shift().split(' ').map(Number);
    let shotTargets = 0;
  
    for (let index of params) {
      if (index == 'End') {
        break;
      }
      index = Number(index);
  
      if (index < 0 || index > targets.length - 1 || targets[index] == -1) {
        continue;
      }
  
      const currentTarget = targets[index];
      targets[index] = -1;
      shotTargets++;
  
      for (let i = 0; i < targets.length; i++) {
        if (targets[i] == -1) {
          continue;
        }
  
        if (targets[i] > currentTarget) {
          targets[i] -= currentTarget;
        } else {
          targets[i] += currentTarget;
        }
      }
    }
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
  }
  shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End'])