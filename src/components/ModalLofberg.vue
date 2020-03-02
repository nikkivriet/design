<template> 
<div> 
    <transition name="modal">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Lofberg
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div>Text here</div>
              default bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault bodydefault bodydefault bodydefault body
              default bodydefault bodydefault 
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
  name: 'modalL',
  props: {
    msg: String
  },
  computed: mapState({
    sml: state => state.showModalL,
    },
  ),
  methods: {
    close() {
      this.$store.commit('changeModalL');
      this.$emit('close');
    },
  } 
}
</script>
<style scoped>

</style>

})
