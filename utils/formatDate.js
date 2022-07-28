export function formatDate(date, format) {
	const d = new Date(date);
	let month = `${d.getMonth() + 1}`;
	let day = `${d.getDate()}`;
	const year = d.getFullYear();

	if (month.length < 2) month = `0${month}`;
	if (day.length < 2) day = `0${day}`;

	if (format === 'dd.mm.yyyy') return [day, month, year].join('.');
	return [year, month, day].join('-');
}
