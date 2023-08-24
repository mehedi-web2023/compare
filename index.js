// const sanjida = "SanJidA"

// const adiba = sanjida.toUpperCase()
// console.log(adiba)

// toLowerCase,toUpperCase
// const fruits = ["Banana" ,"Orange", "Apple", "Mango"];

// console.log(fruits.join("--"))



// let number = 10;
// console.log(Math.random(number))


// console.log(Math.min(1,2,7,8))


const list = ["dada","nus-00","adiba","sanjida","dada","nus-00","nusrat"]

function duplicatename (list){
const duplicate = []

    for( let i =0; i< list.length; i++){
        const name = list[i]
         if(duplicate.includes(name) === false){
            duplicate.push(name)
         }
        
    }
    return duplicate

}

const durmiya = duplicatename(list)
// console.log(durmiya)



const mobiles = [
    {
        Name:"walton",
        Price:1200,
        model:"wt-90",
        color:"silver"
    },
    {
        Name:"Samsung",
        Price:1600,
        model:"St-90",
        color:"red"
    },
    {
        Name:"Nokia",
        Price:1800,
        model:"SNt-90",
        color:"Gold"
    },
    {
        Name:"Vivo",
        Price:200,
        model:"Vivo-90",
        color:"Black"
    },
    {
        Name:" Phone",
        Price:12000,
        model:"A-11",
        color:"white-gold"
    }
]

let number = 10
number=5


function lowpricePhone(mobiles){

    let lowprice = mobiles[0]


    for(let i =0; i< mobiles.length; i++){

        const mobileprice = mobiles[i]

        if(mobileprice.Price > lowprice.Price){

            lowprice = mobileprice
        }
    }

    return lowprice



}



const Phone = lowpricePhone(mobiles)
console.log(Phone)


