<script>
	import { playerStats } from '$lib/store';

	let { score, energy } = $playerStats;
</script>

<div class="end-screen">
	<h1>🎉 게임 종료!</h1>
	<p>최종 점수: {score}</p>
	<p>최종 체력: {energy}</p>

	{#if score >= 50}
		<p>✨ 당신은 최고의 편의점 직원이 되었습니다! ✨</p>
	{:else if score >= 20}
		<p>😐 무난한 근무를 마쳤습니다. 다음엔 더 잘해볼까요?</p>
	{:else}
		<p>😭 너무 많은 실수를 해서 해고되었습니다...</p>
	{/if}

	<a href="/" class="button">🏠 메인 화면으로</a>
</div>

<style>
	.end-screen {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background: #333;
		color: white;
		font-family: 'Arial', sans-serif;
		text-align: center;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
	}
</style>
