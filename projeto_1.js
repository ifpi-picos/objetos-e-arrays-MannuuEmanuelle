// Você foi contratado para desenvolver um programa em JavaScript que permita aos usuários gerenciar uma lista de compras. O programa deve oferecer as seguintes funcionalidades:
 
// • Adicionar um item: O usuário deve ser capaz de adicionar novos itens à lista de compras;

// • Remover um item: O usuário deve ser capaz de remover itens da lista de compras;

// • Pesquisar item: O programa deve permitir que os usuários verifiquem se um determinado item já está na lista de compras.

// • Ordenar a lista: O programa deve permitir que o usuário ordene a lista de compras pelos nomes dos itens.

// • Exibir lista: O programa deve permitir a exibição de todos os itens da lista.

// • Limpar a lista: O programar deve permitir que o usuário remova todos os itens da lista de compras de uma vez.

// • Encerrar programa, utilize um laço de repetição para manter o programa exibindo o menu de opções até o usuário escolher encerrar o programa.

// O programa deve ser interativo, permitindo que o usuário escolha qual funcionalidade deseja executar em cada etapa. Ele deve exibir mensagens informativas para orientar o usuário durante o processo de gerenciamento da lista de compras.

let lista = [ 'Feijão', 'Macarrão', 'arroz', 'tomate', 'carne']
let loop = true



function adicionar(){
    const adicionarProduto = prompt('O que você deseja adicionar? ')
    const procurandoProduto = lista.find((produto) => produto === adicionarProduto)
    
     if (procurandoProduto){
        console.log('Esse produto já está na sua lista')
        
        
     } else{
        lista.push(adicionarProduto)
        console.log('Produto adicionado!')
        console.log(lista)
     }
    
    
}

function remover(){
    const removerProduto = prompt('O que deseja remover? ')
    const index = lista.findIndex((produto) => produto === removerProduto)
    console.log(index)
    index > -1 ?  lista.splice(index, 1) : null

    console.log('Produto removido!')
    console.log(lista)

}

function pesquisar(){
    const pesquisarProduto = prompt('O que deseja procurar? ')

    const produtoNaLista = lista.find((produto => produto === pesquisarProduto))

    if(produtoNaLista){
        console.log(produtoNaLista, 'está na sua lista!')
    } else{
        console.log(pesquisarProduto, 'não está na sua lista!')
    }

   

    

}

function ordenar(){
    lista.sort((a, b) => a.localeCompare(b))

    console.log(lista)
}

function exibir(){
    for(const produto of lista){
        console.log(produto)
    }
}


function limpar(){
    for (let i = 0; i < lista.length; i++){
        lista.splice(0, lista.length)
        console.log('Sua lista de compras está vazia!')
    }
}



while(loop === true){
    let menu = Number(prompt(`
        --- LISTA DE COMPRAS ---
        1 - Adicionar um item
        2 - Remover um item
        3 - Pesquisar item
        4 - Ordenar a lista
        5 - Exibir a lista 
        6 - Limpar a lista
        7 - Encerrar programa
        
        `))
    
    switch (menu){
        case 1:
            adicionar()
            break;


        case 2:
            remover()
            break;
        

        case 3:
            pesquisar()
            break;

        case 4:
            ordenar()
            break;

        case 5:
            exibir()
            break;

        case 6:
            limpar()
            break;

        case 7: 
            loop = false
            console.log('Sua lista de compras: ', lista)
            break;

        default:
            console.log('Opção inválida!')

    }
}


