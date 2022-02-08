// Desafio
type conta = { saldo: number, depositar: (valor: number) => void }
type correntista = { nome: string, contaBancaria: conta, contatos: string[] }

let contaBancaria: conta = {
  saldo: 3456,
  depositar(valor) {
      this.saldo += valor
  }
}
 
let correntista: correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
