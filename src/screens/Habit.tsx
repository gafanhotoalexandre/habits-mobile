import { View, ScrollView, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import dayjs from "dayjs";

import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";

interface HabitParams {
	date: string;
}

export function Habit() {
	// pegando a 'prop' enviada por parâmetro
	const route = useRoute();
	const { date } = route.params as HabitParams;

	const parsedDate = dayjs(date);
	const dayOfWeek = parsedDate.format('dddd');
	const dayAndMonth = parsedDate.format('DD/MM');

	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				<BackButton />

				<Text className="mt-6 text-zinc-400 text-base font-semibold lowercase">
					{dayOfWeek}
				</Text>

				<Text className="text-white text-3xl font-extrabold">
					{dayAndMonth}
				</Text>

				<ProgressBar progress={75} />

				<View className="mt-6">
					<Checkbox
						title="Beber 2L de água"
					/>
					<Checkbox
						title="Dormir bem"
						checked
					/>
				</View>
			</ScrollView>
		</View>
	);
}
