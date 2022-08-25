let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional":true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoC.internacional == true) {
    let valorImposto = produtoC.valor * 1.2
    console.log("Produto internacional")
    console.log(valorImposto)

} else {
    let valorImposto = produtoC.valor * 1.12
    console.log("Produto nacional")
    console.log(valorImposto)   
}