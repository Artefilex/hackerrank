function gradingStudents(grades) {
    // Write your code here
     let arr = []
    for (let grade of grades){
        if(grade < 38){
            arr.push(grade)
            
        }else{
           let grd1 = Math.ceil( grade / 5) * 5
           if(grd1 - grade < 3 ){
               arr.push(grd1)
           }else{
               arr.push(grade)
           }
        }
        
    }
    return arr
     
}