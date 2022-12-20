import React, { useEffect } from "react";
import { useState } from "react";

function InstagramHandler() {
	const [imageUrl, setImageUrl] = useState("");
	const [postCaption, setPostCaption] = useState("");
	const [isSharingPost, setIsSharingPost] = useState(false);
	const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");

	useEffect(() => {
		window.FB.getLoginStatus((response) => {
			console.log(response);
			setFacebookUserAccessToken(response.authResponse?.accessToken);
		});
	}, []);

	const logInToFB = () => {
		window.FB.login(
			(response) => {
				setFacebookUserAccessToken(response.authResponse?.accessToken);
			},
			{
				// Scopes that allow us to publish content to Instagram
				scope: "instagram_basic,pages_show_list",
			}
		);
	};

	const logOutOfFB = () => {
		window.FB.logout(() => {
			setFacebookUserAccessToken(undefined);
		});
	};

	const getFacebookPages = () => {
		return new Promise((resolve) => {
			window.FB.api(
				"me/accounts",
				{ access_token: facebookUserAccessToken },
				(response) => {
					resolve(response.data);
				}
			);
		});
	};

	const getInstagramAccountId = (facebookPageId) => {
		return new Promise((resolve) => {
			window.FB.api(
				facebookPageId,
				{
					access_token: facebookUserAccessToken,
					fields: "instagram_business_account",
				},
				(response) => {
					console.log(response);
					resolve(response.instagram_business_account?.id);
				}
			);
		});
	};

	const createMediaObjectContainer = (instagramAccountId) => {
		return new Promise((resolve) => {
			window.FB.api(
				`${instagramAccountId}/media`,
				"POST",
				{
					access_token: facebookUserAccessToken,
					image_url: imageUrl,
					caption: postCaption,
				},
				(response) => {
					resolve(response.id);
				}
			);
		});
	};

	const publishMediaObjectContainer = (
		instagramAccountId,
		mediaObjectContainerId
	) => {
		return new Promise((resolve) => {
			window.FB.api(
				`${instagramAccountId}/media_publish`,
				"POST",
				{
					access_token: facebookUserAccessToken,
					creation_id: mediaObjectContainerId,
				},
				(response) => {
					resolve(response.id);
				}
			);
		});
	};

	const shareInstagramPost = async () => {
		setIsSharingPost(true);
		const facebookPages = await getFacebookPages();
		const instagramAccountId = await getInstagramAccountId(
			facebookPages[0].id
		);
		const mediaObjectContainerId = await createMediaObjectContainer(
			instagramAccountId
		);

		await publishMediaObjectContainer(
			instagramAccountId,
			mediaObjectContainerId
		);

		setIsSharingPost(false);

		// Reset the form state
		setImageUrl("");
		setPostCaption("");
	};

	return (
		<main id="app-main">
			<section className="app-section">
				<h3>1. Log in with Facebook</h3>
				{facebookUserAccessToken ? (
					<button
						onClick={logOutOfFB}
						className="btn action-btn">
						Log out of Facebook
					</button>
				) : (
					<button
						onClick={logInToFB}
						className="btn action-btn">
						Login with Facebook
					</button>
				)}
			</section>
			{facebookUserAccessToken ? (
				<section className="app-section">
					<h3>2. Send a post to Instagram</h3>
					<input
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						placeholder="Enter a JPEG image url..."
					/>
					<textarea
						value={postCaption}
						onChange={(e) => setPostCaption(e.target.value)}
						placeholder="Write a caption..."
						rows="10"
					/>
					<button
						onClick={shareInstagramPost}
						className="btn action-btn"
						disabled={isSharingPost || !imageUrl}>
						{isSharingPost ? "Sharing..." : "Share"}
					</button>
				</section>
			) : null}
		</main>
	);
}

export default InstagramHandler;
