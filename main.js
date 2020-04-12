/* var nome = "Janaina Franquis"; //variável tipo string aspas dupla 
var idade = 38; //
var idade2 = 10; 
var frase = "Brasil é o melhor time do mundo";
//alert (nome + " tem  " + idade + " anos"); // Alerta na tela. + é usado para concatenar 
// alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
/*console.log(frase.toUpperCase()); /* O método toUpperCase () converte uma string em letras maiúsculas */
//console.log(frase.toLowerCase()); /* O método toLowerCase () converte uma string em letras minúsculas. O método toLowerCase () não altera a sequência original. */
//console.log(frase.replace("Japão", "Brasil")); // retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto
//alert(frase.replace("Japão", "Brasil")); // Uma caixa de alerta é frequentemente usada se você deseja garantir que as informações cheguem ao usuário. Quando uma caixa de alerta aparece, o usuário terá que clicar em "OK" para continuar. */

/*AULA 2 - ARRAY E DICIONARIO*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); // O método push () adiciona novos itens ao final de uma matriz e retorna o novo comprimento
//lista.pop(); //O método pop () remove o último elemento de uma matriz e retorna esse elemento.
//console.log(lista[0]); imprime o item 0 do array
//alert(lista[1]);
//console.log(lista.length) //A propriedade length retorna o comprimento de uma sequência (número de caracteres).
//console.log(lista.reverse()); // O reverse()método inverte a ordem dos elementos em uma matriz.
//console.log(lista.toString()[0]); // O método toString () retorna o valor de um objeto String. imprime a primeira letra do array 0;
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - ")); // O join()método retorna a matriz como uma sequência. Os elementos serão separados por um separador especificado. O separador padrão é vírgula (,).

//DICIONARIO// 
/*
var fruta = {nome: "maça", cor: "vermelha"} // tipo objeto json
console.log(fruta.nome);
alert(fruta.cor)
*/



//LISTA DE DICIONARIOS //
//var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);



// CONDICIONAIS E LAÇOS DE REPETIÇÃO E DATE

//var idade = prompt ("Qual sua idade"); // O método prompt () exibe uma caixa de diálogo que solicita entrada ao visitante.
//var idade = 38;
//if(idade >=18){ // Use ifpara especific ar um bloco de código a ser executado, se uma condição especificada for verdadeira
//    alert("maior de idade");
//} else{ // se elsepara especificar um bloco de código a ser executado, se a mesma condição for falsa
/*    alert("menor de idade")
}; */


//LAÇOS DE REPETIÇÃO WHILE E FOR//
//var count = 0;
//while(count<=5){ //  percorre um bloco de código enquanto uma condição especificada é verdadeira
//    console.log(count);
//    count=count + 1; // estrutura de repetição
//};


/* var count = 0;
while(count<=5){ //  percorre um bloco de código enquanto uma condição especificada é verdadeira
    console.log(count);
    alert(count);
    count++; //ele recebe ele mesmo +1 
}; */

/* var count; 
for(count=0; count <=5; count++){ // percorre um bloco de código várias vezes
    alert(count);
};
*/

/* DATE

var d = new Date(); // cria um novo objeto de data com a data e hora atuais :
alert(d);
//alert(d.getMonth()+1); //  retorna o mês (de 0 a 11) para a data especificada, de acordo com a hora local
//alert(d.getUTCMinutes()); // retorna os minutos (de 0 a 59) da data e hora especificadas, de acordo com a hora universal.
alert(d.getDay()); // retorna o dia do mês (de 1 a 31) para a data especificada.
alert(d.getUTCHours()); // retorna a hora (de 0 a 23) da data e hora especificadas, de acordo com a hora universal.

*/

/* FUNÇÕES //

 function soma(n1,n2){
    return n1+n2;
} 

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
    alert (soma(5,10));
    alert("Vai Japão", "Japão", "Brasil"); 

function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";// Acrescentar html O método getElementById () retorna o elemento que possui o atributo ID com o valor especificado.
// innerHTML define ou retorna o conteúdo HTML (HTML interno) de um elemento
   // console.log(document.getElementById("agradecimento"));
  //  alert("Obrigada por clicar");
}


function redirecionar(){
   // window.open("https://www.balneariodochopp.com.br/"); // window.open = redirecionar para outra página
    window.location.href = "https://www.balneariodochopp.com.br/"; // retorna o href (URL) da página atual
}
function trocar(elemento){
   // document.getElementById("mouseemove").innerHTML = "Obrigado por passar o mouse"; 
    elemento.innerHTML = "Obrigado por passar o mouse";   
   // alert("trocar texto");


 }

 function voltar(elemento){
 //   document.getElementById("mouseemove").innerHTML = " Passe o mouse";
      elemento.innerHTML = "Passe o mouse aqui";
 }

 function load(){
     alert("página carregada");

 } function funcaoChange(elemento){
    console.log(elemento.value)         
}

