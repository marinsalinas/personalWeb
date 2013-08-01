function lastMod(jsonDate)
{
	var x = lastNow(jsonDate);	
	console.log(x);
	Modif = new Date(x.toGMTString());
	console.log(Modif);
	Year = takeYear(Modif);
	Month = Modif.getMonth();
	Day = Modif.getDate();
	Mod = (Date.UTC(Year,Month,Day,0,0,0))/86400000;
	x = new Date();
	today = new Date(x.toGMTString());
	Year2 = takeYear(today);
	Month2 = today.getMonth();
	Day2 = today.getDate();
	now = (Date.UTC(Year2,Month2,Day2,0,0,0))/86400000;
	daysago = now - Mod;
	console.log("now: "+now);
	console.log("Mod: "+Mod);
	console.log("dayago: "+daysago);
	if (daysago < 0) return '';
	unit = 'dias';
	if (daysago > 730)
	{
		daysago = Math.floor(daysago/365);
		unit = 'años';
	}
	else if (daysago > 60)
	{
		daysago = Math.floor(daysago/30);
		unit = 'meses';
	}
	else if (daysago > 14)
	{
		daysago = Math.floor(daysago/7);
		unit = 'semanas'
	}
	var towrite = 'Última Actualización: ';
	if (daysago == 0) towrite += 'Hoy';
	else if (daysago == 1) towrite += 'Ayer';
	else towrite += 'hace ' + daysago + ' ' + unit;
	console.log(towrite);
	return towrite;
}


function takeYear(theDate)
{
	//console.log("entro a takeYear");
	x = theDate.getYear();
	var y = x % 100;
	y += (y < 38) ? 2000 : 1900;
	return y;
}

function lastNow(jsonDate){
	var hoy = new Date();
	var utcSec = Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate(), hoy.getHours(), hoy.getMinutes(), hoy.getSeconds());
	//var last = new Date(document.lastModified);
	var last = new Date(jsonDate);
	//console.log("hoy: "+hoy + " seg:"+hoy.getTime());
	var dif = hoy.getTime() - utcSec;
	var mod = new Date(last.getTime() - dif);
	//console.log(hoy.getTimezoneOffset()*600);
	return mod;
}

$(document).ready(function(){
	$.getJSON("./lm.php", function(result){
		var lm = lastNow(result);
		$('#slm').append(lastMod(result));
		$('#lm').append(lm);
		//console.log("result: "+result)
		//$('#lm').append(lm.getDate()+"/"+lm.getMonth()+"/"+lm.getFullYear()+" "+lm.getHours()+":"+lm.getMinutes()+":"+lm.getSeconds());
    	});

});