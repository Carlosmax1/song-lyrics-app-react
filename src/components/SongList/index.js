import react from "react";
import { useEffect, useState } from "react";
import apiClient from "../../config/http";
import './index.css';

export default function SongList({ songsList }) {

	const [key, setKey] = useState(null);
	const [lyrics, setLyrics] = useState(null);

	const getLyric = async (songsList, key) => {
		const res = apiClient.get(`v1/${songsList[key].artist.name}/${songsList[key].title}`)
		return res;
	}

	useEffect(() => {
		const lyrics = async () => {
			let list = await getLyric(songsList, key);
			setLyrics(list);
		}
		lyrics();
	}, [key, songsList])

	console.log(lyrics);

	return (
		<>
			<div className="songs-container">
				{songsList.map((item, key) => (
					<li key={key} className="songs">{item.artist.name} - {item.title}
						<button onClick={() => setKey(key)} className="botao-letra">Ver letra</button>
					</li>
				))}
				{lyrics !== null && (
					<>
						<div className="letra-container">
						<span className="letra">{lyrics.data.lyrics}</span>
						</div>
					</>
				)}

			</div>
		</>
	)
}