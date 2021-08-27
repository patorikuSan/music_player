import React from 'react';
import './css/player.css';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { blueGrey } from '@material-ui/core/colors';

function App() {
	const play_song = () => {
	const audio_player = document.getElementsByClassName("music_source")[0];
	// audio_player.play();
	};
	return (
	<div style={{
			borderRadius: 9,
			width: 400,
			marginLeft: 400,
			backgroundColor: "rebeccaPurple",
			color: 'whiteSmoke',
			display: "flex",
			flexDirection: "column"
			}}>
		<h3 style={{marginLeft: 100}}>Patrick's Music Player</h3>
		<Card><div style={{ display: "flex", flexDirection: "column", }}>
				<CardContent style={{ marginLeft: 120	}} >
						<Typography style={{ fontSize: 30}}> Song Title </Typography>
						<Typography style={{ marginLeft: 35	}} variant="subtitle1" color="textSecondary">Artist</Typography>
				</CardContent>
				<div style={{ boxShadow: 20, marginLeft: 117, display: "flex", alignItems: "center", }}>
							<IconButton>
								{useTheme().direction !== "rtl" ? (<SkipPreviousIcon />) : (<SkipNextIcon />)}
							</IconButton>
							<IconButton>
									<PlayArrowIcon style={{ height: 43, width: 43,}} onClick={play_song} />
							</IconButton>
							<IconButton>
											{useTheme().direction !== "rtl" ? (<SkipNextIcon />) : (<SkipPreviousIcon />)}
							</IconButton>
						</div>
					</div>
						<audio className="music_source">
							<source src="">
								
							</source>
						</audio>
		</Card>
	</div>
	);
}
export default App;
