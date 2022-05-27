import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import '../static/css/style.css'


const AddSong = () => {

    const [token] = useState(localStorage.getItem('token'))
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])
    const [category, setCategory] = useState("")
    const [songID, setSongID] = useState("")
    const navigate = useNavigate()

    const searchSong = async (e) => {
        e.preventDefault()
        const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })
        console.log(data)
        setTracks(data.tracks.items)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/songs`, { category, songID })
        .then(response => {
            navigate("/")
        })
    }

    const setSong = (e, uri) => {
        e.preventDefault()
        setSongID(uri)
    }

    return (
        <div className="d-flex justify-content-around">
            <div>
                <Link to={"/"}>Go Back</Link>
                <br />
                <br />
                <form onSubmit={searchSong} className="searchForm">
                    <input type="text" onChange={e => setSearchKey(e.target.value)} />
                    <button className="btn btn-outline-light btn-sm">Search</button>
                </form>
                {tracks.map((track) => (
                    <div className="d-flex  songs" key={track.id}>
                        {track.album.images.length ? <img width={"5%"} src={track.album.images[0].url} alt="" /> : <div>No Image</div>}
                        <p className="space align-items-center">{track.name} - {track.artists[0].name}</p>
                        <button  className="btn btn-outline-success btn-sm"onClick={(e) => setSong(e, track.uri)}>Add</button>
                    </div>
                ))}
            </div>
            <div className="addForm">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Song</label>
                        <small class="form-text text-muted">This will autofill. Do NOT type.</small>
                        <input type="text" value={songID}
                            onChange={e => setSongID(e.target.value)}/>
                    </div>
                    <div className="d-flex flex-column">
                        <label>Category</label>
                        <select value={category} onChange={e => setCategory(e.target.value)}>
                            <option hidden>----Select Category----</option>
                            <option value="dancing">feel like dancing</option>
                            <option value="happy">am feeling happy</option>
                            <option value="crying">feel like crying</option>
                            <option value="vibing">feel like vibing</option>
                            <option value="gym">feel like getting PUMPED</option>
                            <option value="rock">feel like rocking out</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-primary btn-sm add2">Add Song</button>
                </form>
            </div>
        </div>
    )
}

export default AddSong