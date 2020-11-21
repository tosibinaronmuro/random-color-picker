 let button=document.getElementById('button');
let yoo=document.getElementById('yoo');
let hey=document.querySelectorAll('.hey')
 let back=document.getElementsByClassName('containerrr')
 button.addEventListener('click',change)
 function change(e){
     function randd(len,arr){
         var ans='';
         for (var i=len; i>0; i--){
             ans+=
             arr[Math.floor(Math.random()*arr.length)];
         }
         return ans
     }
    //  console.log('#'+ randd(6,'1234567890abcdef'))
    let color='#'+ randd(6,'1234567890abcdef');
    button.textContent= '#'+ randd(6,'1234567890abcdef');
    button.style.backgroundColor=color;
    // console.log(color)
      back[0].style.backgroundColor=color;
   yoo.style.color=color;
   
    
    hey.forEach(function (hey){
     hey.style.color=color;
    })}
 
