import { gql, useMutation } from '@apollo/client';

export const POLL_LIST_SUBSCRIPTION  = gql`
  subscription PollListSubscription{
      questions(order_by: {created_at: desc}, limit: 20){
              id
              title
          }
       }
`;