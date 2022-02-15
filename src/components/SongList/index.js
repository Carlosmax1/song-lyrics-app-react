import react from "react";
import { useEffect, useState } from "react";
import apiClient from "../../config/http";
import Modal from 'react-modal';
import './index.css';

Modal.setAppElement('#root');

export default function SongList({ songsList }) {

	const [key, setKey] = useState(null);
	const [lyrics, setLyrics] = useState(null);
	const [modalIsOpen, setIsOpen] = useState(false);

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
		setIsOpen(true);
	}, [key, songsList]);

	const closeModal = () => {
		setIsOpen(false);
	}

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
						<Modal
							isOpen={modalIsOpen}
							onRequestClose={closeModal}
						>
							<div className="letra-container">
								<span className="letra">{lyrics.data.lyrics}</span>
								<button onClick={() => closeModal()}>Fechar</button>
							</div>
						</Modal>

					</>
				)}

			</div>
		</>
	)
}