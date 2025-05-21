const prompt = require("prompt-sync")()

const hoteis = []
const reservas = []
let proximoIdHotel = 1
let proximoIdReserva = 1

function adicionarHotel() {
  const nome = prompt("Nome do hotel: ")
  const cidade = prompt("Cidade: ")
  const quartosTotais = parseInt(prompt("Número total de quartos: "))
  hoteis.push({
    id: proximoIdHotel++,
    nome,
    cidade,
    quartosTotais,
    quartosDisponiveis: quartosTotais,
    avaliacoes: []
  });
  console.log("✅ Hotel adicionado com sucesso!")
}

function buscarHoteisPorCidade() {
  const cidade = prompt("Digite a cidade: ")
  const encontrados = hoteis.filter(h => h.cidade.toLowerCase() === cidade.toLowerCase())
  console.log("📍 Hotéis encontrados:")
  encontrados.forEach(h => {
    console.log(`ID: ${h.id} | Nome: ${h.nome} | Quartos disponíveis: ${h.quartosDisponiveis}`)
  });
}

function fazerReserva() {
  const idHotel = parseInt(prompt("ID do hotel: "))
  const nomeCliente = prompt("Nome do cliente: ")
  const hotel = hoteis.find(h => h.id === idHotel)
  if (!hotel) return console.log("❌ Hotel não encontrado.")
  if (hotel.quartosDisponiveis <= 0) return console.log("❌ Sem quartos disponíveis.")

  hotel.quartosDisponiveis--
  reservas.push({
    idReserva: proximoIdReserva++,
    idHotel,
    nomeCliente
  });
  console.log("✅ Reserva feita com sucesso!")
}

function cancelarReserva() {
  const idReserva = parseInt(prompt("ID da reserva a cancelar: "))
  const index = reservas.findIndex(r => r.idReserva === idReserva)
  if (index === -1) return console.log("❌ Reserva não encontrada.")

  const reserva = reservas[index]
  const hotel = hoteis.find(h => h.id === reserva.idHotel)
  if (hotel) hotel.quartosDisponiveis++
  reservas.splice(index, 1)
  console.log("✅ Reserva cancelada com sucesso.")
}

function listarReservas() {
  console.log("📋 Reservas:")
  reservas.forEach(r => {
    const hotel = hoteis.find(h => h.id === r.idHotel);
    console.log(`#${r.idReserva} | Cliente: ${r.nomeCliente} | Hotel: ${hotel.nome} | Cidade: ${hotel.cidade}`)
  })
}

function menu() {
  let opcao
  do {
    console.log("\n=== Sistema de Reservas ===")
    console.log("1. Adicionar hotel")
    console.log("2. Buscar hotéis por cidade")
    console.log("3. Fazer reserva")
    console.log("4. Cancelar reserva")
    console.log("5. Listar reservas")
    console.log("0. Sair")

    opcao = prompt("Escolha uma opção: ")

    switch (opcao) {
      case "1":
        adicionarHotel()
        break;
      case "2":
        buscarHoteisPorCidade()
        break;
      case "3":
        fazerReserva()
        break;
      case "4":
        cancelarReserva()
        break;
      case "5":
        listarReservas()
        break;
      case "0":
        console.log("👋 Encerrando o sistema...")
        break;
      default:
        console.log("❌ Opção inválida!")
    }
  } while (opcao !== "0")
}

menu()
