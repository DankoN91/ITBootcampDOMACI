import React from 'react'
import FormaFunc from './FormaFunc'
import FormaClass from './FormaClass'
import CardFunc from './CardFunc'
import CardClass from './CardClass'

function App() {
    let natpis = "KLIKNI ME";
    let opis = "Sheogorath";
    let opis1 = "Jyggalag";
    let url = "https://pbs.twimg.com/media/DXtl3LAW0AUDj11.jpg";
    let url1 = "https://vignette.wikia.nocookie.net/elderscrolls/images/5/5a/Jyggalag.png/revision/latest?cb=20130206202311";
  return (
    <div className="App">
     <FormaFunc text={natpis} />
     <FormaClass text={natpis} />
     <CardFunc naziv={opis} url={url}></CardFunc>
     <CardClass naziv={opis1} url={url1}></CardClass>
    </div>
  );
}

export default App;
