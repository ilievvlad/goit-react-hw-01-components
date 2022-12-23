import PropTypes from "prop-types";
import { FriendItem } from "./FriendItem";
import { Friends } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
	return (
		<Friends>
			{friends.map((friend) => (
				<FriendItem
					key={friend.id}
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
				/>
			))}
		</Friends>
	)
}

FriendList.propTypes = {
	props: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired
		})
	)
};