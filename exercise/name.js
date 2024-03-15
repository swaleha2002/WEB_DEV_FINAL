/*create a business name generator by combining list  of adjectives ad shop name and another word

Adjectives:
crazy
Amazing
Fire

shop name:
engine
foods
garments

Another word:
Bros
limited
hub

using string,functions,if else ,random numbers but do not use arrays*/

let rand = Math.random();
let first ,second ,third
   // 0,0.33,0.66,1.00
if(rand<0.33){
 first ="Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first ="Amazing"
}
else{
    first ="Fire"
}
//second word generator
 rand = Math.random();
if(rand<0.33){
    second ="engine"
}
else if(rand<0.66 && rand>=0.33){
    second ="foods"
}
else{
    second ="garments"
}
//third  word generator
 rand = Math.random();
if(rand<0.33){
   third ="Bros"
   }
   else if(rand<0.66 && rand>=0.33){
    third ="limited"
   }
   else{
    third ="hub"
   }

   console.log(`${first} ${second} ${third}`);