<template>
  <div class="board">
    <div v-for="(n,i) in 3" :key="i">
      <div v-for="(n,j) in 3" :key="j">
        <Cell :value="board[i][j]"> </Cell>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from './Cell.vue';

export default {
  name: 'Board',
  components: {
    Cell,
  },
  data() {
    return {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board{
  display: flex;
  flex-wrap: wrap;
  width: 204px;
  height: 204px;
}
</style>
