import { gql } from "@apollo/client";

export const NEW_POLL_QUESTION = gql`
  mutation Newpollq($object: questions_insert_input!) {
    insert_questions_one(object: $object) {
      id
      title
    }
  }
`;
