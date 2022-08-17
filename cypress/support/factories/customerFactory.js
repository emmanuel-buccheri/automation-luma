export default {
    customer: function () {
        var data = {
            firstName: 'Emmanuel',
            lastName: 'Teste',
            email: 'emmanuelteste3@mailinator.com',
            password: 'Senha.123',
            phoneNumber: '+55(61)99123-1234',
            address: {
                street: 'Avenida Central Bloco 1450',
                country: 'Brazil',
                state:'Distrito Federal',
                city:'Brasilia',
                postalCode:'71720-027'
            }
        }
        return data
    }
}