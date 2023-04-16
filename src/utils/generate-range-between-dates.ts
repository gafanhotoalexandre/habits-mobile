import dayjs from 'dayjs';

export function generateRangeBetweenDates() {
	const startDate = dayjs().startOf('year');
	const today = new Date();

	const dateRange = [];
	let compareDate = startDate;

	while (compareDate.isBefore(today)) {
		dateRange.push(compareDate.toDate());
		compareDate = compareDate.add(1, 'day');
	}

	return dateRange;
}
