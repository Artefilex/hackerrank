
function breakingRecords(scores) {
    let minRecord = scores[0]; 
    let maxRecord = scores[0];
     let minCount = 0
     let maxCount =0
 
    for(let i =0 ; i < scores.length; i++){
        if(scores[i] < minRecord){
            minRecord = scores[i]
            minCount += 1
        } else if (scores[i] > maxRecord ){
             maxRecord = scores[i]
             maxCount +=1
        }
        
    }
    return [maxCount , minCount]
}
