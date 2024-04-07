 function changeaboutmetext(){

   const aboutmetexts=["friend","helper",'colegue'];
   const typingspeed=100;
   const erasespeed =50;
   const pausetime=1500;
   const aboutmeelement=document.querySelector(".about");
   
   let textindex=0;
   let charindex=0;
   let isdeleting=false;
   
   function type(){
       const currentext=aboutmetexts[textindex];
       if(!isdeleting && charindex < currentext.length){
           aboutmeelement.textContent+=currentext[charindex];
           charindex ++;
           setTimeout(type,typingspeed);
           console.log(aboutmeelement.textContent)
       }
       else if(isdeleting && charindex > 0){
           aboutmeelement.textContent=currentext.substring(0,charindex-1);
           charindex--;
           setTimeout(type,erasespeed);
       }
       else{
           isdeleting = !isdeleting;
           if(!isdeleting){
               textindex=(textindex+1)% aboutmetexts.length;
           }
           setTimeout(type,pausetime);
       }
   }
   type();
   
 }
