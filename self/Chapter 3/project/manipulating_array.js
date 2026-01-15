const theList = ['Laurance', 'Svekis', true, 35, null, undefined, {test:'one', score:55}, ['one','two']]

//output = ["First", "Svekis", "Middle", "hello world","Last"]

theList.shift()

theList.unshift("First")

theList[3] = "hello world"

theList[2] = "Middle"

theList.pop()
theList.pop()
theList.pop()
theList.pop()
theList.push("Last")

console.log(theList);
