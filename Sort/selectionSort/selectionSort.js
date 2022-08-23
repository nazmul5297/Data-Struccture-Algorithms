
console.log("Here we demonstrate the the selection sort")

const arr=[23,43,12,3,56,23,21,33,15]

for(let i=0;i<arr.length-1;i++){
    console.log(arr)
    let min=i;
    for(let j=i+1;j<arr.length;j++){
       
        if(arr[j]<arr[min]){
            min=j
        }
    }
    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
}

console.log(arr)