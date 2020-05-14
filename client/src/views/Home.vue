<template>
  <div class="home">
    <h3>Welcome , {{ name }}</h3>
    <button class="btn btn-primary">Create Room</button>
    <!----disini itu ada dashboard---->
    <!---sama dibawahnya ada buat board baru---->
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      name: '',
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
