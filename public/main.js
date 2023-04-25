const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const navbar = document.querySelector("header nav");
const hamburger_menu = document.querySelector(".hamburger-menu");
const links = document.querySelectorAll(".links a");
const icon = document.getElementsByClassName("sv")[0];

if (window.screen.width <= 850) {
  icon.classList.remove("animate__delay-2s");
  icon.classList.add("animate__delay-2s");
}

// Wrap every letter in a span
var textWrapper = document.querySelector(".header-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByTagName("nav")[0].style.top = "0";
  } else {
    document.getElementsByTagName("nav")[0].style.top = "-20vh";
  }
  prevScrollpos = currentScrollPos;
};

filter_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => {
      button.classList.remove("active");
      if (icon.style.backgroundImage == 'url("/img/svg/night-mode.svg")') {
        button.style.color = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--dark-one");
      } else {
        button.style.color = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--light-one");
      }
    });
    btn.classList.add("active");
    if (icon.style.backgroundImage == 'url("/img/svg/night-mode.svg")') {
      btn.style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--dark-one");
    } else {
      btn.style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--light-one");
    }

    let filterValue = btn.dataset.filter;
    $(".grid").isotope({ filter: filterValue });
  });
});

icon.addEventListener("click", () => {
  if (icon.style.backgroundImage == 'url("/img/svg/night-mode.svg")') {
    icon.style.backgroundImage = 'url("/img/svg/bright-mode.svg")';
    document.body.style.backgroundColor = "#3a4953";

    for (var i = 0; i < 2; i++) {
      document.getElementsByClassName("line")[i].style.backgroundColor =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--light-one"
        );
    }

    for (var i = 0; i < 9; i++) {
      document.getElementsByTagName("i")[i].style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--light-one");
    }

    document.getElementsByClassName("active")[0].style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--light-one");

    for (var i = 0; i < 10; i++) {
      if (i == 8) {
        continue;
      }
      document.getElementsByClassName("btn")[i].style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--light-one");
    }
    document.getElementsByClassName("header-title")[0].style.color =
      "rgb(200,255,255)";
    for (var i = 0; i < 6; i++) {
      document
        .getElementsByTagName("li")
        [i].getElementsByTagName("a")[0].style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--light-one");
    }

    for (var i = 0; i < 6; i++) {
      document.getElementsByClassName("title-sm")[i].style.color =
        "rgb(200,255,255)";
    }

    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("blog-text")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--light-one"
        );
    }

    for (var i = 2; i < 6; i++) {
      document.getElementsByClassName("review-text")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--light-one"
        );
      document.getElementsByClassName("review-name")[i].style.color =
        "rgb(200,255,255)";
    }

    for (var i = 0; i < 11; i++) {
      if (i == 6 || (i > 7 && i < 11)) {
        continue;
      }
      document.getElementsByClassName("text")[i].style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--light-one");
    }

    for (var i = 0; i < 11; i++) {
      document.getElementsByClassName("skill-title")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--light-one"
        );
    }

    for (var i = 0; i < 2; i++) {
      document.getElementsByClassName("record-circle")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--light-one"
        );
    }

    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("filter-btn")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--light-one"
        );
    }
    document.getElementsByClassName("active")[1].style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--light-one");
  } else {
    icon.style.backgroundImage = 'url("/img/svg/night-mode.svg")';
    document.body.style.backgroundColor = "white";

    for (var i = 0; i < 2; i++) {
      document.getElementsByClassName("line")[i].style.backgroundColor =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-one"
        );
    }

    for (var i = 0; i < 9; i++) {
      document.getElementsByTagName("i")[i].style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--dark-one");
    }

    document.getElementsByClassName("active")[0].style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--dark-one");

    for (var i = 0; i < 10; i++) {
      if (i == 8) {
        continue;
      }
      document.getElementsByClassName("btn")[i].style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--dark-one");
    }
    for (var i = 0; i < 6; i++) {
      if (window.screen.width > 850) {
        document
          .getElementsByTagName("li")
          [i].getElementsByTagName("a")[0].style.color = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--dark-one");
      }
    }
    document.getElementsByClassName("header-title")[0].style.color =
      getComputedStyle(document.documentElement).getPropertyValue("--dark-one");

    for (var i = 0; i < 6; i++) {
      document.getElementsByClassName("title-sm")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-one"
        );
    }

    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("blog-text")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-one"
        );
    }

    for (var i = 2; i < 6; i++) {
      document.getElementsByClassName("review-text")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-one"
        );
      document.getElementsByClassName("review-name")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-one"
        );
    }

    for (var i = 0; i < 11; i++) {
      if (i == 6 || (i > 7 && i < 11)) {
        continue;
      }
      document.getElementsByClassName("text")[i].style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--dark-one");
    }

    for (var i = 0; i < 11; i++) {
      document.getElementsByClassName("skill-title")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue("#555");
    }
    for (var i = 0; i < 2; i++) {
      document.getElementsByClassName("record-circle")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-one"
        );
    }

    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("filter-btn")[i].style.color =
        getComputedStyle(document.documentElement).getPropertyValue(
          "--dark-one"
        );
    }
    document.getElementsByClassName("active")[1].style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--dark-one");
  }
});

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

$(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (
    window.innerHeight >= rect.top + el.offsetHeight &&
    -rect.top < el.offsetHeight
  )
    return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => {
    skill.style.width = skill.dataset.progress;
  });
}

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let time = 100;
      const increment = Math.ceil(maxNum / time);
      if (currentNum < maxNum) {
        if (maxNum - currentNum > increment) {
          numb.innerText = currentNum + increment;
        } else {
          numb.innerText = maxNum;
        }
        setTimeout(updateCount, 10);
      }
    };
    setTimeout(updateCount, 400);
  });
}

const swiper = new Swiper(".swiper", {
  speed: 1000,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
