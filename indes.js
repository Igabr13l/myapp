function calculateDaysBetweenDates(begin, end) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const differenceInMilliseconds = endDate - beginDate;
  const days = Math.floor(differenceInMilliseconds / millisecondsPerDay);
  return days;
}
let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
}

function mandarMensaje() {
  console.log("Ha pasado 1 segundo.");
}
if (seconds > 0) {
  const intervalo = setInterval(() => {
    mandarMensaje;
  }, 1000)
  return () => clearInterval(intervalo);
}