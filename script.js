document.body.addEventListener("keydown",(e)=>{
    tocar(e.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", ()=>{
    let boxseq = document.querySelector("#input").value.toLowerCase();
    if(boxseq != ""){
        let secArray = boxseq.split('');
        
        playseq(secArray);
    }
    playseq(boxseq);
})

function tocar(tecla){
    let som = document.querySelector(`#s_${tecla}`);
    let boxtecla = document.querySelector(`div[data-key="${tecla}"]`);
    if(som){
        som.currentTime = 0;
        boxtecla.classList.add("active");
        som.play();
        setTimeout(()=>{
            boxtecla.classList.remove("active");
        }, 200);
    }
}

function playseq(seq){
    let dalay = 0;
    
    for(let i of seq){
        setTimeout(()=>{
            tocar(`key${i}`);

        },dalay);
        dalay += 250;
    }
}