const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

const result = names.forEach(name => console.log(name));

const matching = names.forEach((element, index) => {
    console.log(`${element} (${provinces[index]})`);
});

const uppercase = provinces.map(x => x.toUpperCase());
console.log(uppercase);

const length = names.map(element => element.length);
console.log(length);

// const sortProvinces = provinces.toSorted();
// console.log(sortProvinces)

const filterword = "Cape"
const filter = provinces.filter(item => !item.includes(filterword))
console.log(filter.length)

//how to combine some and map
const sCharacter = names.map(name => name.includes('S') || name.includes('s') );
console.log(sCharacter)

const obj = names.reduce((accumulator, name, index) => {
    accumulator[name] = provinces[index];
    return accumulator;
}, {}); //assigning initial value to an empty object

console.log(obj);

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

  