
const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha","lokesh"]

for(let i = 0; i< nepaliNames.length; i++){
    console.log(`${nepaliNames[i]}`)
}


let dummyusers = [{}]
for (let i = 0; i < nepaliNames.length; i++ ){
    // dummyusers.push(nepaliNames[i])
    let element = nepaliNames[i].toLowerCase()
    dummyusers.push({
        name : nepaliNames[i],
        email : `${element}@gmail.com`,
        password: `${element}${i}`,

    })
}

// dummyusers.push(nepaliNames[1])
// dummyusers.push(nepaliNames[2])
// dummyusers.push(nepaliNames[3])
// dummyusers.push(nepaliNames[4])

console.log(dummyusers);

/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/