const shareBtn = document.querySelector('.btn'),
shareContainer = document.querySelector('.none');

shareBtn.addEventListener('click', ()=>{
    shareContainer.classList.toggle('none')
})