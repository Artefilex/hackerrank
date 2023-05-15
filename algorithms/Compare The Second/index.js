function compareTriplets(a, b) {
    let first = 0 
    let second= 0
    

for(let i = 0 ; i < a.length; i++){
   
    if(a[i] > b[i] ){
    first++
    }
     else if( b[i] > a[i]){
    second++
   }
}

 
   return [first , second ]
   
}