const btnre=document.querySelectorAll(".btn");
btnre.forEach((btn) => {
  btn.addEventListener("click",function(){
   const tr=this.parentNode.parentNode;
   tr.remove();
  })
});

// const btnre=document.querySelectorAll(".btn");
// btnre.forEach((btn) => {
//   btn.addEventListener("click",function(){
//    const tr=this.parentNode.parentNode;
//    let td=tr.childNodes[5];
//    tr.removeChild(td);
//   })
// });

    
