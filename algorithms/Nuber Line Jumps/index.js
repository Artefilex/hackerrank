// İlk kanguru, x1 konumunda başlar ve v1 birimlik bir hızla her sıçramada ilerler.
// İkinci kanguru, x2 konumunda başlar ve v2 birimlik bir hızla her sıçramada ilerler.

// İki kangurunun aynı zamanda aynı konumda buluşabilmesi için, birinci kangurunun 
// ikinci kanguruyu yakalayabilmesi gerekmektedir. İkinci kanguru, birinci kangurudan daha önde başlıyorsa
//  ve aynı veya daha hızlı bir hızla ilerliyorsa, 
// birinci kanguru ikinci kanguruyu asla yakalayamaz. Bu durumda "NO" sonucunu döndürürüz.


// Number.isInteger(jumps), jumps değişkeninin bir tam sayı olup olmadığını 
// kontrol eden bir JavaScript fonksiyonudur.

function kangaroo(x1, v1, x2, v2) {
    if(x2 > x1 && v2 > v1){
        return "NO";
    }
    
    const jumps = (x1-x2) / ( v2 -v1)
    if(jumps >= 0 && Number.isInteger(jumps)){
         return "YES";
    }else{
         return "NO"
    }
   
   }