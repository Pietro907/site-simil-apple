
/* Assegno tutte le section ad una variabile */
const elementWatch = document.querySelectorAll('.watch');

/* creo un callback */
let callback = function(items){
    items.forEach((item)=>{
        if(item.isIntersecting){
            item.target.classList.add('in_page')
        }else{
            item.target.classList.remove('in_page')
        }
        console.log(item);
    }
)};


/* observer */
let observer = new IntersectionObserver(callback, {threshold: 0.6});
console.log(observer);


/* applico */

elementWatch.forEach((element) => {
    observer.observe(element);
});