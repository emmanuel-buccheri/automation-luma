#language:pt
Funcionalidade: Fluxo E2E

    Como usuário, desejo navegar na app
    Para finalizar um pedido na loja

Contexto:
    Dado acesse na home page

Esquema do Cenario: Compra com sucesso
    Quando faça login
    E pesquise o produto "<product>"
    E abra o produto "<product>" pesquisado
    E ingrese a quantidade "<quantity>"
    E adicione o produto "<product>" ao carrinho
    E entre no checkout
    E complete os dados de entrega
    E avance para o metodo de pagamento
    E finalice o pedido

    Então deve ser exibida a menssagem "<message>"

    Exemplos:
    | product         | quantity | message                      |
    | Fusion Backpack | 5        | Thank you for your purchase! |