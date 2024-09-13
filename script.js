
// start best block
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
// end best block


//btn-up block start
try{
    const btnUp = document.getElementById('button-up');
    const scrollUp = () => {
        if (document.documentElement.scrollTop > 300) {
            btnUp.classList.remove('show');
        } else {
            btnUp.classList.add('show')
        }
    }

    const scrollingUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    btnUp.addEventListener('click', scrollingUp );
    window.addEventListener('scroll', scrollUp);
}
catch (e){
    console.log(e)
}
//btn-up block end

//modal block start
try {
    const btnOpenModal = document.getElementById('openModal');
    console.log(btnOpenModal);
    const btnClosedModal = document.getElementById('close_icon');
    const btnsubmit = document.getElementById('closedModal');
    const modal = document.getElementById('modal');
    const userNameInput = document.getElementById('userNameInput');
    const userPhoneInput = document.getElementById('userPhoneInput');

    const open = function (){
        modal.classList.add('modal-active');
        // body.classList.add('main_hidden');
    }

    const closed = function (event) {
        event.preventDefault();
        event.stopPropagation();
        sendToTelegram(userNameInput.value, userPhoneInput.value);
        userNameInput.value = "";
        userPhoneInput.value = "";
        modal.classList.remove('modal-active');
        // body.classList.remove('main_hidden');
    }
    const exit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        userNameInput.value = "";
        userPhoneInput.value = "";
        modal.classList.remove('modal-active');
        // body.classList.remove('main_hidden');
    }
    try{
        const openModalMob = document.getElementById('openModalMob');
        openModalMob.addEventListener('click', open);
    }
    catch (e)
    {
        console.log(e)
    }
    btnOpenModal.addEventListener('click', open);
    btnClosedModal.addEventListener('click', exit);
    btnsubmit.addEventListener('click', closed);
    userPhoneInput.addEventListener('focus', _ => {
        if(!/^\+\d*$/.test(userPhoneInput.value))
            userPhoneInput.value = '+38';

    });

    userPhoneInput.addEventListener('keypress', e => {
        if(!/\d/.test(e.key)) {
            e.preventDefault();
        }
    });


}
catch (e){
    console.log(e)
}
//modal block end
