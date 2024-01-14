const age=[18,19,20,21,22,23]

const element=check(age)

function check(arr){
return arr.every((element)=>{
    console.log(`element:${element}`);
    return element>17
})
}
console.log(element);