//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
arr1 = [3,7,34,90,12]
const lastelement=arr1[arr1.length-1];
console.log(lastelement)

//arr2 = [true, "green", "where",12,56]
arr2 = [true,"green", "where",12,56]
const  element =arr2[arr2.length-1];
console.log(element)

//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];
mypets = ["Cow","Bird","Snake","Dog"]
const pets =mypets.toString();
console.log(pets)

//Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var x =arr3.sort(function(a,b){return b-a});
console.log(x)

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
//without duplicates
  function norepetition (arr){
    return [...new Set(arr)];
  }
  console.log(norepetition(arr));

  //with duplicate

  const array =["apple", "mango", "apple",
  "orange", "mango", "mango"];
var uniqueSet = new Set(array);
const filteredElements = array.filter(currentValue => {
    if (uniqueSet.has(currentValue)) {
       uniqueSet.delete(currentValue);
    }
    else {
       return currentValue;
    }
 }
);
console.log(filteredElements)


//Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"
//let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x",4];
if (arr5[1]==["way"]){
    console.log("way")
}
else{
    (arr5[1]!=["way"])
        console.log("the search word was not found")
    
}


//Write a JS script to sort the following string
let word = "sevink"
 let myarry=(word)=>{
return word .split("").sort().join("");
 };
 console.log(myarry("sevink"))
