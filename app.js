let menuList = document.querySelector('#menuList')
let itemsCount = document.querySelector('#itemsCount')
let summa = document.querySelector('#summa')
let orderList = document.querySelector('#orderList')



function createMenu( product ) {  //верстка тех 6 данных(basket.js)
  return  `
                     <div class="foodCard" onclick="clickMenu(event)" data-product='${JSON.stringify(product)}'>
                <img src="${product.img}" class="foodImg">
                    <div>
                        <div> ${product.title} </div>
                        <div> ${product.price} som </div>
                    </div>
                </div>
    `
}

function renderMenu( menu ) {
    let items = []
    menu.map( (el) => {
        items.push( createMenu(el) )
    })
    menuList.innerHTML = items.join(' ')
}


function clickMenu(event) {
    let card = JSON.parse(event.currentTarget.dataset.product)
    let index = basketTwo.findIndex( el => el.id == card.id )
    if( index == -1 ) {
        basketTwo.push( {...card, count: 1} )
    }
    else {
        basketTwo[index].count ++
        basketTwo[index].price += card.price
    }
      orderMenu(basketTwo) 
      summaMenu() 
      countMenu()
}

  
  function priceMenu(pro) {
    return `
      <li> 
        <div>${pro.title}</div>
        <div>${pro.price}</div>
        <div>${pro.count}</div>
        <div onclick='deleteMenu(event)' > x </div>
      </li>
    `;

  }
  
  function orderMenu( men ) {
    let item = []
    men.map( (el) => {
        item.push( priceMenu(el) )
    })
    orderList.innerHTML = item.join(' ')
}

const deleteMenu = (event) => {

  let item = JSON.parse(event.currentTarget.dataset.order)
  let index = basket.findIndex(el => el.id == item.id)
  let priceMenu = menuItems.find(el => el.id == item.id).price

  if (item.count > 1) {
    basket[index].count --
    basket[index].price == priceMenu
    renderMenu(basket)
  } else {
  basket.splice(index, 1)
  renderMenu.apply(basket)
  } 
   event.target.parentNode.remove()
}

function summaMenu() {
 summa.innerHTML = basketTwo.reduce( (el, {price}) => el + price, 0)
}

function countMenu() {
 itemsCount.innerHTML = basketTwo.reduce( (el, {count}) => el + count, 0)
}
  
  renderMenu(menuItems);

















  // function deleteMenu(event) {
  //   // Парсим ID родительского элемента, который содержит индекс
  //   let index = JSON.parse(event.target.parentNode.id); 
  
  //   if (index > -1) { // Проверка, что индекс валиден (больше -1)
  //     // Удаляем элемент из массива basketTwo
  //     basketTwo.splice(index, 1);
  //   } else {
  //     // Если элемент существует, уменьшаем count и вычитаем цену из price
  //     basketTwo[index].count--;
  //     basketTwo[index].price -= card.price;
  //   }
  
  //   // Удаляем элемент из DOM
  //   event.target.parentNode.remove();
  // }
  