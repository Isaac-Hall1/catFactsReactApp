import "./index.css"
import React from 'react';
const urlImage = `https://api.thecatapi.com/v1/images/search`;
const urlFact = 'https://catfact.ninja/fact?max_length=140';
const api_key = "live_hEDtOrUQH52rtHsPsoOkF8aHRIV2bs028HlnJUX85JM8kH3SJCITH5BGVNZqwES2";
function Stuff({img, fact, butDisabled, clickHandler}){
  return(    
    <div className="head">
      <div className="websiteData">
        <div className="info">
          <div className="specificToImage">
            <img className="imgData" src={img} alt="https://i.pinimg.com/564x/71/ee/0a/71ee0aa7ef5fdbf20250c7db2ce27eed.jpg"/>
          </div>
          <p className="factData">{fact}</p>
        </div>
        <div className="button">
          <button className="buttonData" disabled={butDisabled} onClick={clickHandler}>Click Me!</button>
        </div>
      </div>
    </div>
    );
  
}
export default function App() {
  const [img, setImg] = React.useState("https://i.pinimg.com/564x/71/ee/0a/71ee0aa7ef5fdbf20250c7db2ce27eed.jpg");
  const [fact, setFact] = React.useState("This is totally a fact");
  const [isButtonDisabled, setButtonDisabled] = React.useState(false);

  /*
    whenever the button is clicked, grabs a random cat image and fact and stores them
  */
  function onClickHandler(){
    setButtonDisabled(true);
    fetch(urlImage, {headers: {
      'x-api-key': api_key
    }})
      .then((response) => {
        if(response.ok)
          return response.json();
        throw new Error("Something went wrong");
      })
      .then((data) => {
        setImg(data[0].url);
      })
    
    fetch(urlFact)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFact(data.fact);
    })
    setTimeout(() => setButtonDisabled(false), 1500);
  }
  return(    
  <div>
   <Stuff img={img} fact={fact} clickHandler={onClickHandler} butDisabled={isButtonDisabled}/>
  </div>
  );
}