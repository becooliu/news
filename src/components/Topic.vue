<template>
  <div class="topic">
      <div class="topic-item">
        <p class="title">这是话题的标题</p>
        <div class="your-opinions">
          <label for="agree-1"><input type="radio" name="opinion-1" id="agree-1"><span class="num">12</span>人同意</label>
          <label for="disagree-1"><input type="radio" name="opinion-1" id="disagree-1"><span class="num">20</span>人不同意</label>
        </div>
		<p>你选择<i class="opinion">同意</i></p>
      </div>
  </div>
</template>
<script>
export default {
  name: "Topic"
};
</script>
<style lang="scss">
.topic {
  margin: 0 1.5rem;
  .topic-item {
    border-bottom: 0.1rem solid #dadada;
	padding-bottom: 1.5rem;
	.title {
		font-size: 1.6rem;
		color: #333;
		margin-bottom: 1.5rem;
	}
	.your-opinions {
		label {
			display: block;
			line-height: 3rem;
		}
	}
  }
}
</style>
