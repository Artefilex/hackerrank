const { solveMeFirst } = require("./index.js")

test("first project solve", ()=>{
    expect(solveMeFirst(2,3)).toBe(5)
})