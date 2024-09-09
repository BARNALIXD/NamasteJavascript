const originalObject = {
    name : "barnali",
    age : 22,
    address : {
        city : "new york",
        country : "usa"
    }
};

//DEEP COPY USING JSON METHODS
const deepCopyObject =
  JSON.parse(JSON.stringify(originalObject));

  //modifying the originalObject
originalObject.name = "saesha";
originalObject.address.city = "los angeles";

console.log(originalObject);
console.log(deepCopyObject);