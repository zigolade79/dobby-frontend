import { gql, useQuery } from "@apollo/client";
import { meQuery } from "../__type_graphql__/meQuery";

export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
    }
  }
`;

export const useMe = () => {
  console.log("useMe called");
  return useQuery<meQuery>(ME_QUERY);
};
