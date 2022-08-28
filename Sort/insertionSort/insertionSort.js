console.log("Here we demonstrate the the selection sort")

const arr=[23,43,12,3,56,23,21,33,15]
// const arr=[1,2,3,4,5,6,7]



function insertionSort(arr){
    for(let i=0;i<arr.length-1;i++){
       
       if(arr[i]>arr[i+1]){
        const temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        for(let j=i;j>0;j--){
            console.log(arr)
            if(arr[j]<arr[j-1]){
              const  temp=arr[j-1]
                arr[j-1]=arr[j]
                arr[j]=temp
            }
        }
    }
    }

    return arr
    
}


console.log("after",insertionSort(arr))