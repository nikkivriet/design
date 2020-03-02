<template> 
<div> 
    <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
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
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')"> OK </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>


export default {
  name: 'modal',
  props: {
    msg: String
  },
  data: {
    showModal: false
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

})
