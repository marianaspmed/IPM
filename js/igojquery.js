
$(document).ready(function() {
// Adiciona a data e hora atual
//meses e dias da semana
var monthNames = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ]; 
var dayNames= ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
var  hours = new Date().getHours();
var minutes = new Date().getMinutes();

var newDate = new Date();

		$('#temp').html=10;
	

newDate.setDate(newDate.getDate());
// adiciona a data
$('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
// Cria um novo objeto para atualizar minuto a minuto
minutes = new Date().getMinutes();
// Atualiza os minutos
$("#Time").html(( hours < 10 ? "0" : "" ) + hours + ":" + ( minutes < 10 ? "0" : "" ) + minutes);
},1000);

setInterval( function() {
// Cria um novo objeto para atualizar hora a hora
hours = new Date().getHours();
// Atualiza a hora
$("#Time").html(( hours < 10 ? "0" : "" ) + hours + ":" + ( minutes < 10 ? "0" : "" ) + minutes);
}, 1000); 

});

//funcao para obter a meteorologia
$(document).ready(function() {
	
    var weather = [
    {
        "icon": "sunny.png",
        "weather": "Sol",
        "temp": "22"},
	{
        "icon": "cloudy.png",
        "weather": "Céu muito nublado",
        "temp": "19"},
	{
        "icon": "rainy.png",
        "weather": "Períodos de chuva",
        "temp": "16"},
    {
       "icon": "snow.png",
        "weather": "Neve",
        "temp": "0"}
		];
		
		// intervalor array da meteorologia
		var min = 0;
		var max=3;
		// valor aletorio

		var random = Math.floor(Math.random() * (max - min + 1)) + min;
		//altera a meteorologia no html
		$('img#imgm').attr('src', 'images/' + weather[random].icon);
		$('#meteo').text(weather[random].weather);
        $('#temp').text(weather[random].temp);
		
		// Passos entre 1000 e 30000
		min = 1;
		max = 30;
		random = Math.floor(Math.random() * ((max - min + 1) + min)*1000);
		if(random<10000)
			$('img#imgs').attr('src', 'images/walking.png');
		else if(random>=10000 && random<20000)
			$('img#imgs').attr('src', 'images/running.png');
			else
				$('img#imgs').attr('src', 'images/runningfast.png');
				
		$('#steps').text(random + " passos");
});