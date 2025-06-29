// 1. Search functionality
document.querySelector("button[type='button']").addEventListener("click", function() {
    const searchQuery = document.querySelector("input[type='text']").value.trim();
    if (searchQuery) {
        alert("Searching for: " + searchQuery);
        // Replace with actual search logic, e.g., redirect to search results page
    } else {
        alert("Please enter something to search.");
    }
});

// 2. Location Selector functionality
document.querySelector(".location-select select").addEventListener('change', function () {
    const selectedLocation = this.value;
    let locationName = '';
    switch (selectedLocation) {
        case 'location1':
            locationName = 'Mumbai';
            break;
        case 'location2':
            locationName = 'Bangalore';
            break;
        case 'location3':
            locationName = 'Gurugram';
            break;
        case 'location4':
            locationName = 'Delhi';
            break;
        case 'location5':
            locationName = 'Jaipur';
            break;
        case 'location6':
            locationName = 'Chandigarh';
            break;
        case 'location7':
            locationName = 'Kerala';
            break;
        default:
            locationName = 'Unknown Location';
    }
    alert("Selected Location: " + locationName);
    // You can use the location to filter items on your site or load content dynamically
});

// 3. Language Selector functionality
function changeLanguage() {
    const selectedLang = document.getElementById("language-selector").value;
    let langName = '';
    switch (selectedLang) {
        case 'en':
            langName = 'English';
            break;
        case 'es':
            langName = 'Hindi';
            break;
        case 'fr':
            langName = 'Tamil';
            break;
        default:
            langName = 'Unknown Language';
    }
    alert("Language changed to: " + langName);
    // You can load different language content by updating the page's text dynamically or redirecting to the corresponding language page
}

// 4. Newsletter Subscription functionality
document.getElementById('subscribe-button').addEventListener('click', function () {
    const email = document.getElementById('newsletter-email').value.trim();
    if (email) {
        alert("Thank you for subscribing with email: " + email);
        // Add logic to subscribe the user, e.g., save the email to a database
    } else {
        alert("Please enter a valid email address.");
    }
});
// Get the dropdown toggle button and the dropdown content
const toggleButton = document.getElementById('all-category-toggle');
const dropdownContent = document.getElementById('all-category-dropdown');

// Add event listener for toggle button click
toggleButton.addEventListener('click', function () {
    dropdownContent.classList.toggle('open');
});

// Close dropdown if clicking outside of it
document.addEventListener('click', function (event) {
    if (!toggleButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('open');
    }
});

// Toggle the Mega Menu
document.getElementById('all-category-toggle').addEventListener('click', function () {
    const megaMenu = this.closest('.mega-menu');
    megaMenu.classList.toggle('open'); 
});

// Get elements
//const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById("login-popup");
const signupPopup = document.getElementById("signup-popup");
const closeLoginPopup = document.getElementById("close-login-popup");
const closeSignupPopup = document.getElementById("close-signup-popup");
const openSignup = document.getElementById("open-signup");
const openLogin = document.getElementById("open-login");

// Event listeners
closeLoginPopup.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

// Show popup when login button is clicked
loginBtn.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
  });

closeSignupPopup.addEventListener("click", () => {
    signupPopup.style.display = "none";
});

openSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginPopup.style.display = "none";
    signupPopup.style.display = "block";
});

window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
      popupForm.style.display = 'none';
    }
  });




