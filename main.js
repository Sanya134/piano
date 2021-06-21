/** div creation for white and black node */
const piano = document.querySelector('#container') 
const data = ['A','B','C','D','E','F','G']

let html = ''
for(let eight=0; eight<2; eight++){
    for(let i=0; i<data.length; i++){
    html+=`<div class='whiteNode' id='${data[i]}${eight+4}'>`
       if((data[i]!='C'&& data[i]!='G')== true){
        html+=`<div class='blackNode' id='${data[i]}#${eight+4}'></div>`
       }
        html+=`</div>`
    }
}
piano.insertAdjacentHTML('beforeend',html)
/*music section*/
 const keys = document.querySelectorAll('.whiteNode','.blackNode')

 keys.forEach( )



