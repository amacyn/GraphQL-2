
import { gql } from '@apollo/client';

export const GET_BANKS = gql`
  query getBanks {
    getBanks {
      code
      id
      name
    }
  }
`;

export const GET_SERVICES_LOCATIONS = gql`
  query getServicesLocations {
    getServices {
      id
      name
      slug
    }
    getLocationAreas {
      id
      name
      parent_slug
      slug
    }
  }
`;
