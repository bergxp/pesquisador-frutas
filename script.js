let lista = document.getElementById("lista");
let texto = document.getElementById("texto");

const frutas = ["Banana","Abacaxi", "Morango", "Maça","Jabuticaba",
"Goiaba","Jaca","Uva","Manga","Pêra","Abacate","Abacaxi","Acerola "];

for(let i =0; i< frutas.length; i++){
  let fruta = document.createElement("li")
  fruta.textContent = frutas[i];
  lista.appendChild(fruta)
}


const pesquisar = () => {
  let frutasFiltradas = frutas.filter(f => {
    return f.toLowerCase().includes(texto.value.toLowerCase())
  })
  lista.innerHTML = "";
  for(let i =0 ; i < frutasFiltradas.length; i++){
    let fruta = document.createElement("li");
    fruta.textContent = frutasFiltradas[i];
    lista.appendChild(fruta)
  }

}
texto.addEventListener("input",pesquisar)

