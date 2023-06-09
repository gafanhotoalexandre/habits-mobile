import { TouchableOpacity, TouchableOpacityProps, Dimensions } from 'react-native';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps extends TouchableOpacityProps {}

export function HabitDay({ ...rest }: HabitDayProps) {
	return (
		<TouchableOpacity
			activeOpacity={.7}
			className="bg-zinc-900 border-2 m-1 border-zinc-800 rounded-lg"
			style={{ width: DAY_SIZE, height: DAY_SIZE }}
			{ ...rest }
		/>
	);
}
