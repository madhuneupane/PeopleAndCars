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