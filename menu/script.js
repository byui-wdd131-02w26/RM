let currentLang = "en";

const menuItems = [
    {name:{en:"Margarita", al:"Margarita"}, desc:{en:"Tomato sauce, mozzarella", al:"Salcë domate, mocarela"}, price:"550 / 1000", cat:"pizza"},
    {name:{en:"Prosciutto", al:"Proshutë"}, desc:{en:"Ham, mozzarella", al:"Proshutë, mocarela"}, price:"650 / 1500", cat:"pizza"},
    {name:{en:"Capriciosa", al:"Kapriçoza"}, desc:{en:"Mushrooms, olives", al:"Kërpudha, ullinj"}, price:"750 / 1300", cat:"pizza"},
    {name:{en:"Diavola", al:"Djallëzore"}, desc:{en:"Spicy salami", al:"Sallam pikant"}, price:"800 / 1500", cat:"pizza"},

    {name:{en:"Prosciutto Sandwich", al:"Sanduiç Proshutë"}, desc:{en:"Ham + cheese", al:"Proshutë + djathë"}, price:"250L", cat:"sandwich"},
    {name:{en:"Tuna Sandwich", al:"Sanduiç Ton"}, desc:{en:"Tuna sandwich", al:"Sanduiç me ton"}, price:"300L", cat:"sandwich"},

    {name:{en:"Greek Salad", al:"Sallatë Greke"}, desc:{en:"Feta + olives", al:"Djathë + ullinj"}, price:"400L", cat:"salad"},
    {name:{en:"Tuna Salad", al:"Sallatë Ton"}, desc:{en:"Fresh tuna", al:"Ton i freskët"}, price:"400L", cat:"salad"},

    {name:{en:"Heineken", al:"Heineken"}, desc:{en:"Beer", al:"Birrë"}, price:"250L", cat:"drink"},
    {name:{en:"Coca Cola", al:"Coca Cola"}, desc:{en:"Soft drink", al:"Pije freskuese"}, price:"150L", cat:"drink"},

    {name:{en:"Big Plate", al:"Pjatë e Madhe"}, desc:{en:"Prosciutto & cheese", al:"Proshutë dhe djathë"}, price:"1500L", cat:"antipasta"}
];

const menu = document.getElementById("menu");

function displayItems(items) {
    menu.innerHTML = "";
    items.forEach(item => {
        menu.innerHTML += `
        <div class="card">
            <h3>${item.name[currentLang]}</h3>
            <p>${item.desc[currentLang]}</p>
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
        displayItems(menuItems.filter(item => item.cat === category));
    }
}

/* LANGUAGE TOGGLE */
document.getElementById("langBtn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "al" : "en";

    document.getElementById("langBtn").textContent = currentLang === "en" ? "AL" : "EN";

    document.querySelectorAll(".tabs button").forEach(btn => {
        btn.textContent = btn.dataset[currentLang];
    });

    displayItems(menuItems);
});

displayItems(menuItems);