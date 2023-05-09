const obj = {
    name:"shabeeb",
    age:"23",
    "key":true,
    canAddFunc: function (){
        console.log(this.name);
    }

}
obj.new = "newlyAdded"



console.log(obj.name);
console.log(obj.key);
console.log(obj['name']);
console.log(obj['key']);
obj.canAddFunc()
