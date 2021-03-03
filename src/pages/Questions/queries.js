import { gql } from "@apollo/client";

export const POLL_LIST_SUBSCRIPTION = gql`
	subscription QuerySubscription {
		questions(order_by: { created_at: desc }, limit: 20) {
			id
			title
		}
	}
`;
