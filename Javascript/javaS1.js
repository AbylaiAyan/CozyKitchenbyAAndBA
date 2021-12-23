let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.valid');
let formClose = document.querySelector('#form-close');
let navbar = document.querySelector('.header__nav_list-div');

window.onscroll = () =>{

    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


function store(){
	var fname = document.getElementById('fname');
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
	var checkemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;





	if(fname.value.length == 0){
        error(fname, 'Please fill in fullname');
    }else{
		success(fname);
	}


    if(name.value.length == 0){
        error(name, 'Please fill in email');
    }else if(!name.value.match(checkemail)){
        error(name, 'Not a valid email');
    }else{
		success(name);
	}



	if(pw.value.length == 0){
        error(pw, 'Please fill in password');
    }
	else if(!pw.value.match(numbers) || !pw.value.match(upperCaseLetters) || !pw.value.match(lowerCaseLetters) || pw.value.length < 8){
        error(pw, 'Password must contain at least 8 characters, including UPPER/lowercase and numbers');

    }else{
		success(pw);
	}

	if(pw.value.match(numbers) && pw.value.match(upperCaseLetters) && pw.value.match(lowerCaseLetters) && pw.value.length >= 8 && name.value.match(checkemail) && fname.value.length !== 0){
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('fname', fname.value);
        alert('Your account have been created');
        location.href = "index.html";
    }

    showData();
}



function showData() {
    document.getElementById("showUsers").innerHTML="admin.html";
    // tblPersons = localStorage.setItem('name',)
    //   $("#tblList").html("");
    //   $("#tblList").html(
    //           "<thead>" +
    //           "<tr>" +
    //           "<th>Name</th>" +
    //           "<th>Email</th>" +
    //           "<th>Password</th>" +
    //           "<th>Action</th>" +
    //           "</tr>" +
    //           "</thead>" +
    //           "<tbody>" +
    //           "</tbody>"
    //           );
    //   for (var i in tblPersons) {
    //       $("#tblList tbody").append("<tr>" +
    //               "<td>" + localStorage.getItem('name') + "</td>" +
    //               "<td>" + localStorage.getItem('email') + "</td>" +
    //               "<td>" + localStorage.getItem('pw') + "</td>" +

    //                "<td><img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537879/edit_n51oto.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537882/delete_ntuxjl.png' alt='Delete" + i + "' class='btnDelete'/></td>" +

    //               "</tr>"
    //               );
    //   }

    }

function error(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'formval error';
	small.innerText = message;
}

function success(input) {
	const formControl = input.parentElement;
	formControl.className = 'formval success';
}



//checking


function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById('rememberMe');



    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else if(userName.value == 'admin@mail.ru' && userPw.value == 'Admin007'){
        alert('Hello admin!');
        location.href = "admin.html";
    }

    else{
        alert('Error on login');
    }


}



// ====================MAPS====================

function init() {
	let map = new ymaps.Map('map-test', {
		center: [43.234836128455775,76.91006249999992],
		zoom: 17
	});

    let placemark = new ymaps.Placemark([43.234836128455775,76.91006249999992], {

        balloonContentHeader: 'International Information Technology University',
		balloonContentBody: 'ул. Манаса, 34А, Алматы, Казахстан',
		balloonContentFooter: 'Contact: 8-777-777-77-77',
    }, {
		iconLayout: 'default#image',
		iconImageHref: 'https://image.flaticon.com/icons/png/512/64/64113.png',
		iconImageSize: [35, 35],
		iconImageOffset: [-28, -64]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);

}

ymaps.ready(init);
