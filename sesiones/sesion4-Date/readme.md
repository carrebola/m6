# Trabajando con el objeto Date

 .getDay()	Devuelve el día de la semana: OJO: 0 Domingo, 6 Sábado.
 .getFullYear()	Devuelve el año con 4 cifras.
 .getMonth()	Devuelve la representación interna del mes. OJO: 0 Enero - 11 Diciembre.
 .getDate()	Devuelve el día del mes.
 .getHours()	Devuelve la hora. OJO: Formato militar; 23 en lugar de 11.
 .getMinutes()	Devuelve los minutos.
 .getSeconds()	Devuelve los segundos.
 .getMilliseconds()	Devuelve los milisegundos.
 .getTime()	Devuelve el UNIX Timestamp: segundos transcurridos desde 1/1/1970.
 .getTimezoneOffset()	Diferencia horaria (en min) de la hora local respecto a UTC (ver más adelante).

 const date = new Date("2018/01/30 15:30:10.999");

date.getDay();            // 2 (Martes)
date.getDate();           // 30
date.getMonth();          // 0 (Enero)
date.getFullYear();       // 2018
date.getHours();          // 15
date.getMinutes();        // 30
date.getSeconds();        // 10
date.getMilliseconds();   // 999
date.getTimezoneOffset(); // 0
date.getTime();           // 1517326210999 (Tiempo Unix)

 .setFullYear(year)	Altera el año de la fecha, cambiándolo por year. Formato de 4 dígitos.
 .setMonth(month)	Altera el mes de la fecha, cambiándolo por month. Ojo: 0-11 (Ene-Dic).
 .setDate(day)	Altera el día de la fecha, cambiándolo por day.
 .setHour(hour)	Altera la hora de la fecha, cambiándola por hour.
 .setMinutes(min)	Altera los minutos de la fecha, cambiándolos por min.
 .setSeconds(sec)	Altera los segundos de la fecha, cambiándolos por sec.
 .setMilliseconds(ms)	Altera los milisegundos de la fecha, cambiándolos por ms.

 const date = new Date("2018/01/30 15:30:10.999");

date.setDate(15);           // Cambia a 15/01/2018 15:30:10.999 (Devuelve 1516030210999)
date.setMonth(1);           // Cambia a 15/02/2018 15:30:10.999 (Devuelve 1518708610999)
date.setFullYear(2020);     // Cambia a 15/02/2020 15:30:10.999 (Devuelve 1581780610999)
date.setHours(21);          // Cambia a 15/02/2020 21:30:10.999 (Devuelve 1581802210999)
date.setMinutes(00);        // Cambia a 15/02/2020 21:00:10.999 (Devuelve 1581800410999)
date.setSeconds(3);         // Cambia a 15/02/2020 21:00:03.999 (Devuelve 1581800403999)
date.setMilliseconds(79);   // Cambia a 15/02/2020 21:00:03.079 (Devuelve 1581800403079)
date.setTime(872817240000); // Cambia a 29/08/1997 02:14:00.000 (Devuelve 872817240000)

 .setFullYear(y, m, d)	Altera el año, mes y día de una fecha.
 .setMonth(m, d)	Altera el mes y día de una fecha.
 .setHour(h, m, s, ms)	Altera la hora, minutos, segundos y milisegundos.
 .setMinutes(m, s, ms)	Altera los minutos, segundos y milisegundos.
 .setSeconds(s, ms)	Altera los segundos y milisegundos.
 .setTime(ts)	Establece una fecha a partir del tiempo Unix ts.


  .toDateString()	Devuelve formato sólo de fecha: Fri Aug 24 2018
 .toLocaleDateString()	Idem al anterior, pero en el formato regional actual: 24/8/2018
 .toTimeString()	Devuelve formato sólo de hora: 00:23:24 GMT+0100 ...
 .toLocaleTimeString()	Idem al anterior, pero en el formato regional actual: 0:26:37
 .toISOString()	Devuelve la fecha en el formato ISO 8601: 2018-08-23T23:27:29.380Z
 .toJSON()	Idem al anterior, pero asegurándose que será compatible con JSON.
 .toUTCString()	Devuelve la fecha, utilizando UTC (ver más adelante).