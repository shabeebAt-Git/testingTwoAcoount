// Unique values
// Can contain mix of different datatypes
// Dynamically sized
// Do not maintaine insertion order
// Itereble


///////////////////////////// Array vs Sets ///////////////////////////////////

// Array contain duplicate values but sets dont
// Insertion orders are maintained in arrays but not in sets
// Searching and deletion in sets are more faster compared to arrays





const set = new Set([1,2,3])

set.add(5)
console.log(set.has(4));
set.delete(3)
console.log(set.size);
set.clear()

for(const item of set){
    console.log(item);
}

