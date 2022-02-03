import react from "react";
import './index.css'

export default function SongList({ songsList }) {

	return (
		<>
			<div className="songs-container">
				{songsList.map((item, key) => (
					<li key={key} className="songs">{item.artist.name} - {item.title}
						<button className="botao-letra">Ver letra</button>
					</li>
				))}
			</div>
		</>
	)
}