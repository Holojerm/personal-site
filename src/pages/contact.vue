<template>
  <div class="contact">
    <h1>Contact Me under construction!</h1>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const validateEmail = (rule, value, callback) => {
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
  validEmail ? callback() : callback(new Error('Please input valid email'))
}

const rules = reactive({
  email: [
    {
      required: true,
      validator: validateEmail,
      trigger: 'blur',
    },
  ],
  message: [
    {
      required: true,
      message: 'Please input message',
      trigger: 'blur',
    },
  ],
})

const onSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      window.open(`mailto:jeremy.ettlinger@gmail.com?subject=${form.name + ' (' + form.email + ') reaching out via website'}&body=${form.message}`)
    } else {
      return false
    }
  })
}
</script>

<style lang="scss">
.contact {
  width: 75%;
  margin: auto;
}
</style>