//  s evin başlangıc konumu t evin bitiş konumu elma agacı solda portakal sagda 
//  elma agacının konumu a portakal agacının b
//  - deger agacın soluna + deger sagına düştügü anlamına gelir  

//  samin ev başlangıcı 7 bitiş 10 olsun 
//  elma agacının konumu 4 portakal agacı ise 12 olsun  
//  3 elma ve 3 portakalımız var 
//  gelen apple degeri ile bize verilen a degerlerini topluyoruz her birini 
//  gelen orange degerleri ile [2 , 3 , -5] b degerini topluyoruz yeni bir array dönüyoruz
//  buna göre dönen her bir array sonuc degerlerini s <= dönen array degerleri && t <= dönen -array degerleri kontorulu yapıyoruz 


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let count_o = 0;
    let count_a = 0;
    let result = "";

    for (let apple of apples) {
        if (s <= (a + apple) && (a + apple) <= t) {
            count_a++;
        }
    }

    for (let orange of oranges) {
        if (s <= (b + orange) && (b + orange) <= t) {
            count_o++;
        }
    }

     console.log(count_a)
     console.log(count_o)
} 