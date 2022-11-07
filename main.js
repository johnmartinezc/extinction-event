let dinoList1 = document.querySelectorAll('#ordered-dinos li')

function olStike(){
    for(let i = 0; i < dinoList1.length;i++){
        dinoList1[i].addEventListener('click',function(){
            console.log(dinoList1[i].innerText)
            dinoList1[i].style.textDecoration = 'line-through'
        })
    }
}
olStike()

let dinoList2 = document.querySelector('#unordered-dinos ')
let dinoList3 = document.querySelector('#unordered-dinos ')

dinoList2.addEventListener('click', function(event){
    let listItem = event.target;
    console.log(listItem.innerText)
    listItem.style.opacity = '0'
})

let dinoImg = document.querySelectorAll('#row img')

function imgs(){
    for (let i = 0; i < dinoImg.length; i++) {
        dinoImg[i].addEventListener('click',function(){
           console.log(dinoImg[i].innerText)
            dinoImg[i].style.width = '0px'; 
        })
        
    }
}

imgs()



let extinction = document.querySelector('#destroy-all')

// function extent (dinoImg,dinoList1,dinoList2){
//     for (let i = 0; i < dinoImg.length; i++) {
//         dinoImg[i].style.textDecoration = 'line--through'
//     }
// }

extinction.addEventListener('click',function(){
    extinguisAll(dinoList1,dinoList2,dinoImg)
})



function extinguisAll( arr1, arr2, arr3){
    for(let i = 0; i < arr1.length; i++){
        arr1[i].style.textDecoration = 'line-through'
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i].style.opacity = '0'
        
    }
    for (let i = 0; i < arr3.length; i++) {
        arr3[i].style.width = '0px'
        
    }
}

// function extent (){
    
//     for(  ){
//         dinoList1.style.textDecoration = "line-through";
//     }for(const t of dinoList2){
//         t.style.opacity= 0;}
//         for(const t of dinoImg){
//         t.style.width = "0px"
//     }
//     extinction.addEventListener("click",extent);
       
// }

// extent()















// const firstListItems=document.querySelectorAll("ol li"),
// addStrikethrough=function(t){t.target.style.textDecoration="line-through"};
// for(const t of firstListItems)t.addEventListener("click",addStrikethrough);
// const secondListItems=document.querySelectorAll("ul li"),fade=function(t){t.target.style.opacity=0};
// for(const t of secondListItems)t.addEventListener("click",fade);
// const pictures=document.querySelectorAll("#row img"),collapse=function(t){t.target.style.width="0px"};
// for(const t of pictures)t.addEventListener("click",collapse);

// const meteor=document.querySelector("#destroy-all"),
// destroyEverything=function(){
//     for(const t of firstListItems)t.style.textDecoration="line-through";
// for(const t of secondListItems)t.style.opacity=0;for(const t of pictures)t.style.width="0px"};
// meteor.addEventListener("click",destroyEverything);