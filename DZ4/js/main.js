const button = document.querySelector(".veryCoolBtn")

button.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET","json/data.json");
  request.setRequestHeader("Content-Type","application/json");
  request.send();

  document.querySelector(".productCard").style = "display: block;"

  request.onload = () => {
    const data = JSON.parse(request.response);

    document.querySelector(".productName").innerHTML = data.cards.product1.name;
    document.querySelector(".productPrice").innerHTML = data.cards.product1.price;
    document.querySelector(".productReviews").innerHTML = `Отзывов: ${data.cards.product1.reviews}`;
    document.querySelector(".productPurchases").innerHTML = `${data.cards.product1.purchases} купили`;
    document.querySelector(".imageBlock").style = `background-image: url(${data.cards.product1.image});`;
  }
}