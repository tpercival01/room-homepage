const left_button = document.getElementById("left-button");
const right_button = document.getElementById("right-button");
let current = 0;

const top_image = document.getElementById("image-top");
const top_text_title = document.getElementById("top-text-title");
const top_text = document.getElementById("top-text");

right_button.addEventListener("click", () => {
  if (current < 2) {
    current += 1;
  }
  switch (current) {
    case 0:
      break;
    case 1:
      if (window.innerWidth > 375) {
        top_image.style.backgroundImage =
          "url('./images/desktop-image-hero-2.jpg')";
      } else {
        top_image.style.backgroundImage =
          "url('./images/mobile-image-hero-2.jpg')";
      }
      top_text_title.innerHTML = "We are available all across the globe";
      top_text.innerHTML =
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
      break;
    case 2:
      if (window.innerWidth > 375) {
        top_image.style.backgroundImage =
          "url('./images/desktop-image-hero-3.jpg')";
      } else {
        top_image.style.backgroundImage =
          "url('./images/mobile-image-hero-3.jpg')";
      }
      top_text_title.innerHTML = "Manufactured with the best materials";
      top_text.innerHTML =
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
      break;

    default:
      break;
  }
});

left_button.addEventListener("click", () => {
  if (current > 0) {
    current -= 1;
  }
  switch (current) {
    case 0:
      if (window.innerWidth > 375) {
        top_image.style.backgroundImage =
          "url('./images/desktop-image-hero-1.jpg')";
      } else {
        top_image.style.backgroundImage =
          "url('./images/mobile-image-hero-1.jpg')";
      }
      top_text_title.innerHTML = "Discover innovative ways to decorate";
      top_text.innerHTML =
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
      break;
    case 1:
      if (window.innerWidth > 375) {
        top_image.style.backgroundImage =
          "url('./images/desktop-image-hero-2.jpg')";
      } else {
        top_image.style.backgroundImage =
          "url('./images/mobile-image-hero-2.jpg')";
      }
      top_text_title.innerHTML = "We are available all across the globe";
      top_text.innerHTML =
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
      break;
    case 2:
      break;

    default:
      break;
  }
});

// open and close mobile nav menu

const open_nav_menu = document.getElementById("mobile-nav-menu-button-open");
const close_nav_menu = document.getElementById("mobile-nav-menu-button-close");
const mobile_nav = document.getElementById("mobile-nav-menu");

open_nav_menu.addEventListener("click", () => {
  if (mobile_nav.classList.contains("hidden")) {
    mobile_nav.classList.remove("hidden");
  }
});

close_nav_menu.addEventListener("click", () => {
  if (!mobile_nav.classList.contains("hidden")) {
    mobile_nav.classList.add("hidden");
  }
});
