import React from 'react'

const LoginSpotify = () => {

    const CLIENT_ID ="dff196480a324944befafbbdfea1f976"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    return (
        <div>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to your Spotify</a>
        </div>
    )
}

export default LoginSpotify