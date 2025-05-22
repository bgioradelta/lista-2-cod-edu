const prompt = require("prompt-sync")()

const hoteis = [
  {
    id: 1,
    nome: "Hotel Fasano",
    cidade: "São Paulo",
    quartosTotais: 800,
    quartosDisponiveis: 800,
    avaliacoes: []
  },
  {
    id: 2,
    nome: "Copacabana Palace",
    cidade: "Rio de Janeiro",
    quartosTotais: 500,
    quartosDisponiveis: 500,
    avaliacoes: []
  },
  {
    id: 3,
    nome: "Hotel Laghetto",
    cidade: "Porto Alegre",
    quartosTotais: 400,
    quartosDisponiveis: 400,
    avaliacoes: []
  }
]

const reservas = []
let proximoIdHotel = 4
let proximoIdReserva = 1

function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function lerNumero(mensagem) {
  const valor = parseInt(prompt(mensagem))
  return isNaN(valor) ? null : valor
}

function adicionarHotel() {
  const nome = prompt("Nome do hotel: ")
  const cidade = prompt("Cidade: ")
  const quartosTotais = lerNumero("Número total de quartos: ")
  if (!nome || !cidade || quartosTotais === null || quartosTotais <= 0) {
    console.log("Dados inválidos. Tente novamente.")
    return
  }

  hoteis.push({
    id: proximoIdHotel++,
    nome,
    cidade,
    quartosTotais,
    quartosDisponiveis: quartosTotais,
    avaliacoes: []
  })

  console.log("Hotel adicionado com sucesso")
}

function buscarHoteisPorCidade() {
  const cidade = prompt("Digite a cidade: ")
  const encontrados = hoteis.filter(h =>
    removerAcentos(h.cidade.toLowerCase()) === removerAcentos(cidade.toLowerCase())
  )

  if (encontrados.length === 0) {
    console.log("Nenhum hotel encontrado")
    return
  }

  console.log("Hotéis encontrados:")
  encontrados.forEach(h => {
    console.log(`ID: ${h.id} | Nome: ${h.nome} | Quartos disponíveis: ${h.quartosDisponiveis}`)
  })
}

function fazerReserva() {
  if (hoteis.length === 0) {
    console.log("Nenhum hotel disponível")
    return
  }

  console.log("Hotéis disponíveis:")
  hoteis.forEach(h => {
    console.log(`ID: ${h.id} | ${h.nome} (${h.cidade}) | Disponíveis: ${h.quartosDisponiveis}`)
  })

  const idHotel = lerNumero("ID do hotel desejado: ")
  const hotel = hoteis.find(h => h.id === idHotel)
  if (!hotel) return console.log("Hotel não encontrado")
  if (hotel.quartosDisponiveis <= 0) return console.log("Sem quartos disponíveis")

  const nomeCliente = prompt("Nome do cliente: ")
  hotel.quartosDisponiveis--
  reservas.push({
    idReserva: proximoIdReserva++,
    idHotel,
    nomeCliente
  })
  console.log("Reserva feita com sucesso")
}

function cancelarReserva() {
  if (reservas.length === 0) {
    console.log("Nenhuma reserva cadastrada")
    return
  }

  listarReservas()
  const idReserva = lerNumero("Digite o ID da reserva a cancelar: ")
  const index = reservas.findIndex(r => r.idReserva === idReserva)
  if (index === -1) return console.log("Reserva não encontrada")

  const reserva = reservas[index]
  const hotel = hoteis.find(h => h.id === reserva.idHotel)
  if (hotel) hotel.quartosDisponiveis++

  reservas.splice(index, 1)
  console.log("Reserva cancelada com sucesso")
}

function listarReservas() {
  if (reservas.length === 0) {
    console.log("Nenhuma reserva cadastrada")
    return
  }

  console.log("Reservas:")
  reservas.forEach(r => {
    const hotel = hoteis.find(h => h.id === r.idHotel)
    console.log(`#${r.idReserva} | Cliente: ${r.nomeCliente} | Hotel: ${hotel?.nome} (${hotel?.cidade})`)
  })
}

function menu() {
  let opcao
  do {
    console.log("\nSistema de Reservas")
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
        break
      case "2":
        buscarHoteisPorCidade()
        break
      case "3":
        fazerReserva()
        break
      case "4":
        cancelarReserva()
        break
      case "5":
        listarReservas()
        break
      case "0":
        console.log("Encerrando o sistema...")
        break
      default:
        console.log("Opção inválida")
    }
  } while (opcao !== "0")
}

menu()