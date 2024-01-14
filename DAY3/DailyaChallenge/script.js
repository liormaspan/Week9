const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

// //1-2
//   function getCarHonda(carInventory){
//     const hondacar= carInventory.filter(car=>car.car_make==="Honda")
//     return hondacar.length>0 && [hondacar[0]];
   
// }
// const firstHonda=getCarHonda(inventory, 'Honda')
// const find=firstHonda.find((element)=>{
//     element==="Honda"
//     console.log(`This is a ${element.car_make} ${element.car_model} from ${element.car_year}`);
// })
// console.log(firstHonda);

// part 2
// 

function sortCarInventoryByYear(carInventory){
const year=carInventory.sort((a,b)=>(a.car_year<b.car_year?-1:1))

console.log(year);
}
sortCarInventoryByYear(inventory)



