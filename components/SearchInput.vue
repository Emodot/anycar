<template>
  <div class="search_input">
    <input type="text" placeholder="Search by car by make or model">
    <span class="material-icons-outlined">
      search
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search_input {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #FFFFFC;
  padding: 5px 20px 5px 40px;
  border-radius: 10px;
}

.search_input input {
  width: 100%;
}
</style>
