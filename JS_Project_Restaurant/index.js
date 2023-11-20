const menu = [
    {
       id: 1,
       title: "buttermilk pancakes",
       category: "breakfast",
       price: 15.99,
       img: "./images/alinazik.jpg",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet neque quae, dolores assumenda accusantium error facere facilis maxime numquam eveniet dolorum asperiores officiis necessitatibus libero doloremque vel adipisci consectetur!"
    },
    {
        id: 2,
        title: "buttermilk pancakes",
        category: "shakes",
        price: 15.99,
        img: "./images/01.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet neque quae, dolores assumenda accusantium error facere facilis maxime numquam eveniet dolorum asperiores officiis necessitatibus libero doloremque vel adipisci consectetur!"
     },
     {
        id: 3,
        title: "eeee gggg",
        category: "lunch",
        price: 15.99,
        img: "./images/02.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet neque quae, dolores assumenda accusantium error facere facilis maxime numquam eveniet dolorum asperiores officiis necessitatibus libero doloremque vel adipisci consectetur!"
     },
     {
        id: 4,
        title: "yyyy kkkkk",
        category: "breakfast",
        price: 15.99,
        img: "./images/03.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet neque quae, dolores assumenda accusantium error facere facilis maxime numquam eveniet dolorum asperiores officiis necessitatibus libero doloremque vel adipisci consectetur!"
     },
     {
        id: 5,
        title: "qqqq gsddfg",
        category: "lunch",
        price: 15.99,
        img: "./images/04.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet neque quae, dolores assumenda accusantium error facere facilis maxime numquam eveniet dolorum asperiores officiis necessitatibus libero doloremque vel adipisci consectetur!"
     },
     {
        id: 6,
        title: "yyyyyyyyyy ııııııııııı",
        category: "dinner",
        price: 15.99,
        img: "./images/05.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet neque quae, dolores assumenda accusantium error facere facilis maxime numquam eveniet dolorum asperiores officiis necessitatibus libero doloremque vel adipisci consectetur!"
     },
     {
        id: 7,
        title: "eeeeeeeeeee",
        category: "lunch",
        price: 15.99,
        img: "./images/06.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet neque quae, dolores assumenda accusantium error facere facilis maxime numquam eveniet dolorum asperiores officiis necessitatibus libero doloremque vel adipisci consectetur!"
     },
]

window.addEventListener("DOMContentLoaded", function() { displayMenuItems(menu) });
window.addEventListener("DOMContentLoaded", function() { displayCategories() });

// // first version
// function displayMenuItems() {
//     let sectionContent = "";

//     menu.forEach( (item) => {
//         sectionContent += `<article class="menu-item">
//             <img src=${item.img} alt="menu item" class="photo">
//             <div class="item-info">
//                 <header>
//                     <h4>${item.title}</h4>
//                     <h4>$${item.price}</h4>
//                 </header>
//                 <p class="item-text">${item.desc}</p>
//             </div>
//         </article>
//         <hr>`;

//     });

//     document.querySelector(".section-center").innerHTML = sectionContent;
// }

// improved version:
function displayMenuItems(menuList) {
    let sectionContent = "";

    menuList.forEach( (item) => {
        sectionContent += `<article class="menu-item">
            <img src=${item.img} alt="menu item" class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4>$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>
        <hr>`;

    });

    document.querySelector(".section-center").innerHTML = sectionContent;
}

function displayCategories() {

    let categoryContent = `<button type="button" class="filter-button" data-id="all">all</button>`;


    // first method:
    // const categorySet = new Set();

    // menu.forEach( item => categorySet.add(item.category) );
    // console.log(categorySet);

    // categorySet.forEach( item => {
    //     categoryContent += `<button type="button" class="filter-button" data-id="${item}">${item}</button>`
    // });


    // anohter method:
    let categories = [];

    menu.forEach( item => {
        const foodIndex = categories.indexOf(item.category);
        if (foodIndex == -1) categories.push(item.category);
    });

    categories.forEach( category => {
        categoryContent += `<button type="button" class="filter-button" data-id="${category}">${category}</button>`
    });

    document.querySelector(".btn-container").innerHTML = categoryContent;


    const filterButtons = document.querySelectorAll(".filter-button");
    // console.log(filterButtons);

    filterButtons.forEach( button => {
        button.addEventListener("click", function(e) {
            // console.log(e.target);
            // console.log(e.target.getAttribute("data-id"));
            const selectedCategoryName = e.target.getAttribute("data-id");
            const filteredMenu = menu.filter( item => item.category == selectedCategoryName);
            console.log(filteredMenu);

            if (selectedCategoryName == "all") displayMenuItems(menu);
            else displayMenuItems(filteredMenu);
        });
    });

}
