export const villains = [
	{
		id: 1,
		name: '단소 살인마',
		description: '단소(리코더)를 들고 다니며 강제로 연주를 들려줍니다.',
		options: [
			{ text: '고객님, 실내에서 연주는 삼가 주세요.', effect: { score: 5, energy: -5 } },
			{ text: '방금 연주한 곡을 맞히면 음료수 할인!', effect: { score: 10, energy: -10 } },
			{ text: '편의점 내 악기 연주 금지입니다.', effect: { score: -5, energy: 0 } }
		]
	},
	{
		id: 2,
		name: '공항 도둑',
		description: '공항에서 돈이 없다고 편의점에서 공짜 음식을 요구하는 손님.',
		options: [
			{ text: '편의점은 복지 시설이 아닙니다.', effect: { score: -5, energy: 5 } },
			{ text: '물 한 병 정도는 드릴 수 있습니다.', effect: { score: 5, energy: -5 } }
		]
	},
	{
		id: 3,
		name: '지갑 깜빡이',
		description: '계산할 때가 되면 지갑을 찾지 못하고 시간을 끄는 손님.',
		options: [
			{ text: '천천히 찾으셔도 됩니다.', effect: { score: 5, energy: -5 } },
			{ text: '뒤에 줄이 길어서 다음 손님 먼저 받을게요!', effect: { score: 10, energy: -10 } }
		]
	},
	{
		id: 4,
		name: '핫바 즉석 조리 요청러',
		description: '핫바를 전자레인지에 3분 동안 돌려달라는 손님.',
		options: [
			{ text: '네, 충분히 익었습니다!', effect: { score: 5, energy: -5 } },
			{ text: '추가로 더 돌려드릴까요?', effect: { score: 10, energy: -10 } }
		]
	},
	{
		id: 5,
		name: '도넛 반값 요청러',
		description: '유통기한이 내일인 도넛을 보고 반값 할인을 요청하는 손님.',
		options: [
			{ text: '정가로만 판매 가능합니다.', effect: { score: -5, energy: 5 } },
			{ text: '오늘은 특별히 10% 할인해드릴게요!', effect: { score: 10, energy: -10 } }
		]
	},
	{
		id: 6,
		name: '1+1 강요러',
		description: '1+1 제품을 보고 하나만 사면 반값이 되는지 물어보는 손님.',
		options: [
			{ text: '1+1은 두 개 구매해야 적용됩니다.', effect: { score: -5, energy: 5 } },
			{ text: '규정상 불가능합니다, 죄송합니다!', effect: { score: 5, energy: -5 } }
		]
	},
	{
		id: 7,
		name: '택배 찾기 귀찮러',
		description: '본인이 주문한 택배인데 직접 찾기 귀찮다며 직원에게 찾아달라고 요구.',
		options: [
			{ text: '고객님, 직접 찾아주시면 감사하겠습니다.', effect: { score: 5, energy: -5 } },
			{ text: '제가 찾아드릴게요!', effect: { score: 10, energy: -10 } }
		]
	}
];

export const gameDays = 7;

export const getDailyVillains = () => {
	let shuffled = [...villains].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, gameDays);
};
