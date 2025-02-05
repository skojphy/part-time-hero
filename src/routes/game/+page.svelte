<script>
	import { playerStats, applyChoice } from '$lib/store';

	let score, energy, day, villains, currentVillainIndex, gameOver;

	$: ({ score, energy, day, villains, currentVillainIndex, gameOver } = $playerStats);
</script>

<div class="game-container">
	{#if gameOver}
		<div class="end-screen">
			<h1>📢 게임 종료!</h1>
			<p>최종 점수: {score}</p>
			<p>최종 체력: {energy}</p>
			<a href="/" class="button">🏠 메인 화면으로</a>
		</div>
	{:else}
		<h1>🛒 편의점 빌런 퇴치</h1>
		<h2>근무일 {day} / 7</h2>
		<h3>현재 빌런: {villains[currentVillainIndex].name}</h3>
		<p>{villains[currentVillainIndex].description}</p>

		{#each villains[currentVillainIndex].options as option}
			<button on:click={() => applyChoice(option)}>{option.text}</button>
		{/each}

		<p>📝 점수: {score} | ⚡ 체력: {energy}</p>
	{/if}
</div>

<style>
	.game-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background: #222;
		color: #fff;
		font-family: 'Arial', sans-serif;
		text-align: center;
		padding: 20px;
	}

	.end-screen {
		background: #333;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
		text-align: center;
	}

	button {
		background: linear-gradient(135deg, #ff7e5f, #feb47b);
		border: none;
		padding: 12px 20px;
		margin: 10px;
		font-size: 1.2rem;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		border-radius: 8px;
		box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
		color: white;
		font-weight: bold;
	}

	button:hover {
		background: linear-gradient(135deg, #feb47b, #ff7e5f);
		transform: scale(1.05);
	}
</style>
