var xhr = new  XMLHttpRequest();


xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',true);
xhr.send(null);
var data={};
xhr.onload = function(){
	data = JSON.parse(xhr.responseText).result.records;
	// console.log(data);
	firstgetdata("鼓山區");
};

var se = document.querySelector("#selectTown");
var hot = document.querySelectorAll(".hotTown input");
var title = document.querySelector('#title');
var list = document.querySelector('.list');

for (let i = 0; i < hot.length; i++) {
	hot[i].addEventListener('click',getdata,false);
}

se.addEventListener('change',getdata,false);

function getdata(e){
	console.log(e)
	let town = e.target.value;
	let array = [];
	let dataLen = data.length;
	let str='';

	for (var i = 0; i <dataLen ; i++) {
		if(town == data[i].Zone){
			str +=`<li>
					<div class="imgDiv">
						<img src="${data[i].Picture1}">
					</div>
					<ul>
						<li><img src="css/img/icons_clock.png">${data[i].Opentime}</li>
						<li><img src="css/img/icons_pin.png">${data[i].Add}</li>
						<li><img src="css/img/icons_phone.png">${data[i].Tel}</li>
						<li><img src="css/img/icons_tag.png">${data[i].Ticketinfo}</li>	
					</ul>
				</li>`
		};
	};
	title.innerHTML=town;
	list.innerHTML=str;
}

function firstgetdata(e){
	let town = e;
	let array = [];
	let dataLen = data.length;
	let str='';

	for (var i = 0; i <dataLen ; i++) {
		if(town == data[i].Zone){
			str +=`<li>
					<div class="imgDiv">
						<img src="${data[i].Picture1}">
					</div>
					<ul>
						<li><img src="css/img/icons_clock.png">${data[i].Opentime}</li>
						<li><img src="css/img/icons_pin.png">${data[i].Add}</li>
						<li><img src="css/img/icons_phone.png">${data[i].Tel}</li>
						<li><img src="css/img/icons_tag.png">${data[i].Ticketinfo}</li>	
					</ul>
				</li>`
		};
	};
	title.innerHTML=town;
	list.innerHTML=str;
}






