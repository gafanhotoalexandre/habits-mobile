import { View, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/logo.svg';

export function Header() {
	const { navigate } = useNavigation();

	return (
		<View className="w-full flex-row items-center justify-between">
			<Logo />

			<TouchableOpacity
				activeOpacity={.7}
				className="flex-row items-center h-11 px-4 border border-sky-500 rounded-lg"
				onPress={() => navigate('new')}
			>
				<Feather
					name="plus"
					color={colors.sky[500]}
					size={20}
				/>

				<Text className="text-white font-semibold text-base ml-3">
					Novo
					</Text>
			</TouchableOpacity>
		</View>
	);
}
