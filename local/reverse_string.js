
// Reverse a string;


function reverseString(name,n){
    let left = 0;
    let right = n-1;

    while(left <= right){
        let temp = name[right];
        name[right] = name[left];
        name[left] = temp;
        left++;
        right--;
    }

    return name.join(" ")
}


let username = "Ritik";

console.log(reverseString(username.split(""),username.length));



