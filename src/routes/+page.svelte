<script>
	import { goto } from '$app/navigation';
	import { playerStats } from '$lib/store';
	import { getDailyVillains } from '$lib/story';

	const startGame = () => {
		playerStats.set({
			score: 0,
			energy: 100,
			day: 1,
			villains: getDailyVillains(),
			currentVillainIndex: 0,
			gameOver: false
		});

		goto('/game');
	};
</script>

<div class="main-container">
	<h1>🛒 편의점 빌런 퇴치 게임</h1>
	<p>각종 빌런들을 퇴치하며 편의점 근무를 무사히 마쳐보세요!</p>
	<button on:click={startGame}>게임 시작</button>
</div>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background: #222;
		color: white;
		font-family: 'Arial', sans-serif;
		text-align: center;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 20px;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 30px;
	}

	button {
		background: linear-gradient(135deg, #ff7e5f, #feb47b);
		border: none;
		padding: 15px 30px;
		font-size: 1.5rem;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		border-radius: 10px;
		box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
		color: white;
		font-weight: bold;
	}

	button:hover {
		background: linear-gradient(135deg, #feb47b, #ff7e5f);
		transform: scale(1.05);
	}
</style>
