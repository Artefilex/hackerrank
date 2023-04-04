const { simpleArraySum } = require("./index.js")

test("array reduce method",()=>{
    const ar = [1 ,2 ,3 ,4 ,5 ]
   const sum = ar.reduce((first , second) =>{return  first + second})
   expect((sum)).toBe(15)
})