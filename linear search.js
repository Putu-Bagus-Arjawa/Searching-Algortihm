let array = [10, 20, 40, 80]
let target = 10;

function linear(){
    for (let i = 0; i < array.length; i++){
        if (target == array[i]){
            return array[i];
        }
    }
}

console.log(linear());
