// 1) Используя регулярные выражения необходимо сделать поле для ввода
// эл почты и пароля

const emailInput = document.querySelector('#email')
const passInput = document.querySelector('#pass')
const outputBlock = document.querySelector('.result')
const resChecker = document.querySelector('.okNotOk')

emailInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
      const text = document.createElement('p')
      const regExp = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;

      text.innerText = emailInput.value
      text.setAttribute('class', 'text')
      outputBlock.append(text)

      if (regExp.test(emailInput.value)) {
        console.log("true");
        resChecker.innerText = "OK";
        resChecker.style.color = "green";
      }else {
      console.log("false");
      resChecker.innerText = "it's bad :(";
      resChecker.style.color = "red";
      }
      }
})

passInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
      const regExp = /\w/g;

      alert(passInput.value.replace(regExp, "*"));
      }
})



// 2) используя рекурсию необходимо заставить блок двигаться по странице

const block = document.querySelector('.ChinaLore')
const cube = document.querySelector('#cube')

let posX = 0;
let posY = 0;

const action = () => {
  if (posX <= 450) {
    posX ++;
    cube.style.left = `${posX}px`;
    action()
  }
}