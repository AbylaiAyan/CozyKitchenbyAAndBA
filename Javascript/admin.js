$(function () {
    var operation = "C"; //"C"=Crear
    var selected_index = -1; // Индекс выбранного элемента в списке
    var tblPersons = localStorage.getItem("tblPersons"); //вернуть данные, хранящиеся
    tblPersons = JSON.parse(tblPersons);
    if (tblPersons === null) //если нет данных запустить пустой массив
        tblPersons = [];

    function Create() {
      //Get the values entered in the html and convert them to string
      var person = JSON.stringify({
         Nome: $("#Nome").val(),
          Telefone: $("#Telefone").val(),
          Email: $("#Email").val()
      });
      tblPersons.push(person);
      //Store localStorage data
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
      return true;
    }

    function Edit() {
      // Изменение выбранного элемента в таблице
      tblPersons[selected_index] = JSON.stringify({
          Nome: $("#Nome").val(),
          Telefone: $("#Telefone").val(),
          Email: $("#Email").val()
      });
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
      alert("The data has been edited"); 
      return true;
    }

    function Delete() {
      tblPersons.splice(selected_index, 1);
      localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    }

    function List() {
      $("#tblList").html("");
      $("#tblList").html(
              "<thead>" +
              "<tr>" +
              "<th>Name</th>" +
              "<th>Telephone</th>" +
              "<th>Email</th>" +
              "<th>Action</th>" +
              "</tr>" +
              "</thead>" +
              "<tbody>" +
              "</tbody>"
              );
      for (var i in tblPersons) {
          var per = JSON.parse(tblPersons[i]);
          $("#tblList tbody").append("<tr>" +
                  "<td>" + per.Nome + "</td>" +
                  "<td>" + per.Telefone + "</td>" +
                  "<td>" + per.Email + "</td>" +

                   "<td><img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537879/edit_n51oto.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537882/delete_ntuxjl.png' alt='Delete" + i + "' class='btnDelete'/></td>" +

                  "</tr>"
                  );
      }
    }

    $("#frmPerson").bind("submit", function () {
      if (operation === "C")
          return Create();
      else
          return Edit();
    });

    List();

    $(".btnEdit").bind("click", function () {
      operation = "E";
      selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
      var per = JSON.parse(tblPersons[selected_index]);
      $("#Nome").val(per.Nome);
      $("#Telefone").val(per.Telefone);
      $("#Email").val(per.Email);

    });

    $(".btnDelete").bind("click", function () {
      selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
      Delete();
      List();
    });
  });



//   ===============animation=================
$(function() {

    $('.pages').click(function(){
        $('.listfunc').animate({"height"  : 'toggle'}, 'fast' );
        });

});



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


    $(document).ready(function(){
        $('.admin__photo').click(function(){
          $('.acc').animate({"height"  : 'toggle'}, 'fast' );
          });

        $('.admin__photo2').click(function(){
        $('.acc2').animate({"height"  : 'toggle'}, 'fast' );
        });
      });
