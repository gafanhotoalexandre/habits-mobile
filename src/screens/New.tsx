import { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "tailwindcss/colors";

import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

const availableWeekDays = [
	'Domingo',
	'Segunda-feira', 'Terça-feira',
	'Quarta-feira', 'Quinta-feira',
	'Sexta-feira',
	'Sábado'
]

export function New() {
	const [weekDays, setWeekDays] = useState<number[]>([]);

	function handleToggleWeekDay(weekDayIndex: number) {
		if (weekDays.includes(weekDayIndex)) {
			setWeekDays(prevState => prevState
				.filter(weekDay => weekDay !== weekDayIndex));
			return;
		}
		setWeekDays(prevState => [...prevState, weekDayIndex]);
	}

	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}
			>

				<BackButton />

				<Text className="mt-6 text-white text-3xl font-extrabold">
					Criar hábito
				</Text>

				<Text className="mt-6 text-white text-base font-semibold">
					Qual seu comprometimento?
				</Text>

				<TextInput
					className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
					placeholder="ex: Exercícios, dormir bem, etc..."
					placeholderTextColor={colors.zinc[400]}
				/>

				<Text className="font-semibold mt-4 mb-3 text-white text-base">
					Qual a recorrência?
				</Text>

				{availableWeekDays.map((weekDay, index) => (
					<Checkbox
						key={`${weekDay}`}
						title={weekDay}
						checked={weekDays.includes(index)}
						onPress={() => handleToggleWeekDay(index)}
					/>
				))}

				<TouchableOpacity
					className="w-full h-14 mt-6 bg-green-600 rounded-md flex-row items-center justify-center"
					activeOpacity={.7}
				>
					<Feather
						name="check"
						size={20}
						color={colors.white}
					/>
					<Text className="font-semibold text-white text-base ml-2">
						Confirmar
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}
