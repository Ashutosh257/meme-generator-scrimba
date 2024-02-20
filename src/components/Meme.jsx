import React, { useState, useEffect, useId } from "react"
import ColorPicker from "./ColorPicker.jsx"
// import Drag from "./Drag.jsx"

const Meme = () => {
    
    // Custom hook to generate a unique id
    const id = useId()

    // React state to store the meme
    const [meme, setMeme] = useState({
        topText: "",
        topTextColor: "#000000",
        bottomText: "",
        bottomTextColor: "#000000",
        memeImage: "https://i.imgflip.com/345v97.jpg",
    })

    // React state to store all the memes
    const [allMemes, setAllMemes] = useState([])


    // Fetch all memes from the API
    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then((res) => res.json())
            .then((data) => setAllMemes(data.data.memes))
    }, [])

    // Function to get a random meme image
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme({
            ...meme,
            memeImage: allMemes[randomNumber].url,
        })
    }

    // Function to handle the input changes
    function handleChange(event) {
        const { name, value } = event.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    // Function to change the text color
    function changeTextColor(name, colorToSet) {
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: colorToSet,
        }))
    }

    // Function to handle the form submit
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <div className="meme">
                    <img className="form-meme-image" src={meme.memeImage} />
                    
                    {/* <Drag 
                      text={meme.topText}
                      topTextColor={meme.topTextColor}
                    /> */}

                    <div
                        className="meme--text top"
                        style={{ color: meme.topTextColor }}
                        id="bottomTextAfter"
                    >
                        {meme.topText}
                    </div>
                    
                    <div
                        className="meme--text bottom"
                        style={{ color: meme.bottomTextColor }}
                        id="bottomTextAfter"
                    >
                        {meme.bottomText}
                    </div>
                </div>

                <div className="form--input">
                    <input
                        type="text"
                        id={`${id}-topText`}
                        placeholder="Top text"
                        className="form--input-text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <ColorPicker
                        name={"topTextColor"}
                        color={meme.topTextColor}
                        changeTextColor={changeTextColor}
                    />
                </div>

                <div className="form--input">
                    <input
                        type="text"
                        id={`${id}-bottomText`}
                        placeholder="Bottom text"
                        className="form--input-text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <ColorPicker
                        name={"bottomTextColor"}
                        color={meme.bottomTextColor}
                        changeTextColor={changeTextColor}
                    />
                </div>
                <button className="btn-meme-img" onClick={getMemeImage}>
                    Get a new meme image 🌚
                </button>
            </form>
        </main>
    )
}

export default Meme
