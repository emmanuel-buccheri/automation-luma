Feature: Cadastro de usuário

Scenario:
    Given acesse na home page

Scenario Outline: Tentar cadastrar usuário com sucesso e insucesso
    When tente criar uma conta com "<firstName>" "<lastName>" "<email>" "<pass>" "<confirmPass>"
    Then deve ser exibida a menssagem "<message>"

    Examples:
        | scenario             | firstName | lastName | email    | pass      | confirmPass | message                                                      |
        | com sucesso          | Emmanuel  | Teste    | meuemail | Senha.123 | Senha.123   | Thank you for registering with Main Website Store.           |
        # | sem nome             | vazio     | Teste    | meuemail | Senha.123 | Senha.123   | This is a required field.                                    |
        # | sem sobrenome        | Emmanuel  | vazio    | meuemail | Senha.123 | Senha.123   | This is a required field.                                    |
        # | sem informar email   | Emmanuel  | Teste    | vazio    | Senha.123 | Senha.123   | This is a required field.                                    |
        # | com email invalido   | Emmanuel  | Teste    | #.!*$%&  | Senha.123 | Senha.123   | Please enter a valid email address (Ex: johndoe@domain.com). |
        # | sem informar senha   | Emmanuel  | Teste    | meuemail | vazio     | Senha.123   | Password Strength: No Password                               |
        # | sem confirmar senha  | Emmanuel  | Teste    | meuemail | Senha.123 | vazio       | This is a required field.                                    |
        # | com senha divergente | Emmanuel  | Teste    | meuemail | Senha.123 | zenha.12    | Please enter the same value again.                           |