import { httpClient } from "@/Services/HttpClient.tsx";

/**
 * Service for handling match-related operations.
 */
export const MatchService = {
	/**
	 * Sends a match request from the sender to the receiver.
	 * @param sender_id The ID of the sender.
	 * @param receiver_id The ID of the receiver.
	 * @returns A Promise representing the result of the match request.
	 */
	async send(sender_id: number, receiver_id: number) {
		return httpClient.post("/match", { id: sender_id, matchee_id: receiver_id });
	},
};
