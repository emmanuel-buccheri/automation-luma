Feature: Fluxo E2E

Background:
    Given acesse na home page

Scenario Outline: Compra com sucesso
    When faça login
    And pesquise o produto "<product>"
    And abra o produto "<product>" pesquisado
    And ingrese a quantidade "<quantity>"
    And adicione o produto "<product>" ao carrinho
    And entre no checkout
    And complete os dados de entrega
    And avance para o metodo de pagamento
    And finalice o pedido
    Then deve ser exibida a menssagem "<message>"

    Examples:
    | product         | quantity | message                      |
    | Fusion Backpack | 1        | Thank you for your purchase! |