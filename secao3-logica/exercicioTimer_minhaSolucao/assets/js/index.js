function init() {
  const timeVisor = document.querySelector(".timer-visor");
  const horasFront = timeVisor.querySelector("#horas");
  const minutosFront = timeVisor.querySelector("#minutos");
  const segundosFront = timeVisor.querySelector("#segundos");
  let intervalId = 0;
  let isPaused = true;
  let segundos = 0;
  let minutos = 0;
  let horas = 0;

  timeVisor.addEventListener("click", (e) => {
    //e.preventDefault();
    const start = e.target.id === "start";
    const stop = e.target.id === "stop";
    const reset = e.target.id === "reset";

    if (start) {
      isPaused = false;
      timeVisor.classList.remove("pausado");
      clearInterval(intervalId);
      timerStart();
    }

    if (stop) {
      isPaused = true;
      clearInterval(intervalId);
      timeVisor.classList.add("pausado");
    }

    if (reset) {
      timeVisor.classList.remove("pausado");
      clearInterval(intervalId);
      horasFront.innerHTML = twoDigits(0);
      minutosFront.innerHTML = twoDigits(0);
      segundosFront.innerHTML = twoDigits(0);
      segundos = 0;
      minutos = 0;
      horas = 0;
    }
  });

  function twoDigits(num) {
    return num >= 10 ? num : `0${num}`;
  }

  function timerStart() {
    intervalId = setInterval(() => {
      if (!isPaused) {
        if (segundos >= 60) {
          segundos = 0;
          minutos++;
        }
        if (minutos >= 60) {
          minutos = 0;
          horas++;
        }
        if (horas >= 24) {
          horas = 0;
          minutos = 0;
          segundos = 0;
        }

        horasFront.innerHTML = twoDigits(horas);
        minutosFront.innerHTML = twoDigits(minutos);
        segundosFront.innerHTML = twoDigits(segundos++);
      }
    }, 1000);
  }
}

init();
