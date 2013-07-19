function lastMod()
{
	var x = new Date (document.lastModified);
	Modif = new Date(x.toGMTString());
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
	if (daysago < 0) return '';
	unit = 'days';
	if (daysago > 730)
	{
		daysago = Math.floor(daysago/365);
		unit = 'years';
	}
	else if (daysago > 60)
	{
		daysago = Math.floor(daysago/30);
		unit = 'months';
	}
	else if (daysago > 14)
	{
		daysago = Math.floor(daysago/7);
		unit = 'weeks'
	}
	var towrite = 'Última Actualización: ';
	if (daysago == 0) towrite += 'Hoy';
	else if (daysago == 1) towrite += 'Ayer';
	else towrite += 'hace ' + daysago + ' ' + unit;
	return towrite;
}


function takeYear(theDate)
{
	x = theDate.getYear();
	var y = x % 100;
	y += (y < 38) ? 2000 : 1900;
	return y;
}