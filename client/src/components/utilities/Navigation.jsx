import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HelpIcon from '@mui/icons-material/Help';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

/**
 * 
 * Navigation bar on the top of the page
 * 
 * User can go to a different page by click the navigation bar
 * 
 */
class Navigation extends React.Component {
	render () {
		return <BottomNavigation
			value={this.props.currentPage}
			showLabels={true}
			onChange={(event, newPage) => {
				this.props.switchPage(this.props.currentPage, newPage);
			}}
			>
			<BottomNavigationAction label="Play" value="PlayPage" icon={<SportsEsportsIcon />} />
			<BottomNavigationAction label="Instructions" value="InstructionsPage" icon={<HelpIcon />} />
			<BottomNavigationAction label="Stats" value="StatsPage" icon={<EqualizerIcon />} />
			<BottomNavigationAction label="Profile" value="ProfilePage" icon={<AssignmentIndIcon />} />
			<BottomNavigationAction label="Logout" value="Logout" icon={<ExitToAppIcon />} />
		</BottomNavigation>
	}
}

Navigation.defaultProps = {
	switchPage: {},
	currentPage: "PlayPage"
};

export {Navigation};