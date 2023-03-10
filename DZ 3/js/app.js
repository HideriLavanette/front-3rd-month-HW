const tabContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')


const hideTabContent = () =>
{
    tabContent.forEach((item) => {
        item.style.display = 'none';
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    })
}
hideTabContent()
const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
showTabContent()

let tabCounter = 0;
const autoFunctionSlider = () =>
{
    if (tabCounter === 4) tabCounter = 0;
    hideTabContent()
    showTabContent(tabCounter);
    tabCounter++;
}
let autoSlider = setInterval( autoFunctionSlider, 1500);

tabsParent.addEventListener('click', (e) =>
{
    clearInterval(autoSlider)
    setTimeout(() => {
        autoSlider = setInterval( autoFunctionSlider, 1500);
    }, 3000);
    if (e.target.classList.contains('tabheader__item')) {
        const target = e.target
        tabs.forEach((item, i) =>
        {
            if (target === item) {
                hideTabContent()
                showTabContent(i)
                tabCounter = i;
            }
        })
    }
})



const modal = document.querySelector(".modal")
const btn_white = document.querySelector(".btn_white")
const openModalDark = document.querySelector(".btn_dark")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}
btn_white.addEventListener("click", openModal)
openModalDark.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener("click", closeModal)


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const scrollHeight = document.body.scrollHeight
    if (scrollPosition >= scrollHeight) {
        openModal()
    }
})

closeModalBtn.onclick = () => closeModal()

modal.onclick = (event) => (event.target === modal ? closeModal() : false)