<template> 
<div> 
    <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              PHOTO
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
  name: 'modalP',
  props: {
    msg: String
  },
  computed: mapState({
    smp: state => state.showModalP,
    },
  ),
  methods: {
    close() {
      this.$store.commit('changeModalP');
      this.$emit('close');
    },
  } 
}
</script>
<style scoped>

</style>

})
