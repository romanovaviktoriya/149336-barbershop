	var enter = document.querySelector(".login");			/* Объявление переменных */
	var blind = document.querySelector(".blind");
    var modal_window = document.querySelector(".modal-window");
    var close_window = document.querySelector(".modal-window-close");
    var form = modal_window.querySelector("form");
    var login = modal_window.querySelector("[name=login]");
    var password = modal_window.querySelector("[name=password]");
	var storage = localStorage.getItem("login");

	enter.addEventListener("click", function(event) {	/* Клик по ссылке Вход */
	event.preventDefault();
	blind.classList.add("blind-show");
	modal_window.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
	});

	close_window.addEventListener("click", function(event) {	/* Клик по закрывающему крестику */
	event.preventDefault();
	modal_window.classList.remove("modal-show");
	blind.classList.remove("blind-show");
	});

	form.addEventListener("submit", function(event) {			/* Авторизация */
	if (!(login.value && password.value)) {
		event.preventDefault();
		modal_window.classList.remove("modal-error");
		modal_window.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
	});

	
	var modal_map = document.querySelector(".modal-content-map");
	var close_window_map = modal_map.querySelector(".modal-content-close");
	var open_map = document.getElementsByClassName("open-map");
	for (var i = 0; i < open_map.length; i++) 
	{
		open_map[i].addEventListener("click", function(event) {
		event.preventDefault();
		modal_map.classList.add("modal-show");
		});
	}
	
	close_window_map.addEventListener("click", function(event) {
	event.preventDefault();
	modal_map.classList.remove("modal-show");
	});