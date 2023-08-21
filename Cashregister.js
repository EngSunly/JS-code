function checkCashRegister(price, cash, cid) {
    let sumofcid = 0;
    for( let i = 0; i < cid.length; i++){
      sumofcid += cid[i][1];
    }
    if (sumofcid < cash - price){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    if (sumofcid === cash - price){
      return {status: "CLOSED", change: cid};
    }
    
    console.log(sumofcid);

    let changeamount = cash - price;

    console.log(changeamount);
    let change = [];
    if(changeamount >= 100 && cid[8][1] > 0){
        let hundreds = Math.floor(changeamount / 100);
        if (cid[8][1] < (hundreds * 100)){
            change.push(cid[8]);
            changeamount -= cid[8][1];
        }
        else{
            change.push(["ONE HUNDRED", hundreds * 100]);
            changeamount -= hundreds * 100;
        }
    }
    
    if(changeamount >= 20 && cid[7][1] > 0){
        let twenties = Math.floor(changeamount / 20);
        if (cid[7][1] < twenties * 20){
            change.push(cid[7]);
            changeamount -= cid[7][1];
            
        }
        else{
            change.push(["TWENTY", twenties * 20]);
            changeamount -= twenties * 20;
        }
    }
    if(changeamount >= 10 && cid[6][1] > 0){
        let tens = Math.floor(changeamount / 10);
        if (cid[6][1] < tens * 10){
            change.push(cid[6]);
            changeamount -= cid[6][1];
        }
        else{
            change.push(["TEN", tens * 10]);
            changeamount -= tens * 10;
        }
    }
    if(changeamount >= 5 && cid[5][1] > 0){
        let fives = Math.floor(changeamount / 5);
        if (cid[5][1] < fives * 5){
            change.push(cid[5]);
            changeamount -= cid[5][1];
        }
        else{
            change.push(["FIVE", fives * 5]);
            changeamount -= fives * 5;
        }
    }
    if(changeamount >= 1 && cid[4][1] > 0){
        let ones = Math.floor(changeamount / 1);
        if (cid[4][1] < ones * 1){
            change.push(cid[4]);
            changeamount -= cid[4][1];
        }
        else{
            change.push(["ONE", ones * 1]);
            changeamount -= ones * 1;
        }
    }
    if(changeamount >= 0.25 && cid[3][1] > 0){
        let quarters = Math.floor(changeamount / 0.25);
        if (cid[3][1] < quarters * 0.25){
            change.push(cid[3]);
            changeamount -= cid[3][1];
        }
        else{
            change.push(["QUARTER", quarters * 0.25]);
            changeamount -= quarters * 0.25;
        }
    }
    if(changeamount >= 0.1 && cid[2][1] > 0){
        let dimes = Math.floor(changeamount / 0.1);
        if (cid[2][1] < dimes * 0.1){
            change.push(cid[2]);
            changeamount -= cid[2][1];
        }
        else{
            change.push(["DIME", dimes * 0.1]);
            changeamount -= dimes * 0.1;
        }
    }
    if(changeamount >= 0.05 && cid[1][1] > 0){
        let nickels = Math.floor(changeamount / 0.05);
        if (cid[1][1] < nickels * 0.05){
            change.push(cid[1]);
            changeamount -= cid[1][1];
        }
        else{
            change.push(["NICKEL", nickels * 0.05]);
            changeamount -= nickels * 0.05;
        }
    }
    if(changeamount >= 0.01 && cid[0][1] > 0){
        changeamount = Math.round(changeamount * 100) / 100;

        let pennies = Math.floor(changeamount / 0.01);
        if (cid[0][1] < pennies * 0.01){
            change.push(cid[0]);
            changeamount -= cid[0][1];
        }
        else{
            change.push(["PENNY", pennies * 0.01]);
            changeamount -= pennies * 0.01;
        }
    }
    if (changeamount< 0.01){
        changeamount = 0;
    }
    if (changeamount > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    else{
        let result = {status: "OPEN", change: change};
        console.log(result);
        return {status: "OPEN", change: change};
    }
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}