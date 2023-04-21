const menu = [
    {
      id: 1,
      title: "Mecurial white with red nike",
      category: "SPORTS",
      price: 15.99,
      img: "./images/mqwr.JPG",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Mecurial white with black nike",
      category: "SPORTS",
      price: 13.99,
      img: "./images/mqw.JPG",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Lebron James 17s",
      category: "SPORTS",
      price: 6.99,
      img: "./images/l17b.JPG",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "White and Grey Jordans",
      category: "SPORTS",
      price: 20.99,
      img: "./images/gj.JPG",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "White Off-Road New Balance",
      category: "CASUAL",
      price: 22.99,
      img: "./images/cool.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Brown Classic Oxfords",
      category: "OFFICIAL",
      price: 18.99,
      img: "./images/brox.JPG",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Black Nike Mecurial",
      category: "SPORTS",
      price: 8.99,
      img: "./images/bmq.JPG",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "OFFICIAL",
      price: 12.99,
      img: "./images/blox.JPG",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Black Oxfords",
      category: "OFFICIAL",
      price: 16.99,
      img: "./images/blacox.JPG",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Classic Brown Dotted Oxfords",
        category: "OFFICIAL",
        price: 36.99,
        img: "./images/ablox.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "White and Green New Balance",
        category: "CASUAL",
        price: 36.99,
        img: "./images/nike1.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Nike Air Monarch",
        category: "CASUAL",
        price: 36.99,
        img: "./images/nike2.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Colorful Nike Dunks Low",
        category: "CASUAL",
        price: 36.99,
        img: "./images/nike3.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Nike Dunks Low",
        category: "CASUAL",
        price: 36.99,
        img: "./images/nkdklw.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Classic American Todds",
        category: "OFFICIAL",
        price: 36.99,
        img: "./images/ox.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Black with White dotted Oxfords",
        category: "OFFICIAL",
        price: 36.99,
        img: "./images/pattern.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Nike Phantom",
        category: "SPORTS",
        price: 36.99,
        img: "./images/phnk.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "White Yeezy Boost",
        category: "CASUAL",
        price: 36.99,
        img: "./images/ybw.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Collection Of Yeezy's",
        category: "COLLECTION",
        price: 36.99,
        img: "./images/yC.JPG",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];
//rendering data in your html
const section = document.querySelector('section');
const buttonDiv = document.querySelectorAll("header ul")[0]

const itemButton = document.getElementById('itemButton')
console.log(itemButton)
// const shader = document.getElementById('shader')
// 
// let parDess = document.getElementsByClassName('cartBut')[0]
// const shader = document.getElementById('shader')
// console.log(parDess.classList)
// parDess.addEventListener('click', ()=>{
//     shader.classList.toggle();
// })
// for(const parDes of parDess){
//     parDes.addEventListener('click', ()=>{
//         shader.classList.toggle('.shader1');
//     })
// }
// console.log(parDess)

//load items 
window.addEventListener('DOMContentLoaded', ()=>{
    displayItems(menu);
    
    //set categories
    displayButtons()
    // for (parDes in oarDess){
    //     parDes.addEventListener('click', ()=>{
    //         if(parDes.innerContent != 'DROP'){
    //             parDes.innerContent == 'DROP';
    //         }
    //     })
    // })
});

//display buttons
function displayButtons(
    ){
        const categories = menu.reduce((values, item)=>{
            if(!values.includes(item.category)){
                values.push(item.category)
            }
            return values;
        }, ['all']);
        let categoryButtons = categories.map((butt)=>{
            
            return `<li><button type="button" data-id=${butt}>${butt}</button></li>`;
        }).join("");
        buttonDiv.innerHTML = categoryButtons
        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn)=>{
            btn.addEventListener('click', (key)=>{
                const category= key.currentTarget.dataset.id;
                const menuCat = menu.filter((menuItem)=>{
                    if(menuItem.category===category){
                        return menuItem;
                    }
                });
                if(category==="all"){
                    displayItems(menu);
                }else{
                    displayItems(menuCat);
                }
            })
        })
    }
    
    
    
//filter

function displayItems(menuItems){
    
    let displayMenu = menuItems.map((item)=>{
        
        return `<article>
        <img class="image" src=${item.img} alt="">
        <div class="details">
        <h4 class="title">${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
        <div class='buyOpt'>
        <button id='itemButton'>Add to Cart</button>
        </div>
        </div>
    </article>`;
    })
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu
  }