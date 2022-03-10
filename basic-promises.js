let p = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve("Resolve")


    }
    else { reject("Failed") }


}
)

p.then((message) => {
    console.log('this is a ' + message)
}).catch((message) => (
    console.log('this is a ' + message)
)




)