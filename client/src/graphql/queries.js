import { gql } from "@apollo/client";

export const GET_PEOPLE =gql`
{
    people {
        id
        firstName
        lastName
    }
}
`

export const GET_PERSON_WITH_CARS =gql`
query ($personWithCarsId: String!) {
  personWithCars(id: $personWithCarsId) {
    id
    firstName
    lastName
    cars {
      id
      year
      make
      model
      price
      personId
    }
  }
}`

export const ADD_PERSON = gql`
mutation AddPerson($addPersonId: String!, $firstName: String!, $lastName: String!) {
  addPerson(id: $addPersonId, firstName: $firstName, lastName: $lastName) {
    id
    firstName
    lastName
  }
} 
`

export const ADD_CAR = gql`
mutation AddCar($addCarId: String!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: String!) {
  addCar(id: $addCarId, year: $year, make: $make, model: $model, price: $price, personId: $personId) {
    id
    year
    make
    model
    price
    personId
  }
}
`

export const DELETE_PERSON =gql`
mutation DeletePerson($deletePersonId: String!) {
  deletePerson(id: $deletePersonId) {
    id
    firstName
    lastName
  }
}
`