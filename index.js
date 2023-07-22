let counting = 0;

const theCount = document.querySelector("#count");
const button = document.querySelectorAll(".btn");

button.forEach(function(btn){
    btn.addEventListener("click", function(event){
        const styles = event.currentTarget.classList
        if(styles.contains('decrease')){
            counting--;
        }else if(styles.contains("increase")){
            counting++
        }else{
            counting = 0
        }

        if(counting < 0){
            theCount.style.color = "red";
        }
        if(counting > 0){
            theCount.style.color = "green";
        }
        if(counting === 0 ){
            theCount.style.color = "black"
        }
        theCount.textContent = counting
        

    });

})






