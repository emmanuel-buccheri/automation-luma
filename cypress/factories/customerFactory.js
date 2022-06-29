import { faker } from '@faker-js/faker/locale/pt_BR';

export default {
    customer: function () {
        var data = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }
        return data
    }
}