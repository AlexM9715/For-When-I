import React, {useEffect, useState} from 'react'
import DisplayDrop from '../components/DisplayDrop'

const Main = () => {

    const CLIENT_ID ="dff196480a324944befafbbdfea1f976"
    const REDIRECT_URI = "http://54.183.177.159:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPES = ["streaming","user-read-email", "user-read-private", "user-read-playback-state", "user-modify-playback-state"]

    const [token, setToken] = useState("")

    useEffect( () => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1] //gets token from url after login to spotify

            window.location.hash= "" //resets hash back to empty string
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className="container d-flex justify-content-center drop">
            {!token?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPES.join(",")}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to your Spotify</a>
                :<div className="align-items-center">
                    <DisplayDrop />
                    <button onClick={logout} className="btn btn-outline-success btn-sm logout">Logout of Spotify</button>
                </div>
            }
        </div>
    )
}

export default Main