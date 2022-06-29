Feature: Fluxo E2E

    Como usuário, desejo navegar na app
    Para finalizar um pedido na loja

Background:
    Given acesse na home page

@focus
Scenario Outline: Compra com sucesso
    When fazer login
    And pesquisar o produto "<product>"
    And abrir o produto "<product>" pesquisado
    And ingresar quantidade "<quantity>"
    And adicionar produto no carrinho com a resposta "<messageA>"
    And ir no checkout
    And ir para o metodo de pagamento
    And finalizar pedido

    Then deve ser exibida a menssagem "<messageFinal>"

    Examples:
    | product         | quantity | messageA                                         | messageFinal                 |
    | Fusion Backpack | 5        | You added Fusion Backpack to your shopping cart. | Thank you for your purchase! |