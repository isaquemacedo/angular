let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message);

let episode: number = 4
console.log(episode)
episode++
console.log("Next episode is " + episode)

let favoriteDroid: string
favoriteDroid = "BB-8"
console.log("My favorite droind is " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12;
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon ? ${isEnoughToBeatMF(distance) ? 'YES': 'No'}`);

let call = (name: string) => console.log(`Do you copy, ${name}? `);
call('R2')

function inc(speed: number, inc: number = 1): number {
    return speed + inc
}

let whatsIsInc = (inc: number)  => inc <= 0 ? 0: inc;

console.log(`ìnc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)
console.log(`inc is 0 = ${inc(whatsIsInc(0))}`)
console.log(`inc is 8 = ${inc(whatsIsInc(8))}`)
