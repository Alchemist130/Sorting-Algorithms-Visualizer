async function merge(element, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        element[low + i].style.background = 'orange';
        left[i] = element[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        element[mid + 1 + i].style.background = 'mediumvioletred';
        right[i] = element[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay); 
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === element.length){
                element[k].style.background = 'yellow';
            }
            else{
                element[k].style.background = 'lightseagreen';
            }
            element[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === element.length){
                element[k].style.background = 'yellow';
            }
            else{
                element[k].style.background = 'lightseagreen';
            } 
            element[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        if((n1 + n2) === element.length){
            element[k].style.background = 'yellow';
        }
        else{
            element[k].style.background = 'lightseagreen';
        }
        element[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        if((n1 + n2) === element.length){
            element[k].style.background = 'yellow';
        }
        else{
            element[k].style.background = 'lightseagreen';
        }
        element[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(element, l, r){
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(element, l, m);
    await mergeSort(element, m + 1, r);
    await merge(element, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let element = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(element.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(element, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


