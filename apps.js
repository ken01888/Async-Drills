//Creating text function and setting the functions time out
function text (message){
    console.log(message)
};
text("You Guys Rock!!")
setTimeout(text,2000,"Hello Everyone");

//getWords Function
function getWords(word1,word2,word3,word4){
    console.log(word1)
        setTimeout(function(){
            console.log(word2)
            setTimeout(function(){
                console.log(word3)
                setTimeout(function(){
                    console.log(word4)
                },1000);
            },2000);
        },3000);
}
getWords('Have','a','beautiful','day!')

function done(){
    console.log('Job Done!')
}

function countdown(num,callback){
    setTimeout(()=>{
        if (num == 1){
          callback();
        }else if (num > 0){
            console.log(num)
        }      
        num--
        countdown(num,callback)
        },1000)  
}
countdown(10,done)


let lunchTime = false;
function orderSomeFood(){
    return new Promise((resolve,reject)=>{ 
        if (lunchTime===true){
          let  obj ={
                lunch:"My Favorite Lunch",
                drink:"My Favorite Drink"
            } 
            resolve(obj)
        }else{
            
            let err = new Error('Something went terribly wrong')
            reject(err)

        }
    })
}

orderSomeFood().then(obj=>console.log(obj)).catch(err=>console.log(err))