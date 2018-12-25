<template>
  <li class="list-group-item command-item">
    <div class="media-body">
      <strong>{{ command }}</strong>
      <p>{{ description }}</p>
    </div>
    <div class="btn-group">
      <button class="btn btn-default">execute</button>
      <button class="btn btn-default">edit</button>
      <button class="btn btn-default">delete</button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'CommandItem',
    props: {
      command: {
        type: String,
        required: true,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style lang="scss" scoped>
  .list-group-item:first-child {
    border-top: 1px solid #ddd;
  }
  .command-item {
    display: flex;
    align-items: center;
    margin: 4px 0;
    border: 1px solid #ddd;
    .media-body {
      flex: 1;
    }
  }
</style>

