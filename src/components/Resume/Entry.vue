<template>
  <div class="shadow-lg p-3">
    <div class="max-w-screen-lg mx-auto flex flex-row">
      <div class="flex-1">
        <strong><slot name="entity" /></strong>
      </div>
      <i><slot name="dates" /></i>
    </div>
    <div class="max-w-screen-lg mx-auto flex flex-row">
      <div class="flex-1">
        <i><slot name="title" /></i>
      </div>
      <i><slot name="location" /></i>
    </div>
    <p><slot /></p>
  </div>
</template>