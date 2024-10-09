let array = [10, 20, 40, 80]
let target;



function binarySearching(target){
    let start = 0;
    let end = array.length - 1;
    
    while(start <= end){
           let mid = Math.floor((start+end)/2);
        if (target == array[mid]){
            return array[mid];
        }
        else if (target < array[mid]){
            end = mid -1;
        }else {
            start = mid +1;
        }
    }
return "Data Not Found";
}

console.log(binarySearching(40))

