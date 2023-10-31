//Question 2
let name12 = "Ali"
console.log(`Hey ${name12}, would you like to learn some python today?`)
//Question 3
let name2 = "Ali"
let x = name2.toLowerCase()
console.log(x)
let y = name2.toUpperCase()
console.log(y)
const newName = name2.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" ")
console.log(newName)
//Question 4
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”')
//Question 5
let famous_person  = "Albert Einstein"
let message = '"A person who never made a mistake never tried anything new."'
console.log(`${famous_person} once said, ${message}`)
//This program prints name of person with quotation
//Question 7 & 8
console.log(4+4)
console.log(8-0)
console.log(4*2)
console.log(8/1)
//Question 9
let number1 = 7
let message2 = `Hey your favorite number is ${number1}`
console.log(message2)
//This program reveals the number selected
//Question 11
let name1 = ["Alpha", "Beta", "Gamma"]
for (var val of name1) {
    console.log(val)
}
//Question 12
for (var val of name1) {
    console.log(`Hey ${val}, "How are you?`)
}
//Question 13
let transport = ["car", 'bike']
for (var val of transport) {
    console.log(`i would like to own a ${val}`)
}
//Question 14
let invite = ["Jim", 'Jill', 'Jack']
for (var val of invite) {
    console.log(`i would like to invite ${val} to dinner`)
}
//Question 15
invite.pop()
invite.push('Jeff')
//Question 16
console.log("i found a bigger dinner table")
invite.unshift('Jeffery')
invite.splice(1, 0, 'Alpha')
invite.push("Beta")
for (var val of invite) {
    console.log(`i would like to invite ${val} to dinner`)
}
//Question 17

let spliced = invite.splice(2,2)
console.log(` ${spliced} i can,t invite you, as table haven't arrived yet`)
let spliced1 = invite.splice(3,3)
console.log(` ${spliced1} i can,t invite you, as table haven't arrived yet`)
let spliced2 = invite.splice(4,4)
console.log(` ${spliced2} i can,t invite you, as table haven't arrived yet`)
let spliced3 = invite.splice(5,5)
console.log(` ${spliced3} i can,t invite you, as table haven't arrived yet`)
for (var val of invite) {
    console.log(`you are still invited, ${val}`)
}
invite.splice(0, invite.length)
console.log(invite)
//Question 20
let list = ['french', 'German', 'English']
//Question 21
const list2: {type: string, model: number} = {
    type: "Porsche",
    model: 2009,
}
//Question 23
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
let car1 = 'subaru1';
console.log("Is car1 == 'subaru1'? I predict True.")
console.log(car1 == 'subaru1')
let car2 = 'subaru2';
console.log("Is car2 == 'subaru2'? I predict True.")
console.log(car2 == 'subaru2')
let car3 = 'subaru3';
console.log("Is car3 == 'subaru3'? I predict True.")
console.log(car3 == 'subaru3')
let car4 = 'subaru4';
console.log("Is car4 == 'subaru4'? I predict True.")
console.log(car4 == 'subaru4')
let car5 = 'subaru5';
console.log("Is car5 == 'subaru'? I predict False.")
console.log(car5 == 'subaru')
let car6 = 'subaru6';
console.log("Is car6 == 'subaru'? I predict False.")
console.log(car6 == 'subaru')
let car7 = 'subaru7';
console.log("Is car7 == 'subaru'? I predict False.")
console.log(car7 == 'subaru')
let car8 = 'subaru8';
console.log("Is car8 == 'subaru'? I predict False.")
console.log(car8 == 'subaru')
let car9 = 'subaru9';
console.log("Is car9 == 'subaru'? I predict False.")
console.log(car9 == 'subaru')
//Question 25
let alien_color = "green"
if (alien_color == "green") {
    console.log("player earned 5 points")
    console.log(alien_color == "green")
} else {    

}
let alien_color1 = "blue"
console.log(alien_color1 == "green")
//Question 26
let aliens_color = "green"
if (aliens_color == "green") {
    console.log("player earned 5 points")
} else {    

}
let aliens_color1 = "blue"
if (aliens_color1 == "green") {
    console.log("player earned 5 points")
} else {    
    console.log("player earned 10 points")
}
// Question 27
let alien_green = "green"
if (alien_green == "green") {
    console.log("player earned 5 points")
} else {    

}
let alien_blue = "blue"
if (alien_blue == "green") {
    console.log("player earned 5 points")
} else {    
    console.log("player earned 10 points")
}
let alien_yellow = "yellow"
if (alien_yellow == "green") {
    console.log("player earned 5 points")
} else if (alien_yellow == "blue"){    
    console.log("player earned 10 points")
} else {
    console.log("player earned 15 points")
}
// //Question 28
let human = 2
if (human >= 2) {
    console.log("Person is baby")
}
else if (human >= 2 && human <= 4) {
    console.log("person is a toddler")
} else if (human >= 4 && human <= 13) {
    console.log("person is a kid")
} else if (human >= 13 && human <= 20) {
    console.log("person is a teenager")
} else if (human >= 20 && human <= 65) {
    console.log("person is an adult")
} else {
    console.log("person is an elder")
}
//Question 30
let username =["Admin", "Alpha", "Beta", "Gamma", "Ap"]
for (var val of username) {
    if (val == "Admin") {
        console.log(`Hello ${val}, would you like to see the status report?`)
    } else {
        console.log(`Hello ${val}, Thanks for logging in again. `)
    }
}
//Question 31
let username1 =["Admin", "Alpha", "Beta", "Gamma", "Ap"]
username1.splice(0, username1.length)
console.log("We need to find some users")
//Question 32
