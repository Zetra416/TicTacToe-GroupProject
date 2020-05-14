<template>
  <div class="home">
    <h3>Welcome , {{ name }}</h3>
    <button v-if="!startGame" type="button" class="btn btn-primary"
    @click.prevent="changeStatus">Create Room</button>
    <Board v-if="startGame"> </Board>

    <div v-if="toggleDelete && !startGame" id="" class="elements">
      <div class="box">
        <h2>Whats Your Room Name?</h2>
        <input type="text" v-model="nameRoom"> <br>
        <button class="btn btn-success" @click="playGame">Yes</button> &nbsp;
        <button class="btn btn-info" @click="closeDelete">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import Board from '../components/Board.vue';

export default {
  name: 'Home',
  components: {
    Board,
  },
  data() {
    return {
      name: '',
      text: '',
      toggleDelete: false,
      nameRoom: '',
      startGame: false,
    };
  },
  created() {
    this.name = localStorage.getItem('nickname');
  },
  methods: {
    changeStatus() {
      this.toggleDelete = true;
    },
    closeDelete() {
      this.toggleDelete = false;
    },
    playGame() {
      this.startGame = true;
    },
  },
};
</script>

<style scoped>
.home{
  padding: 20px;
}
</style>
