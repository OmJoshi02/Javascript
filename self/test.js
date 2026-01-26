let nums = [2,5,1,3,4,7]

let n = 3;

let result = []

    let x = [];
    let y = [];

    for(let i = 0; i < n/2+1; i++){
        x[i] = nums[i];
    }

    for(let j = n; j < nums.length; j++){
        y[j] = nums[j];
    }

    console.log(x)
    console.log(y)a