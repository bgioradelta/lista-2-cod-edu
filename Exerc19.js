// horário definidos diretamente (hora, minuto, segundo)
let horarios = [
  { hora: 9,  min: 5,  seg: 37 },
  { hora: 14, min: 45, seg: 8 },
  { hora: 23, min: 59, seg: 59 },
  { hora: 0,  min: 0,  seg: 11 },
  { hora: 7,  min: 8,  seg: 24 }
];

// função formatar com dois dígitos e ponto
function formatarHorario(hora, min, sec) {
  let hh = hora.toString().padStart(2, '0');
  let mm = min.toString().padStart(2, '0');
  let ss = sec.toString().padStart(2, '0');
  return `${hh}.${mm}.${ss}`;
}

// mostra os horários
console.log("Horários informados:");
horarios.forEach((horario, i) => {
  console.log(`Horário ${i + 1}: ${formatarHorario(horario.hora, horario.min, horario.seg)}`);
});
