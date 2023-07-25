async function insertion(){
    const element = document.querySelectorAll(".bar");
    element[0].style.background = 'yellow';
    for(let i = 1; i < element.length; i++){
        let j = i - 1;
        let key = element[i].style.height;
        element[i].style.background = 'orange';
        await waitforme(delay);
        while(j >= 0 && (parseInt(element[j].style.height) > parseInt(key))){
            element[j].style.background = 'orange';
            element[j + 1].style.height = element[j].style.height;
            j--;
            await waitforme(delay);
            for(let k = i; k >= 0; k--){
                element[k].style.background = 'yellow';
            }
        }
        element[j + 1].style.height = key;
        element[i].style.background = 'yellow';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


