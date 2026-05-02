const cartas = [
  { img: "img/IMG_3643%202.jpeg", texto: "Uma mudança está chegando." },
  { img: "img/IMG_3644%202.jpeg", texto: "Confie na sua intuição." },
  { img: "img/IMG_3645%202.jpeg", texto: "Algo precisa ser encerrado." },
  { img: "img/IMG_3646%202.jpeg", texto: "Uma oportunidade vai surgir." },
  { img: "img/IMG_3647%202.jpeg", texto: "Cuidado com decisões impulsivas." },
  { img: "img/IMG_3648%202.jpeg", texto: "Boas energias estão próximas." }
];

function rolar() {
  document.getElementById("tiragem").scrollIntoView({ behavior: "smooth" });
}

function tirarCarta() {
  const carta = cartas[Math.floor(Math.random() * cartas.length)];

  document.getElementById("imgCarta").src = carta.img;
  document.getElementById("textoCarta").innerText = carta.texto;
}

function enviar() {
  const pergunta = document.getElementById("inputPergunta").value;

  if (pergunta.trim() === "") {
    alert("Digite uma pergunta.");
    return;
  }

  window.open("https://instagram.com/direct/new/", "_blank");
}
