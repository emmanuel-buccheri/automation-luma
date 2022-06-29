#language:pt
Funcionalidade: Fluxo E2E

    Como usuário, desejo navegar na app
    Para finalizar um pedido na loja

Contexto:
    Dado acesse na home page

@focus
Esquema do Cenario: Compra com sucesso
    Quando fazer login
    E pesquisar o produto "<product>"
    E abrir o produto "<product>" pesquisado
    E ingresar quantidade "<quantity>"
    E adicionar produto no carrinho com a resposta "<messageA>"
    E ir no checkout
    E ir para o metodo de pagamento
    E finalizar pedido

    Então deve ser exibida a menssagem "<messageFinal>"

    Exemplos:
    | product         | quantity | messageA                                         | messageFinal                 |
    | Fusion Backpack | 5        | You added Fusion Backpack to your shopping cart. | Thank you for your purchase! |