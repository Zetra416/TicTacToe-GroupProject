<template>
  <div class="board">
    <div v-for="(n,i) in 3" :key="i">
      <div v-for="(n,j) in 3" :key="j">
        <Cell @click="moves(i,j)" :value="board[i][j]"> </Cell>
      </div>
    </div>
    <h3 v-if="finished">You Win : {{name}} </h3>
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
      // winCondition: [
      //   [0, 1, 2], [3, 4, 5], [6, 7, 8],
      //   [0, 3, 6], [1, 4, 7], [2, 5, 8],
      //   [0, 4, 8], [2, 4, 6],
      // ],
      finished: false,
      draw: false,
      next: 'x',
      name: '',
      turn: false,
    };
  },
  created() {
    this.$store.dispatch('listenBoard', (data) => {
      this.board = data.board;
      for (let i = 0; i < data.players.length; i += 1) {
        if (data.players[i].name === localStorage.getItem('nickname')) {
          if (data.players[i].turn === true) {
            this.turn = true;
          }
        }
      }
      // if (data.turn === true && this.next === 'o') {
      //   this.next = 'x';
      // } else if (data.turn === true && this.next === 'x') {
      //   this.next = 'o';
      // }
    });
    this.$store.dispatch('boardName', (data) => {
      this.name = data.players;
    });
  },
  methods: {
    moves(x, y) {
      if (this.board[x][y] !== '') {
        return;
      }
      this.board[x][y] = this.next;
      this.$forceUpdate();
      this.$store.dispatch('game', { board: this.board, name: localStorage.getItem('nickname') });
      if (this.checkWin()) {
        this.finished = true;
      } else {
        this.finished = false;
        // this.nextPlayer();
      }
    },
    // nextPlayer() {
    //   this.next = (this.next === 'x' ? 'o' : 'x');
    // },
    checkWin() {
      return (
        this.checkValues(this.board[0])
        || this.checkValues(this.board[1])
        || this.checkValues(this.board[2])
        || this.checkValues([this.board[0][0], this.board[1][0], this.board[2][0]])
        || this.checkValues([this.board[0][1], this.board[1][1], this.board[2][1]])
        || this.checkValues([this.board[0][2], this.board[1][2], this.board[2][2]])
        || this.checkValues([this.board[0][0], this.board[1][1], this.board[2][2]])
        || this.checkValues([this.board[0][2], this.board[1][1], this.board[2][0]]));
    },
    checkValues(values) {
      return this.checkValuesPresent(values) && this.checkValuesMatch(values);
    },
    checkValuesPresent(values) {
      return (values[0] !== '' && values[1] !== '' && values[2] !== '');
    },
    checkValuesMatch(values) {
      return (values[0] === values[1]) && (values[1] === values[2]);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board{
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  height: 250px;
  margin: auto;
  padding: 20px;
}
</style>
