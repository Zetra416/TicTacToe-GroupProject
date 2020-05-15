<template>
  <div class="cell" @click="$emit('click')">
      <span v-if="value !== ''"> {{value}} </span>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: ['value'],
  data() {
    return {
      choice: [],
      inputChoice: '',
    };
  },
  created() {
    // socket.on('player-choice', data => {
    //   console.log("data dari server");
    //   const dataChoice= { content: data.content, sender:'other'}
    //   this.choice.push(dataChoice)
    // })
  },
  methods: {
    // sendChoice() {
    //   //atau pake const dataInpu = {content: this.inputChoice, sender:'myself'}
    //   this.choice.push(this.inputChoice)
    //   socket.emit(' player choice ', this.inputChoice)
    // },
    // watch: {
    //   opponent(){
    //     this.dataInput = 'X'
    //     socket.emit('opponent turn')
    //   }
    // }
    //     <!--send client response into server-> >>>>template pilih cel bosque
    // <form @submit.prevent="sendChoice">
    //   <div class="playerChoice">
    //     <ul v-for="(choice, index) in player choice" :key="index"></ul>
    //   </div>
    // </form>

    // <div v-if="sender == 'myself'"> //cara ke 2 //kalo mau hasil jadi x atau o ?

    // </div>
  },
};
</script>

<style>
.cell{
    width: 64px;
    height: 64px;
    border: 2px solid rgb(75, 75, 75);
    font-size: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
