async function bubble() {
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length-1; i++){
        for(let j = 0; j < element.length-i-1; j++){
            element[j].style.background = 'orange';
            element[j+1].style.background = 'orange';
            if(parseInt(element[j].style.height) > parseInt(element[j+1].style.height)){
                await waitforme(delay);
                swap(element[j], element[j+1]);
            }
            element[j].style.background = 'darkred';
            element[j+1].style.background = 'darkred';
        }
        element[element.length-1-i].style.background = 'yellow';
    }
    element[0].style.background = 'yellow';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
