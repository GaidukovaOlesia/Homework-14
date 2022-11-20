
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeElement(array, item) {
     array = array.splice(item, 1);
}
removeElement(array, 4);
console.log(array);