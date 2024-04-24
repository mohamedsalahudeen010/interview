// Two Sum using Sorting and Two-Pointers technique:
// Javascript program to check if given array
// has 2 elements whose sum is equal
// to the given value

// Function to check if array has 2 elements
// whose sum is equal to the given value
//USING THIS METHOD WE CAN FIND SUM CAN ATTAIN OR NOT
function hasArrayTwoCandidates(A, arr_size, target){
	let first=0;
    let last=A.length-1
    A=A.sort((a,b)=>a-b)
    while(first<last){
        if(A[first]+A[last]===target){
            return true
        }
        else if(A[first]+A[last]<target){
            first++
        }
        else{
            last--
        }
    }
    return false
}

/* Driver program to test above function */
var A = [ 1, 4, 45, 10, -8 ]
var n = 49;
var arr_size = A.length;
// Function calling

console.log(hasArrayTwoCandidates(A,arr_size,n))

