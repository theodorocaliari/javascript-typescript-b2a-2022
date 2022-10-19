function getCurrentDate() {
  const date = new Date();
  const day = date.getDate();
  const weekDay = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const weekDayName = getWeekDayNamePtBR(weekDay);
  const monthName = getMonthNamePtBR(month);

  const currentDate = `${weekDayName}, ${day} de ${monthName} de ${year}`;

  return currentDate;
}

function numberTwoDigits(number) {
  return number >= 10 ? number : `0${number}`;
}

function getCurrentHour() {
  const date = new Date();
  const hour = numberTwoDigits(date.getHours());
  const min = numberTwoDigits(date.getMinutes());
  const sec = numberTwoDigits(date.getSeconds());

  const currentHour = `${hour}:${min}:${sec}`;

  return currentHour;
}

function getWeekDayNamePtBR(weekDayNumber) {
  const weekDayPtBr = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  if (weekDayNumber > 6) {
    return "???";
  }

  return weekDayPtBr[weekDayNumber];
}

function getMonthNamePtBR(monthNumber) {
  const monthsPtBr = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return monthsPtBr[monthNumber];
}

function init() {
  const showDate = document.querySelector(".dataAtual");
  const showHour = document.querySelector(".horaAtual");

  showDate.innerHTML = getCurrentDate().toLocaleLowerCase();
  showHour.innerHTML = getCurrentHour();
}

init();

function nativoJs() {
  const showDate = document.querySelector(".dataAtual");
  const data = new Date();
  let options = {
    dateStyle: "full",
    timeStyle: "short",
  };

  showDate.innerHTML = data.toLocaleString("pt-br", options);
}

//nativoJs();
