for(let i = 1; i <= 20; i++) {
  console.log(i)
}
let temp = ['apple', 'banana', 'Kiwi']
temp.forEach((element, index) => {
  console.log(element, index)
})
let newValue = temp.map((element, index) => console.log(`${index+1}.${element}`))
let filterGreatherThanZero = [-1,2,3,56,6,-93,0,4].filter(el => el > 0)
console.log(filterGreatherThanZero)
