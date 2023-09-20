import { sum } from "../sum"


test("sum function", ()=>{

    const result = sum(3,3);

    expect(result).toBe(6);
})