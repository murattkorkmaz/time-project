function zamanF(){
	let zaman = document.querySelector("#zaman")
	const tarih=new Date();
	let gun=tarih.getDay();
	let gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
	let saat=tarih.getHours();
	let dakika=tarih.getMinutes();
	let saniye=tarih.getSeconds();
	let goster = `${saat}:${dakika}:${saniye} ${gunler[gun]}`
	zaman.innerHTML = `${goster}`
	setInterval(zamanF, 1000);
	

}


let username = prompt("Site anasayfasına erişebilmek için isminizi giriniz:");
let textInfo;
let info = document.querySelector("#info")


if(username.length>0)
{
    zamanF();
		info.innerHTML = `Merhaba, ${username}! Hoşgeldin!	 ` 
	  
}
else{
    alert('İsminizi giriniz')
    window.location = '/index.html'
    //info.innerHTML = "İsminizi girmek için sayfayı yenileyiniz"
}
console.log(textInfo);
