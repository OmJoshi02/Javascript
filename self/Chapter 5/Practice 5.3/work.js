let mywork = []


for(let i = 0; i < 10; i++){
    let obj = {
        name : `Lesson ${i+1}`,
        status : i % 2 == 0
    }
    mywork.push(obj)
}

console.log(mywork);
