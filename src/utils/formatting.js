// Replace hyphens with empty space then title case so the songs don't look like links on the DashboardCards primary prop
// export const songTitleFormatter = songTitle => {
// 	return songTitle[0].replace(/-/g, ' ').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// };
export const songTitleFormatter = songTitle => {
	return `This is ${songTitle}.`;
};