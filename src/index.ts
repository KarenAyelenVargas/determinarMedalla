let btnEnviar = document.getElementById("btnEnvi");
let puesto: number = 0;

btnEnviar.addEventListener("click", () => {
  let puesto: number = Number(dato.value);
  switch (puesto) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("Entregar medalla de plata");
      break;
    case 3:
      console.log("Entregar medalla de bronce");
      break;
    default:
      console.log("Entregar mención de participación");
  }
});
