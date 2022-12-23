import PropTypes from "prop-types";

import { Card, Description, Avatar, UserName, Tag, Location, Stats, Label, Quantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
	return (
		<Card>
			<Description>
				<Avatar
					src={avatar}
					alt="User avatar"
				/>
				<UserName>{username}</UserName>
				<Tag>@{tag}</Tag>
				<Location>{location}</Location>
			</Description>

			<Stats>
				<li>
					<Label>Followers</Label>
					<Quantity>{stats.followers}</Quantity>
				</li>
				<li>
					<Label>Views</Label>
					<Quantity>{stats.views}</Quantity>
				</li>
				<li>
					<Label>Likes</Label>
					<Quantity>{stats.likes}</Quantity>
				</li>
			</Stats>
		</Card>
	);
};

Profile.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.objectOf(PropTypes.number)
}