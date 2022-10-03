let header = document.querySelector("header");

window.addEventListener("scroll", ()=> {
  header.classList.toggle("sticky", window.scrollY );
});

let hello = document.getElementsByTagName("li");

for ( let hellos of hello){
    console.log(hellos)
    window.addEventListener("scroll", ()=> {
        hellos.classList.toggle("bgm", window.scrollY );
       });
    
}


