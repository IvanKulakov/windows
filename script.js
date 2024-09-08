
// best block
try{
    const bestTitleItem = document.getElementsByClassName('h1__title__best');
    const bestContentItems = document.getElementsByClassName('best_content')
    let timerId = setInterval(() => stepRight(), 3000);

    const idForItems = () => {
        for (let i = 0; i < bestTitleItem.length; i++){
            bestTitleItem[i].id = 'titleId' + i;
            bestTitleItem[i].classList.remove('active_title');
            bestTitleItem[0].classList.add('active_title')
            document.getElementById(`titleId${i}`).addEventListener('click', active)
        }
        for (let i = 0; i < bestContentItems.length; i++){
            bestContentItems[i].id = 'contentId' + i;
            bestContentItems[i].classList.add('invisible');
            bestContentItems[0].classList.remove('invisible');
        }
    }
    const active= (e) => {
        clearInterval(timerId);
        const activeItem = e.target.id;
        for (let i = 0; i < bestTitleItem.length; i++) {
            bestTitleItem[i].classList.remove('active_title');
        }
        document.getElementById(activeItem).classList.add('active_title');
        let act = Number(e.target.id.slice(-1));
        for (let i = 0; i < bestContentItems.length; i++){
            bestContentItems[i].id = 'contentId' + i;
            bestContentItems[i].classList.add('invisible');
            bestContentItems[act].classList.remove('invisible');
        }
    }
    const isActive = () => {
        for(let i = 0; i < bestTitleItem.length; i++){
            if(bestTitleItem[i].classList.contains('active_title')){
                return Number(bestTitleItem[i].id.slice(-1))
            }
        }
    }
    const stepRight = () =>{
        let next;
        if(+isActive() === (bestTitleItem.length-1)){
            next = 0;
        }
        else next = +isActive() +1;
        for (let i = 0; i < bestTitleItem.length; i++){
            bestTitleItem[i].classList.remove('active_title');
            bestTitleItem[next].classList.add('active_title')
        }
        for (let i = 0; i < bestContentItems.length; i++){
            bestContentItems[i].classList.add('invisible');
            bestContentItems[next].classList.remove('invisible');
        }

    }
    idForItems();

}
catch (e) {
    console.log(e)
}