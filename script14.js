// Loop For.In

const pessoa = {
    nome: 'Jhonatan', // key-value
    idade: 25
};

for (let chave in pessoa) {
    console.log(chave,pessoa['nome']);
}

const cores = ['vermelho', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice,cores[indice]);
}