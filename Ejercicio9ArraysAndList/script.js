
//ARRAY Y LISTAS

  let item = "flash";
  const collection =["Franco",item, 5, true];

console.log(collection);
console.log(collection[2]);
//ESTRUCTURA DE FOR
for (let index = 0; index < collection.length; index++) {
  const element = collection[index];
  console.log(element);

}

// ESTRUCTURA forEach
collection.forEach(function(item){{
  item=`<li> ${item}</li>`
  console.log(item);
  
}})


//Estrutura find

let longItems= collection.find(function(item){{
  if(item.length>=5){
    return item;
  }
}})
console.log("longItems:  ", longItems);
console.log(collection);

