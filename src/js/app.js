
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


// start best block mobile
try{
    const bestItemsMob = document.getElementsByClassName('best_mobile');
    const placeForNembers = document.getElementById('numbersOfBstItems');
    const rightButton = document.getElementById('svgRight');
    const leftButton = document.getElementById('svgLeft');
    const swipeBestMobile = document.getElementById('best_mobile');

    let timerIdMob = setInterval(() => stepRightMobTimer(), 3000);


    const idForItemsMob = () => {
        for (let i = 0; i < bestItemsMob.length; i++) {
            bestItemsMob[i].id = 'bestItemMobileId' + i;
            bestItemsMob[i].classList.add('invisible');
            bestItemsMob[0].classList.remove('invisible');
        }
            // const counter = bestItemsMob.length;
            // const arrCounter = Array.from({length: counter}, (_, index) => index + 1);
            // console.log(arrCounter);
            // arrCounter.forEach(i => placeForNembers.innerHTML += ` <div>
            //     <p id="currentBox${i - 1}">${i}</p>
            // </div>`)
            //
    }
    const isActive = () => {
        for(let i = 0; i < bestItemsMob.length; i++){
            if(!bestItemsMob[i].classList.contains('invisible')){
                return Number(bestItemsMob[i].id.slice(-1))
            }
        }
    }
    const stepRightMobTimer = () =>{
        let next;
        if(+isActive() === (bestItemsMob.length-1)){
            next = 0;
        }
        else next = +isActive() +1;
        for (let i = 0; i < bestItemsMob.length; i++){
            bestItemsMob[i].classList.add('invisible');
            bestItemsMob[next].classList.remove('invisible')
        }
    }
    const stepLeftMob = () =>{
        clearInterval(timerIdMob);
        let next;
        if(+isActive() === 0){
            next = (bestItemsMob.length-1);
        }
        else next = +isActive() -1;
        for (let i = 0; i < bestItemsMob.length; i++){
            bestItemsMob[i].classList.add('invisible');
            bestItemsMob[next].classList.remove('invisible')
        }
    }
    const stepRightMob = () =>{
        clearInterval(timerIdMob);
        stepRightMobTimer();
    }
    let x1 = null;
    let y1 = null;

    const handleTouchStart = (event) => {
        const firstTouch = event.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }
    const handleToucheMove = (event) =>{
        if(!x1 || !y1){
            return false;
        }
        let x2 = event.touches[0].clientX
        let y2 = event.touches[0].clientY
        let xDiff = x2 - x1;
        let yDiff = y2 - y1;
        if(Math.abs(xDiff) < Math.abs(yDiff)){
            return false;
        }
        if (xDiff > 0){
            stepLeftMob();
        }
        if(xDiff < 0){
            stepRightMob();
        }
        x1 = null;
        y1 = null;
    }

    swipeBestMobile.addEventListener('touchstart', handleTouchStart, false);
    swipeBestMobile.addEventListener('touchmove', handleToucheMove, false);
    rightButton.addEventListener("click", stepRightMob);
    leftButton.addEventListener("click",stepLeftMob);
    idForItemsMob();
}
catch (e) {
    console.log(e)
}
// end best block mobile


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
    const btnOpenModalPrice = document.getElementById('openModalPrice');
    const btnOpenModalWS = document.getElementById('windowsSystem');
    const btnOpenModalRS = document.getElementById('rolsSystem');
    const btnOpenModalDO = document.getElementById('doorOutdoor');
    const btnOpenModalDI = document.getElementById('doorIndoor');
    const btnOpenModalMoskit = document.getElementById("moskit");
    const btnOpenModalFabricBlinds = document.getElementById("fabricBlinds");
    const btnOpenModalClimat = document.getElementById("climat");
    const btnClosedModal = document.getElementById('close_icon');
    const btnsubmit = document.getElementById('closedModal');
    const modal = document.getElementById('modal');
    const userNameInput = document.getElementById('userNameInput');
    const userPhoneInput = document.getElementById('userPhoneInput');

    let itemName = {
        openModal : 'титул',
        openModalPrice : 'прайс на работи',
        windowsSystem : 'віконні системи',
        rolsSystem : 'захисні ролети',
        doorOutdoor : 'вхідні двері',
        doorIndoor : 'внітрішні двері',
        moskit : 'москітні сітки',
        fabricBlinds : 'тканеві ролети',
        climat : 'кондиціонери',
    }

    let idButton
    const open = function (){
        modal.classList.add('modal-active');
        document.body.classList.add('main_hidden');
        idButton=event.target.id;
        return idButton;
    }


    const closed = function (event) {
        event.preventDefault();
        event.stopPropagation();
        sendToTelegram(itemName[idButton], userNameInput.value, userPhoneInput.value);
        userNameInput.value = "";
        userPhoneInput.value = "";
        modal.classList.remove('modal-active');
        document.body.classList.remove('main_hidden');
    }
    const exit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        userNameInput.value = "";
        userPhoneInput.value = "";
        modal.classList.remove('modal-active');
        document.body.classList.remove('main_hidden');
    }
    btnOpenModal.addEventListener('click', open);
    btnOpenModalPrice.addEventListener("click", open);
    btnOpenModalWS.addEventListener("click", open);
    btnOpenModalRS.addEventListener("click", open);
    btnOpenModalDO.addEventListener("click", open);
    btnOpenModalDI.addEventListener("click", open);
    btnOpenModalMoskit.addEventListener("click", open);
    btnOpenModalFabricBlinds.addEventListener("click", open);
    btnOpenModalClimat.addEventListener("click", open);
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

