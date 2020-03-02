<template> 
<div> 
    <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              VILDMARKEN
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault bodydefault body
            </slot>
          </div>

          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
import Vuex from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'modalV',
  props: {
    msg: String
  },
  computed: mapState({
    smv: state => state.showModalV,
    },
  ),
  methods: {
    close() {
      this.$store.commit('changeModalV');
      this.$emit('close');
    },
  } 
}
</script>
<style scoped>

</style>

})
