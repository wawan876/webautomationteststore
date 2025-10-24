import { faker } from '@faker-js/faker';

// Fungsi untuk menghasilkan SEMUA data yang dibutuhkan
export function generateRegistrationData() {
    const password = faker.internet.password(10);

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        telephone: faker.phone.number('##########'),
        fax: faker.phone.number('##########'),
        company: faker.company.name(),
        country: 'United States', 
        region: 'California',
        address1: faker.location.streetAddress(),
        address2: faker.location.streetAddress(),
        city: faker.location.city(),
        postCode: faker.location.zipCode('#####'),
        loginName: faker.internet.username() + faker.number.int(999),
        loginPassword: password,
        loginPasswordConfirm: password,
    };
}