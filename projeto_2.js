// Crie um programa em JavaScript para gerenciar sua lista de filmes e organizar suas maratonas cinematográficas! O programa deve oferecer as seguintes funcionalidades:

// • Adicionar filme: Os usuários devem ser capazes de adicionar novos filmes à lista de filmes para assistir informando o título e ano de lançamento do filme. 

// • Ordenar a lista: O programa deve permitir o usuário ordenar a lista de filmes para assistir pelo título ou pelo ano de lançamento para facilitar a visualização.

// • Pesquisar filme: O programa deve permitir que os usuários verifiquem se um determinado filme já está na lista de filmes para assistir.

// • Exibir listas: Os usuários devem poder exibir tanto a lista de filmes para assistir quanto a lista de filmes já assistidos.

// • Marcar filme como assistido: Os usuários só podem marcar como assistido o primeiro filme da lista de filmes para assistir. Quando um filme é marcado como assistido, ele deve ser removido da lista de filmes para assistir e adicionado à lista de filmes já assistidos.

// • Remover filme: Além de marcar um filme como assistido, os usuários devem  ter a opção de remover filmes da lista de filmes para assistir, caso decidam não assisti-los mais.

// • Encerrar programa: utilize um laço de repetição para manter o programa ativo exibindo o menu de opções até o usuário escolher encerrar o programa.

// O programa deve ser interativo, permitindo que o usuário escolha qual funcionalidade deseja executar em cada etapa. Ele deve exibir mensagens informativas para orientar o usuário durante o processo de gerenciamento da lista de compras.


let filmes = [
    {
        nome: 'Barbie',
        anoDeLancamento: 2006
    },
    
    {
        nome: 'X - Men',
        anoDeLancamento: 2000
    },

    {
        nome: 'Princesa da Ilha',
        anoDeLancamento: 2010
    },

    {
        nome: 'Doze princesas bailarinas',
        anoDeLancamento: 2008
    }
]


let filmesAssistidos = [
    {
        nome: 'A fantástica fábrica de chocolate',
        anoDeLancamento: 2002
    }
]


let loop = true



function adicionar(){
    const nomeFilme = prompt('Nome do filme: ')
    const anoFilme = Number(prompt('Ano de lançamento: '))

    const filme = {
        nome: nomeFilme,
        anoDeLancamento: anoFilme
    }

    filmes.push(filme)

    console.log(`
        -- Lista de filmes --
   
       `)

    for (const filme of filmes){

      console.log(filme.nome, '-', filme.anoDeLancamento)
    }
}


function ordenar(){

    const opcao = Number(prompt(`
        -- Ordenar por: 
        1 - Nome
        2 - Ano de lançamento

        `))

    if (opcao === 1){

        filmes.sort((a, b) => a.nome.localeCompare(b.nome))

        console.log(`
            -- Lista de filmes --
       
           `)
    
        for (const filme of filmes){
    
          console.log(filme.nome, '-', filme.anoDeLancamento)
        }

    } else{

        filmes.sort((a, b) => a.anoDeLancamento - b.anoDeLancamento)

        console.log(`
            -- Lista de filmes --
       
           `)
    
        for (const filme of filmes){
    
          console.log(filme.nome, '-', filme.anoDeLancamento)
        }
    }
}

function pesquisar(){
    const procurarFilme = prompt('Qual filme deseja procurar? ')

    const filmeNaLista = filmes.find((filme => filme.nome === procurarFilme))

    if(filmeNaLista){
        console.log(filmeNaLista.nome, 'está na sua lista!')
    } else{
        console.log(procurarFilme, 'não está na sua lista!')
    }
   
}

function exibir(){
    console.log(`
        -- Lista de filmes --
   
       `)

    for (const filme of filmes){

      console.log(filme.nome, '-', filme.anoDeLancamento)
    }

    console.log(`
        -- Filmes asssistidos --
           `)
      for (const filme of filmesAssistidos){
       console.log(filme.nome, '-', filme.anoDeLancamento)
      }

    
}


function assistido(){

    filmesAssistidos.push(filmes[0])
    console.log(`
     -- Filmes asssistidos --
        `)
   for (const filme of filmesAssistidos){
    console.log(filme.nome, '-', filme.anoDeLancamento)
   }

   filmes.shift()
   
    console.log(`
     -- Lista de filmes --

    `)

   for (const filme of filmes){

    console.log(filme.nome, '-', filme.anoDeLancamento)
   }

   
}

function remover(){
    const removerFilme = prompt('Qual filme gostaria de remover? ')

    const procurarEmFilmes = filmes.findIndex((filme) => filme.nome === removerFilme)

    if(procurarEmFilmes > - 1){
        filmes.splice(procurarEmFilmes, 1)
        console.log(`
            -- Lista de filmes --
       
           `)

        for (const filme of filmes){
            console.log(filme.nome, '-', filme.anoDeLancamento)
        }
    }
}




while(loop = true){
    let menu = Number(prompt(`
        Bem vindo(a) à sua lista de filmes! 
        1 - Adicionar filme
        2 - Ordenar lista
        3 - Pesquisar filme
        4 - Exibir listas
        5 - Marcar como assistido
        6 - Remover filme
        7 - Encerrar 
        
        `))

    switch(menu){
        case 1: 
            adicionar()
            break;

        case 2:
            ordenar()
            break;

        case 3:
            pesquisar()
            break;

        case 4:
            exibir()
            break;

        case 5:
            assistido()
            break;

        case 6:
            remover()
            break;

        case 7:
            
            console.log(`
                -- Lista de filmes --
           
               `)
        
            for (const filme of filmes){
        
              console.log(filme.nome, '-', filme.anoDeLancamento)
            }

            console.log(`
                -- Filmes asssistidos --
                   `)
              for (const filme of filmesAssistidos){
               console.log(filme.nome, '-', filme.anoDeLancamento)
              }

            loop = false

            break;

        default:
            console.log('Opção inválida!')
    }
}
