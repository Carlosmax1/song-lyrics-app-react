import React from 'react';
import getSongs from './songs';
import SongList from './components/SongList';
import MsgPesquisar from './components/MsgPesquisar';
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [songsList, setSongsList] = useState([{}]);
  const [term, setTerm] = useState(null);

  useEffect(() => {
    const songs = async () => {
      if (term !== null) {
        let list = await getSongs(term);
        setSongsList(list.data.data);
      }
    }
    songs()
  }, [term])

  return (
    <>
      <header className="cabecalho">
        <h1 className="titulo">Econtrar a Lyric</h1>
        <div className="input-artista-container">
          <input onChange={(e) => setTerm(e.target.value)} className="input-artista" placeholder="Nome do artista" type='text'></input>
          {/* <button type='submit' className="botao">Pesquisar</button> */}
        </div>
      </header>
      {songsList.length > 1 ?
        <SongList songsList={songsList} />
        :
        <MsgPesquisar/>
      }
    </>
  )
}

export default App;
