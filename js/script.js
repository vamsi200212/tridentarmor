function onScroll(){
    var scroll = window.scrollY;
    var navBar = document.getElementById("navbar");
    // var logo = document.getElementById("logo");
    if(scroll<150){
        // logo.innerHTML = '<img src="/images/Logo_Trident.png" alt="" height="100px">';
        navBar.classList.remove("navBgColor");
        navBar.classList.add("out-transition");
        navBar.classList.add("in-transition");
        navBar.style.boxShadow = "none";
        
    }else{
        // logo.innerHTML = '<img src="/images/Logo_Trident.png" alt="" height="100px">';
        navBar.classList.add("navBgColor");
        navBar.classList.add("in-transition");
        navBar.classList.remove("out-transition");
        navBar.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
    }
}

window.addEventListener('scroll',onScroll);




// SLIDER CONTENT
const autoSlideInterval = 5000; // 5 seconds

let autoSlideIntervalId;

// Function to start auto-sliding
function startAutoSlide() {
    autoSlideIntervalId = setInterval(() => {
        i = (i + 1) % j; // Auto-slide for food items // Auto-slide for events
        display_item();
    }, autoSlideInterval);
}

// Function to stop auto-sliding
function stopAutoSlide() {
    clearInterval(autoSlideIntervalId);
}

// Call startAutoSlide initially to begin auto-sliding
// startAutoSlide();

const products = [
    {
        name: "ESP32 Module",
        price: "Rs. 2000",
        description: "The ESP32 is a versatile and widely used microcontroller and system-on-chip (SoC) designed by Espressif Systems. It is part of the ESP (Espressif Systems Platform) family, known for its low-cost, low-power consumption, and high-performance capabilities. The ESP32 is particularly popular in the field of embedded systems, Internet of Things (IoT), and wireless communication applications.",
        image: "/images/esp32.jpg"
    },
    {
        name: "Arduino Uno",
        price: "Rs. 1,899",
        description: "The ESP32 is a versatile and widely used microcontroller and system-on-chip (SoC) designed by Espressif Systems. It is part of the ESP (Espressif Systems Platform) family, known for its low-cost, low-power consumption, and high-performance capabilities. The ESP32 is particularly popular in the field of embedded systems, Internet of Things (IoT), and wireless communication applications.",
        image: "/images/arduino.jpg"
    },
    {
        name: "Squadron E88 PRO Drone",
        price: "Rs. 3,990",
        description: "The ESP32 is a versatile and widely used microcontroller and system-on-chip (SoC) designed by Espressif Systems. It is part of the ESP (Espressif Systems Platform) family, known for its low-cost, low-power consumption, and high-performance capabilities. The ESP32 is particularly popular in the field of embedded systems, Internet of Things (IoT), and wireless communication applications.",
        image: "/images/drone.jpg"
    }
];

//Current Slide
let i = 0;
let j = products.length;
let item_container = document.getElementById("card");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// Event listeners for previous and next buttons
nextBtn.addEventListener("click", () => {
    stopAutoSlide(); // Stop auto-slide when the user interacts with buttons
    i = (i + 1) % j;
    display_item();
    startAutoSlide(); // Restart auto-slide
});

prevBtn.addEventListener("click", () => {
    stopAutoSlide(); // Stop auto-slide when the user interacts with buttons
    i = (i - 1 + j) % j;
    display_item();
    startAutoSlide(); // Restart auto-slide
});

let display_item = () => {
    item_container.innerHTML = `
        <div class="product-image" style="background-image: url(${products[i].image}); background-position: center; background-repeat: no-repeat; background-size: cover;"></div>
        <div class="product-details">
            <div class="product-nameprice">
                <p class="product-name">${products[i].name}</p>
                <p class="product-price">${products[i].price}</p>
                <div class="product-divider"></div>
                <div class="product-description">${products[i].description}</div>
            </div>
            <div class="buy-now">
                Buy Now
            </div>
        </div>
    `;
};

window.onload = () => {
  display_item(); // Load the first item // Load the first event
  startAutoSlide(); // Start auto-slide
};


// Explore products

function redirect(url){
    window.location.href = url;
}


// navBar
function navBar(){
    var navList = document.querySelector('.nav-bar ul');
    navList.classList.toggle('show');

    // var navContainer = document.getElementById('navbar');
    // navContainer.classList.toggle('navBgColor');
}