import { faker } from "@faker-js/faker";
const allowedCountries = [
  "UNITED STATES",
  "CANADA",
  "INDIA",
  "GERMANY",
  "AUSTRALIA",
];
export const fakerUser = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number("###-###-####"),
  emailAddress: faker.internet.email(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  stateProvince: faker.location.state(),
  postalCode: faker.location.zipCode("#####"),
  country: faker.helpers.arrayElement(allowedCountries),
  userName: faker.internet.email(),
  password: faker.internet.password(12),
});
fakerUser.confirmPassword = fakerUser.password;
