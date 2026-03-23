const menuItems = [
    // PIZZA
    {name:"Margarita", desc:"Tomato sauce, mozzarella", price:"550 / 1000", cat:"pizza"},
    {name:"Prosciutto", desc:"Tomato sauce, mozzarella, ham", price:"650 / 1500", cat:"pizza"},
    {name:"Prosciutto Mushrooms", desc:"Mozzarella, mushrooms", price:"700 / 1300", cat:"pizza"},
    {name:"Salami", desc:"Mozzarella, salami", price:"650 / 1200", cat:"pizza"},
    {name:"Capriciosa", desc:"Mushrooms, olives", price:"750 / 1300", cat:"pizza"},
    {name:"Speciale", desc:"Mixed toppings", price:"800 / 1500", cat:"pizza"},
    {name:"4 Seasons", desc:"Mixed ingredients", price:"800 / 1500", cat:"pizza"},
    {name:"Mix", desc:"Mixed meats", price:"800 / 1500", cat:"pizza"},
    {name:"Diavola", desc:"Spicy salami", price:"800 / 1500", cat:"pizza"},
    {name:"Fruta Deti", desc:"Seafood", price:"900 / 1700", cat:"pizza"},
    {name:"City's Pizza", desc:"Special house pizza", price:"800 / 1500", cat:"pizza"},
    {name:"City's Classic", desc:"Classic toppings", price:"700 / 1500", cat:"pizza"},
    {name:"City's Light", desc:"Light version", price:"800 / 1500", cat:"pizza"},
    {name:"Philadelphia", desc:"Cream cheese", price:"700 / 1300", cat:"pizza"},
    {name:"4 Cheese", desc:"Cheese mix", price:"700 / 1300", cat:"pizza"},
    {name:"Napoli", desc:"Anchovies", price:"750 / 1300", cat:"pizza"},
    {name:"Tuna Mushroom", desc:"Tuna + mushrooms", price:"700 / 1300", cat:"pizza"},
    {name:"Kopenhagen", desc:"Bacon + ham", price:"700 / 1300", cat:"pizza"},
    {name:"Ani Pizza", desc:"Spicy ham", price:"700 / 1300", cat:"pizza"},

    // SANDWICH
    {name:"Gusta Sandwich", desc:"Custom", price:"300L", cat:"sandwich"},
    {name:"Prosciutto Sandwich", desc:"Ham + cheese", price:"250L", cat:"sandwich"},
    {name:"Milanez Sandwich", desc:"Chicken", price:"250L", cat:"sandwich"},
    {name:"Tuna Sandwich", desc:"Tuna", price:"300L", cat:"sandwich"},
    {name:"Crudo Sandwich", desc:"Raw meat", price:"300L", cat:"sandwich"},
    {name:"Spicy Sandwich", desc:"Spicy mix", price:"250L", cat:"sandwich"},
    {name:"City's Best", desc:"House sandwich", price:"300L", cat:"sandwich"},
    {name:"Village Sandwich", desc:"Veg mix", price:"250L", cat:"sandwich"},
    {name:"4 Cheese Sandwich", desc:"Cheese mix", price:"250L", cat:"sandwich"},

    // SALADS
    {name:"Rukola Salad", desc:"Greens", price:"400L", cat:"salad"},
    {name:"Tuna Salad", desc:"Tuna", price:"400L", cat:"salad"},
    {name:"Greek Salad", desc:"Feta + olives", price:"400L", cat:"salad"},
    {name:"Lettuce Salad", desc:"Fresh lettuce", price:"300L", cat:"salad"},

    // ANTIPASTA
    {name:"Big Plate", desc:"Prosciutto & cheese", price:"1500L", cat:"antipasta"},
    {name:"Medium Plate", desc:"Prosciutto & cheese", price:"1000L", cat:"antipasta"},
    {name:"Small Plate", desc:"Prosciutto & cheese", price:"700L", cat:"antipasta"},
    {name:"Seafood Friture", desc:"Fried seafood", price:"1100L", cat:"antipasta"},
    {name:"Squid", desc:"Fried squid", price:"1000L", cat:"antipasta"},
    {name:"French Fries", desc:"Fries", price:"200L", cat:"antipasta"},
    {name:"Baked Cheese", desc:"White cheese", price:"300L", cat:"antipasta"},

    // DRINKS
    {name:"Heineken", desc:"Beer", price:"250L", cat:"drink"},
    {name:"Peroni", desc:"Beer", price:"200L", cat:"drink"},
    {name:"Korça", desc:"Beer", price:"200L", cat:"drink"},
    {name:"Elbar", desc:"Beer", price:"200L", cat:"drink"},
    {name:"Vodka", desc:"Alcohol", price:"200L", cat:"drink"},
    {name:"Gin", desc:"Alcohol", price:"250L", cat:"drink"},
    {name:"Jack Daniels", desc:"Whiskey", price:"300L", cat:"drink"},
    {name:"Water", desc:"Natural", price:"70L", cat:"drink"},
    {name:"Coca Cola", desc:"Soft drink", price:"150L", cat:"drink"},
    {name:"Fanta", desc:"Soft drink", price:"150L", cat:"drink"},
];

const menu = document.getElementById("menu");

function displayItems(items) {
    menu.innerHTML = "";
    items.forEach(item => {
        menu.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="price">${item.price}</div>
        </div>`;
    });
}

function filterMenu(category) {
    document.querySelectorAll(".tabs button").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (category === "all") {
        displayItems(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.cat === category);
        displayItems(filtered);
    }
}

// load all items initially
displayItems(menuItems);