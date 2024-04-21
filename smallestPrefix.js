function smallestPrefix(arr){

    if(!arr.length)return ""

    let prefix=arr[0];//flower

    for(let i=1;i<arr.length;i++){
        let currString=arr[i]//flow
        let j=0;
        while(j<prefix.length && j<currString.length && prefix[j]==currString[j]){
            j++
        }
        prefix=prefix.slice(0,j)
    }
return prefix
}

console.log(smallestPrefix(["flower", "flow", "flight"]));//fl
