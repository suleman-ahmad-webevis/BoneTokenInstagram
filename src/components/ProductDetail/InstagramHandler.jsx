import React, { useState, useEffect } from "react";

const InstagramHandler = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [postCaption, setPostCaption] = useState("");
  const [isSharingPost, setIsSharingPost] = useState(false);
  const [fbUserAccessToken, setFbUserAccessToken] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [connectedFBPage, setConnectedFBPage] = useState("");

  useEffect(() => {
    window.FB.getLoginStatus((res) => {
      setFbUserAccessToken(res.authResponse?.accessToken);
    });
  }, []);

  useEffect(() => {
    const getFacebook = async () => {
      try {
        await window.FB.api(
          "me/account",
          { access_token: fbUserAccessToken },
          (res) => {
            setConnectedFBPage(res.data[0]);
          }
        );
      } catch (err) {
        console.log("Error", err);
      }
    };
    getFacebook();
  }, [fbUserAccessToken]);

  useEffect(() => {
    const getInstaAccount = async () => {
      try {
        await window.FB.api(
          connectedFBPage?.id,
          {
            access_token: fbUserAccessToken,
            fields: "instagram_business_account",
          },
          (res) => {
            setInstagramId(res.instagram_business_account.id);
          }
        );
      } catch (err) {
        console.log("The error while getting insta account", err);
      }
    };
    getInstaAccount();
  }, [connectedFBPage]);

  const logInToFB = () => {
    try {
      window.FB.login(
        (res) => {
          setFbUserAccessToken(res.authResponse?.accessToken);
        },
        {
          // Scopes that allow us to publish content to Instagram
          scope: "instagram_basic, pages_show_list, instagram_content_publish",
        }
      );
    } catch (err) {
      console.log("The error while logging to Facebook", err);
    }
  };

  const logOutOfFB = () => {
    try {
      window.FB.logout(() => {
        setFbUserAccessToken(undefined);
      });
    } catch (err) {
      console.log("The err", err);
    }
  };

  const getFacebookPages = () => {
    return new Promise((resolve) => {
      window.FB.api(
        "me/accounts",
        { access_token: fbUserAccessToken },
        (res) => {
          setConnectedFBPage(res.data[0].name);
          resolve(res.data);
        }
      );
    });
  };

  const getInstagramAccountId = (facebookPageId) => {
    return new Promise((resolve) => {
      window.FB.api(
        facebookPageId,
        {
          access_token: fbUserAccessToken,
          fields: "instagram_business_account",
        },
        (res) => {
          setInstagramId(res.instagram_business_account.id);
          resolve(res.instagram_business_account.id);
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
          access_token: fbUserAccessToken,
          image_url: imageUrl,
          caption: postCaption,
        },
        (res) => {
          resolve(res.id);
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
          access_token: fbUserAccessToken,
          creation_id: mediaObjectContainerId,
        },
        (res) => {
          resolve(res.id);
        }
      );
    });
  };

  const shareInstagramPost = async () => {
    setIsSharingPost(true);
    const facebookPages = await getFacebookPages();
    const instagramAccountId = await getInstagramAccountId(facebookPages[0].id);
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
        {fbUserAccessToken ? (
          <button onClick={logOutOfFB} className="btn action-btn">
            Log out of Facebook
          </button>
        ) : (
          <button onClick={logInToFB} className="btn action-btn">
            Login with Facebook
          </button>
        )}
      </section>
      {fbUserAccessToken ? (
        <section className="app-section">
          <h3>Facebook connected page name: {connectedFBPage?.name}</h3>
          <h3>2. Send a post to Instagram</h3>
          <h3>Instagram Account Id to publish to: {instagramId}</h3>
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
            disabled={isSharingPost || !imageUrl}
          >
            {isSharingPost ? "Sharing..." : "Share"}
          </button>
        </section>
      ) : null}
    </main>
  );
};

export default InstagramHandler;
