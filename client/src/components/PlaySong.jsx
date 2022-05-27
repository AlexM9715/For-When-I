import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import SpotifyPlayer from 'react-spotify-web-playback'

const DisplaySong = ({ songURI }) => {

    const [token] = useState(localStorage.getItem('token'))
    const [currSong, setCurrSong] = useState(null)

    useEffect(() => {
        setCurrSong(null)
        setCurrSong(songURI)
    }, [songURI])

    return (

        <div>
            {token && songURI ?
                <div className="contain">
                    <SpotifyPlayer
                        token={token}
                        uris={currSong}
                        autoPlay={true}
                        initialVolume={.25}
                        styles={{
                            bgColor: 'transparent',
                            color: 'white',
                            sliderColor: 'deepskyblue',
                            trackArtistColor: 'white',
                            trackNameColor: 'white',
                            height: '100',
                        }}
                        className="player"
                    />
                    <Link to="/song/new" className="btn btn-outline-primary btn-sm add">Add Song to Category</Link>
                </div> : null
            }
        </div>

    )
}

export default DisplaySong