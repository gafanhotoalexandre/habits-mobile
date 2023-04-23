import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "tailwindcss/colors";

interface CheckboxProps extends TouchableOpacityProps {
	title: string;
	checked?: boolean;
}

export function Checkbox({ title, checked = false, ...rest }: CheckboxProps) {
	return (
		<View>
			<TouchableOpacity
				activeOpacity={.7}
				className="flex-row mb-2 items-center"
				{...rest}
			>
				{ checked ?
					<View className="h-8 w-8 rounded-lg bg-green-500 items-center justify-center">
						<Feather
							name="check"
							size={20}
							color={colors.white}
						/>
					</View>
					:
					<View className="h-8 w-8 rounded-lg bg-zinc-900" />
				}

				<Text className="text-white text-base font-semibold ml-3">
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
