document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
});

const bannerItems = document.querySelectorAll('.banner__item');

function handleClick() {
  bannerItems.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
    else if (item === this) {
      item.classList.add('active');
    }
  });
}

bannerItems.forEach(item => {
  item.addEventListener('click', handleClick);
});


