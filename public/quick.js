async function partitionLomuto(element, l, r){
    let i = l - 1;
    element[r].style.background = 'fuchsia';
    for(let j = l; j <= r - 1; j++){
        element[j].style.background = 'mediumvioletred';
        await waitforme(delay);
        if(parseInt(element[j].style.height) < parseInt(element[r].style.height)){
            i++;
            swap(element[i], element[j]);
            element[i].style.background = 'orange';
            if(i != j) element[j].style.background = 'orange';
            await waitforme(delay);
        }
        else{
            element[j].style.background = 'pink';
        }
    }
    i++; 
    await waitforme(delay);
    swap(element[i], element[r]); 
    element[r].style.background = 'pink';
    element[i].style.background = 'yellow';

    await waitforme(delay);

    for(let k = 0; k < element.length; k++){
        if(element[k].style.background != 'yellow')
            element[k].style.background = 'darkred';
    }
    return i;
}

async function quickSort(element, l, r){
    if(l < r){
        let pivot_index = await partitionLomuto(element, l, r);
        await quickSort(element, l, pivot_index - 1);
        await quickSort(element, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <element.length && r <element.length){
            element[r].style.background = 'yellow';
            element[l].style.background = 'yellow';
        }
    }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let element = document.querySelectorAll('.bar');
    let l = 0;
    let r = element.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(element, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
