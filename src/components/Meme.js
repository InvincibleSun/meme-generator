import React, { useState, useEffect } from "react";

function Meme() {
  const [dataMeme, setDataMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemesImg, setAllMemesImg] = useState();

  function handlerChange(event) {
    const { name, value } = event.target;

    setDataMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  useEffect(() => {
    async function getRequest() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemesImg(data.data.memes);
    }
    getRequest();
  }, []);

  function getNewImg(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemesImg.length);
    const randomUrl = allMemesImg[randomNumber].url;

    setDataMeme((prevState) => ({
      ...prevState,
      imgUrl: randomUrl,
    }));
  }

  return (
    <main>
      <form autocomplete="on">
        <input
          type="text"
          placeholder="Top text..."
          name="topText"
          value={dataMeme.topText}
          onChange={handlerChange}
          autofocus="true"
        />
        <input
          type="text"
          placeholder="Bottom text..."
          name="bottomText"
          value={dataMeme.bottomText}
          onChange={handlerChange}
        />
        <button onClick={getNewImg}>Try a new random meme image 👾</button>
      </form>
      <div className="meme">
        <img src={dataMeme.imgUrl} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{dataMeme.topText}</h2>
        <h2 className="meme--text bottom">{dataMeme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
