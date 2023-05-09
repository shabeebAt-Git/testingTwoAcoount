// unordered collection of key - value pairs 
// itereble



const map = new Map([['a',1],['b',2]])

map.set('c',3)
map.delete('b')
console.log(map.has('a'));

for(const[key,value] of  map){
    console.log(`${key}: ${value}`);
}