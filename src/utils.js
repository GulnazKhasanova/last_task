
export function getRandomColor(){
    document.addEventListener('click',(e)=>{
        console.log(e.target);
        let randomColor = '#'+(Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString(16)+''+(Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString(16)+''+(Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString(16);
        if(e.target.className === 'button'){
            document.body.style.backgroundColor = randomColor;
        }
    })
  }