//burger menu block start
try{
    const burgerMenuOpenBTN = document.getElementById('burger-menu-open');
    const burgerMenu = document.getElementById('burger-menu');
    const burgerMenuCloseBTN = document.getElementById('burger-menu-close');
    const burgerMenuStickOpen = document.getElementById('open-burger-stick-menu');


    const openBurger = () => {
        burgerMenu.classList.add('_active-burger-menu')
    }
    const closeBurger = () => {
        burgerMenu.classList.remove('_active-burger-menu')
    }
    window.addEventListener('scroll', closeBurger)
    burgerMenuOpenBTN.addEventListener('click', openBurger);
    burgerMenuCloseBTN.addEventListener('click', closeBurger);
    burgerMenuStickOpen.addEventListener('click', openBurger);
}
catch (e){
    console.log(e)
}
//burger menu block end

//stick_menu block start
try{
    const stickMenu = document.getElementById('stick_menu');
    const header = document.getElementById('header');

    const scrollMenu = () => {
        stickMenu.style.width = `${header.offsetWidth}px`;
        if (document.documentElement.scrollTop > header.offsetHeight) {
            stickMenu.classList.add('_active-menu');
        }
        else {
            stickMenu.classList.remove('_active-menu');
        }
    }
    window.addEventListener('scroll', scrollMenu)
}
catch (e){
    console.log(e)
}
//stick_menu block end

//telegram block start

const sendToTelegram = (data, customer, telephone) => {
    if(telephone.length > 5) {
        const token = '7010775807:AAE2WfgujKgk-117ZQU8Jv9SM9JYX997GQs';
        const chatId = '-1002458740988';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Имя ${customer}, телефон ${telephone}, раздел ${data}`;
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.send();
    }
};

//telegram block end

//footer send block start
const inputNameFooter = document.getElementById('inputNameFooter');
const inputTelFooter = document.getElementById('inputTelFooter');
const inputBtnFooter = document.getElementById('inputBtnFooter');
const sendFooterData = function (event) {
    event.preventDefault();
    event.stopPropagation();
    sendToTelegram('footer', inputNameFooter.value, inputTelFooter.value);
    inputNameFooter.value = "";
    inputTelFooter.value = "";
}
inputTelFooter.addEventListener('focus', _ => {
    if(!/^\+\d*$/.test(inputTelFooter.value))
        inputTelFooter.value = '+38';

});
inputTelFooter.addEventListener('keypress', e => {
    if(!/\d/.test(e.key)) {
        e.preventDefault();
    }
});
inputBtnFooter.addEventListener('click', sendFooterData);
//footer send block end