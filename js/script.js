

const key = "61f0ee119fed67d9bca32f3f6b094e90"


async function buscarCidade() {

const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then(resposta => resposta.json () )

console.log(dados);

}


function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    console.log(cidade);


}