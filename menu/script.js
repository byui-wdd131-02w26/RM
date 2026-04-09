let currentLang = "en";

const menuItems = [
    {
        name: { en: "Margarita", al: "Margarita" },
        desc: { en: "Tomato sauce, mozzarella", al: "Salcë domate, mocarela" },
        price: "550 / 1000",
        cat: "pizza",
        image: "images/margarita.jpeg"
    },
    {
        name: { en: "Prosciutto", al: "Proshutë" },
        desc: { en: "Ham, mozzarella", al: "Proshutë, mocarela" },
        price: "650 / 1500",
        cat: "pizza",
        image: "images/proshut.jpeg"
    },
    {
        name: { en: "Capriciosa", al: "Kapriçoza" },
        desc: { en: "Mushrooms, olives", al: "Kërpudha, ullinj" },
        price: "750 / 1300",
        cat: "pizza",
        image: "images/kapricos.jpeg"
    },
    {
        name: { en: "Diavola", al: "Djallëzore" },
        desc: { en: "Spicy salami", al: "Sallam pikant" },
        price: "800 / 1500",
        cat: "pizza",
        image: "images/diavola (1).jpeg"
    },

    {
        name: { en: "Prosciutto Sandwich", al: "Sanduiç Proshutë" },
        desc: { en: "Ham + cheese", al: "Proshutë + djathë" },
        price: "250L",
        cat: "sandwich",
        image: "images/sanprosh.jpeg"
    },
    {
        name: { en: "Tuna Sandwich", al: "Sanduiç Ton" },
        desc: { en: "Tuna sandwich", al: "Sanduiç me ton" },
        price: "300L",
        cat: "sandwich",
        image: "images/santono.jpeg"
    },

    {
        name: { en: "Greek Salad", al: "Sallatë Greke" },
        desc: { en: "Feta + olives", al: "Djathë + ullinj" },
        price: "400L",
        cat: "salad",
        image: "images/sallfsha.jpeg"
    },
    {
        name: { en: "Tuna Salad", al: "Sallatë Ton" },
        desc: { en: "Fresh tuna", al: "Ton i freskët" },
        price: "400L",
        cat: "salad",
        image: "images/salltono.jpeg"
    },

   
    {
        name: { en: "Coca Cola", al: "Coca Cola" },
        desc: { en: "Soft drink", al: "Pije freskuese" },
        price: "150L",
        cat: "drink",
        image: "images/Coca.jpeg"
    },

    {
        name: { en: "Big Plate", al: "Pjatë e Madhe" },
        desc: { en: "Prosciutto & cheese", al: "Proshutë dhe djathë" },
        price: "1500L",
        cat: "antipasta",
        image: "images/antipast.jpeg"
    }
];

const menu = document.getElementById("menu");
const productImage = document.getElementById("product-image");

function displayItems(items) {
    menu.innerHTML = "";

    items.forEach(item => {
        menu.innerHTML += `
        <div class="card" onclick="showProductImage('${item.image}', '${item.name[currentLang]}')">
            <h3>${item.name[currentLang]}</h3>
            <p>${item.desc[currentLang]}</p>
            <div class="price">${item.price}</div>
        </div>`;
    });
}

function filterMenu(category, event) {
    document.querySelectorAll(".tabs button").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (category === "all") {
        displayItems(menuItems);
    } else {
        displayItems(menuItems.filter(item => item.cat === category));
    }
}

document.getElementById("langBtn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "al" : "en";

    document.getElementById("langBtn").textContent = currentLang === "en" ? "AL" : "EN";

    document.querySelectorAll(".tabs button").forEach(btn => {
        btn.textContent = btn.dataset[currentLang];
    });

    displayItems(menuItems);
});

function showProductImage(imagePath, altText) {
    productImage.src = imagePath;
    productImage.alt = altText;
    productImage.style.display = "block";
}

displayItems(menuItems);