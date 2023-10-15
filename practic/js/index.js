const resetBtn = document.querySelector(".header__mobile-info__btn-reset");
const searchInput = document.querySelector(".header__mobile-info__input");
const openBtn = document.querySelector(".header__mobile-filter");
const filter = document.querySelector(".filter");
const main = document.querySelector(".content");

resetBtn.addEventListener("click", () => {
	if (searchInput.value) {
		searchInput.value = "";
	}
});

openBtn.addEventListener("click", () => {
	openBtn.classList.toggle("header__mobile-filter__open");
	filter.classList.toggle("filter__open");
	main.classList.toggle("content__open");
});
