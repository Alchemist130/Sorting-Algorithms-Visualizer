async function selection(){
    const element = document.querySelectorAll(".bar");
    for(let i = 0; i < element.length; i++){
        let min_index = i;
        element[i].style.background = 'orange';
        for(let j = i+1; j < element.length; j++){
            element[j].style.background = 'fuchsia';
            await waitforme(delay);
            if(parseInt(element[j].style.height) < parseInt(element[min_index].style.height)){
                if(min_index !== i){
                    element[min_index].style.background = 'darkred';
                }
                min_index = j;
            } 
            else{
                element[j].style.background = 'darkred';
            }   
        }
        await waitforme(delay);
        swap(element[min_index], element[i]);
        element[min_index].style.background = 'darkred';
        element[i].style.background = 'yellow';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
