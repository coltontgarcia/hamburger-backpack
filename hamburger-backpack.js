let hamburgerBackpack = []

hamburgerBackpack.push("Bagel Sandwich")
hamburgerBackpack.push("Row Boat")
hamburgerBackpack.push("Mr. Gassy")

hamburgerBackpack.splice(1, 1)

let coat = "Pink BomberJacket"
hamburgerBackpack.push(coat)

hamburgerBackpack.pop()

hamburgerBackpack.push("Extra shoes", "Juice Boxes", "First Aid Kit", "Camera", "Garnet's Cat")

//console.log("hamburgerBackpack before splice", hamburgerBackpack)

let hotdogDufflebag = hamburgerBackpack.splice(2, 3)



//let itemCount = hamburgerBackpack.length

//console.log(itemCount)

// for(let i = 0;i < hamburgerBackpack.length; i++) {
//     console.log(hamburgerBackpack[i])
// };

// for(let i = 0; i < hotdogDufflebag.length; i++) {
//     console.log(hotdogDufflebag[i])
// };

if(hamburgerBackpack.length >= 3){
    for(let i = 0; i < 3; i++){
        console.log(hamburgerBackpack[i])
    }

} else {
    for (let i = 0; i < hamburgerBackpack.length; i++){
        console.log(hamburgerBackpack[i])
    }
}


//console.log(hamburgerBackpack[0])
console.log("hamburger" + "Backpack", hamburgerBackpack)
//console.log("hotdogDufflebag", hotdogDufflebag)