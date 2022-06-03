import React, {useState} from 'react'
import axios from "axios"
import {getRandomInt} from "../helpers/utils"
import PlaySong from '../components/PlaySong'

const DisplayDrop = () => {

    const [category, setCategory] = useState("")
    const [songURI, setSongURI] = useState("")

    const getRandom = async (e) => {
        e.preventDefault()
        const songs = await axios.get(`http://localhost:8000/api/${category}`)
            .then(response => response.data)
        const randomSong = songs[getRandomInt(0, songs.length-1)]
        const songID = randomSong.songID
        setSongURI(songID)
    }

    return (
        <div>
            <div className="d-flex selection">
                <h5 className="forWhen">For when I</h5>
                <form onSubmit={getRandom}>
                    <div className="customSelect">
                        <select value={category} onChange={e => setCategory(e.target.value)}>
                            <option className="options" hidden>----Select Option----</option>
                            <option value="dancing">feel like dancing</option>
                            <option value="happy">am feeling happy</option>
                            <option value="crying">feel like crying</option>
                            <option value="vibing">feel like vibing</option>
                            <option value="gym">feel like getting PUMPED</option>
                            <option value="rock">feel like rocking out</option>
                            <option value="throwback">am feeling nostalgic</option>
                            <option value="rave">feel like raving</option>
                            <option value="code">want to code</option>
                        </select>
                        <span className="customArrow"></span>
                        <button className="random btn btn-outline-light btn-sm">Get Random Song</button>
                    </div>
                </form>
            </div>
            <PlaySong songURI={songURI}/>
        </div>
    )
}

export default DisplayDrop