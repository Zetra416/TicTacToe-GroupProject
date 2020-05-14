<template>
  <div class="home">
    <h3>Welcome , {{ name }}</h3>
    <button type="button" class="btn btn-primary"
    data-toggle='modal' data-target='#modal1'>Create Room</button>
    <Board> </Board>

    <div class="modal" id="modal1" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>What your room name?</p>
            <input type="text" v-model="text">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
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
    };
  },
  created() {
    this.name = localStorage.getItem('nickname');
  },
};
</script>

<style scoped>
.home{
  padding: 20px;
}
</style>
