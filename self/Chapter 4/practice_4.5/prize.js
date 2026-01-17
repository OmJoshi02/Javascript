let prize = prompt("Enter the value between 0 to 10")

num = Number(prize)
console.log(typeof num);

let my_sel = "My selection : "

switch(num){
    case 1:
        alert(`${my_sel} 1 : won First prize`)
        break

    case 2:
        alert(`${my_sel} 2 : won Second prize`)
        break

    case 3:
        alert(`${my_sel} 3 : won Third prize`)
        break

    case 4:
        alert(`${my_sel} 4 : won Fourth prize`)
        break

    case 5:
        alert(`${my_sel} 5 : won Fifth prize`)
        break

    case 6:
        alert(`${my_sel} 6 : won Sixth prize`)
        break

    case 7:
        alert(`${my_sel} 7 : won Seventh prize`)
        break

    case 8:
        alert(`${my_sel} 8 : won Eighth prize`)
        break

    case 9:
        alert(`${my_sel} 9 : won Nineth prize`)
        break

    case 10:
        alert(`${my_sel} 10 : won Tenth prize`)
        break

    default:
        alert("you won't win")
        break
}
// console.log(prize);


