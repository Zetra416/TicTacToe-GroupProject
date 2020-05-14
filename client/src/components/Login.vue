<template>
  <div class="container">
    <div class="box">
      <h2>TIC TAC TOE</h2>
      <hr>
      <div class="field">
        <label class="title">Nickname</label>
        <input v-model="nickname">
      </div>
      <button class="btn btn-primary" @click="login">Play Game</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      nickname: '',
    };
  },
  methods: {
    login() {
      if (this.nickname === '') {
        Swal.fire({
          title: 'Error!',
          text: 'No name inserted!',
          icon: 'error',
        })
      } else {
        localStorage.setItem('nickname', this.nickname);
        this.nickname = '';
        this.$emit('isLogin');
      }
    },
  },
};
</script>

<style>
.field{
  margin-bottom: .7rem;
  display: flex;
  flex-direction: column;
}
.container{
  width: 100%;
  height: 100%;
  position: absolute;
}
.box{
  padding: 30px;
  top: 50%;
  left: 50%;
  position: absolute;
  background-color: rgba(171, 227, 163, 0.87);
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}
</style>
