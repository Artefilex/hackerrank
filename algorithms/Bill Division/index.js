/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k =  bill[k]
 *  3. INTEGER b   bcharged - bactualy
 */

function bonAppetit(bill, k, b) {
    const totalBill = bill.reduce((sum ,item) => sum + item, 0 )
    const onlyBrian = totalBill - bill[k]
    const annaShare =  onlyBrian / 2
    if(annaShare === b){
            console.log("Bon Appetit")
    }else{
            console.log(b -annaShare)
    }
}