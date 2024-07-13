import songs from './data/songs.json'

type SongData = {
	artist: string
	date: string
	title: string
	YTlink: string
}

const songsData: SongData[] = songs

const songsListContent = songsData.map((song, index) => {
	const row = document.createElement('tr')
	const indexCell = document.createElement('td')
	const artistCell = document.createElement('td')
	const linkCell = document.createElement('td')
	const titleCell = document.createElement('td')
	const linkElement = document.createElement('a')

	linkElement.innerText = song.YTlink
	linkElement.setAttribute('href', song.YTlink)
	linkElement.setAttribute('target', '_blank')
	linkCell.append(linkElement)

	indexCell.classList.add('index-cell')
	indexCell.innerText = `${index + 1}.`

	artistCell.innerText = song.artist
	titleCell.innerText = song.title

	row.append(indexCell, artistCell, titleCell, linkCell)
	row.setAttribute('id', `song-${index}_${song.date}`)

	return row
})

document.querySelector('#songs-list tbody')?.append(...songsListContent)
