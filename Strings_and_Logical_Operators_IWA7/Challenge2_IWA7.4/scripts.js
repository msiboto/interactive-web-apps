
const nickname = "Timmy";
const firstname = "Timothy";
const user =  nickname || firstname 



if (!user){
    console.log('Good Morning!')
}else{
console.log(`Good Morning, ${user}!`)}