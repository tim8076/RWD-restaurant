
// 點擊漢堡選單 彈出選單
const menuBar = document.querySelector('.menu-toggle');

menuBar.addEventListener('click',function(){
      document.body.classList.toggle('menu-show');
});

// 菜單頁data
const data = [
   {
     class:"不敗漢堡系列",
     name:"經典漢堡套餐",
     english:"Class Hamberger Package",
     pic:"../images/menu-pic/hamberger/product_1.png",
     price:"$150"
   },
   {
      class: "不敗漢堡系列",
      name: "英俊香腸",
      english: "Handsome Sausage",
      pic: "../images/menu-pic/hamberger/product_2.png",
      price: "$1024"      
   },
   {
      class: "不敗漢堡系列",
      name: "漢堡兄弟",
      english: "Hamberger Brothers",
      pic: "../images/menu-pic/hamberger/product_3.png",
      price: "$792"      
   },
   {
      class: "不敗漢堡系列",
      name: "完美願望",
      english: "Drangon Ball Package",
      pic: "../images/menu-pic/hamberger/product_4.png",
      price: "$999.999"      
   },
   {
      class: "不敗漢堡系列",
      name: "潛艇堡",
      english: "Subway",
      pic: "../images/menu-pic/hamberger/hamberger2.png",
      price: "$600"      
   },
   {
      class: "只愛吃薯條",
      name: "大薯",
      english: " French fries Big",
      pic: "../images/menu-pic/fried/fried2.png",
      price: "$120"      
   },
   {
      class: "只愛吃薯條",
      name: "中薯",
      english: " French fries Small",
      pic: "../images/menu-pic/fried/fried1.png",
      price: "$60"      
   },
   {
      class: "飲料",
      name: "汽水飲料系列",
      english: "Soda",
      pic: "../images/menu-pic/dirnk/coke.png",
      price: "$30"      
   },
   {
      class: "飲料",
      name: "啤酒系列",
      english: "Beer",
      pic: "../images/menu-pic/dirnk/beer1.png",
      price: "$100"      
   }
]
// 菜單頁，點擊更換菜單 //

const menu = document.querySelector('.list-items');
const cards = document.querySelector('.cards');
const all = document.querySelector('.js-all');
let num = JSON.parse(localStorage.getItem('shopNumber')) || 0;//購物車數字，從0開始


//預設顯示全部菜單
function showMenu(){
      let str = '';
      for(let i=0;i<data.length;i++){
         str += `<div class="card">
                        <div class="img">
                              <img src="${data[i].pic}" alt="菜單">
                        </div>                   
                        <div class="txt">
                              <h4>${data[i].name}</h4>
                              <h5>${data[i].english}</h5>
                              <span>${data[i].price}</span>    
                              <a href="#" class="js-shopcart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>加入購物車</a>        
                        </div>
                        <i class="fa fa-heart-o heart" aria-hidden="true"></i>
                  </div>`            
      }
      cards.innerHTML = str;
}
showMenu();
// 點擊顯示指定菜單
menu.addEventListener('click',menuListShow,false);

function menuListShow(e){
   //點擊的是LI才顯示
   if(e.target.nodeName != 'LI'){
         return
   }else{ 
      const menuText = e.target.textContent;
      let str = '';
      for (let i = 0; i < data.length; i++) {
            if(menuText === data[i].class){
                  str += `<div class="card">
                        <div class="img">
                              <img src="${data[i].pic}" alt="菜單">
                        </div>                   
                        <div class="txt">
                              <h4>${data[i].name}</h4>
                              <h5>${data[i].english}</h5>
                              <span>${data[i].price}</span>    
                              <a href="#" class="js-shopcart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>加入購物車</a>        
                        </div>
                        <i class="fa fa-heart-o heart" aria-hidden="true"></i>
                  </div>`
            }    
      }
      cards.innerHTML = str;
      addShopCart();
   }
}
// 點擊全部，顯示全部
all.addEventListener('click',function(){
      showMenu();
      addShopCart();
});

// 點擊加入購物車，購物車顯示數字
function addShopCart(){
      const shopCart = document.querySelector('.ShopCartNumber');
      let addToShopCart = document.getElementsByClassName('js-shopcart');
      shopCart.textContent = num;
      for (let i = 0; i < addToShopCart.length; i++) {
            addToShopCart[i].addEventListener('click', function (e) {
                  e.preventDefault();
                  num++;
                  localStorage.setItem('shopNumber', JSON.stringify(num));
                  shopCart.textContent = num;
            })
      }
}
addShopCart();






