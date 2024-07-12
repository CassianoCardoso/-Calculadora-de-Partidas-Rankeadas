let CalculoDeVitorias = Resultado(105, 37)

console.log(
  `O Herói tem um saldo de vitorias de "${CalculoDeVitorias}" , e o mesmo está no rank "${rank}`
)

function Resultado(vitoria, derrota) {
  let Vitorias = vitoria - derrota

  switch (true) {
    case vitoria < 10:
      rank = 'Ferro'
      break

    case vitoria <= 20:
      rank = 'Bronze'
      break

    case vitoria <= 50:
      rank = 'Prata'
      break

    case vitoria <= 80:
      rank = 'Ouro'
      break

    case vitoria <= 90:
      rank = 'Diamante'
      break

    case vitoria <= 100:
      rank = 'Lendário'
      break

    default:
      rank = 'Imortal'
      break
  }

  return Vitorias
}
