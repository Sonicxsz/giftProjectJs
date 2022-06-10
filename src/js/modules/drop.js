function drop (){
//dragenter - объект над droparea
// dragleave - объект за пределами dropArea
// dragover - объект зависает над dropArea
// drop - объект отправлен на dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(event =>{
        fileInputs.forEach(i =>{
            i.addEventListener(event, preventDef, false);
        });
    });

    function preventDef(e){
        e.preventDefault();
        e.stopPropagation();

    }

    function highlight(item){
        item.closest('.file_upload').style.border = '2px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function unHighlight(item){
        item.closest('.file_upload').style.border = 'none';
        
        if(item.closest('.calc-form')){
            item.closest('.file_upload').style.backgroundColor = '#fff';
        }else{
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(event =>{
        fileInputs.forEach(i =>{
            i.addEventListener(event, ()=>{
                highlight(i);
            }, false);
        });
    });

    ['dragleave', 'drop'].forEach(event =>{
        fileInputs.forEach(i =>{
            i.addEventListener(event, ()=>{
                unHighlight(i);
            }, false);
        });
    });

    fileInputs.forEach(inp =>{
        inp.addEventListener('drop', (e)=>{
            inp.files = e.dataTransfer.files;
            let dots;
            const arr = inp.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            let name = arr[0].substring(0, 6) + dots + arr[1];
            inp.previousElementSibling.textContent = name;
        });
    });

}

export default drop;