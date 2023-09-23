<template>
  <div class="home-page-banner flex">
    <div class="content text-center ">
      <h1 class="page-title">JSS Security Systems Ltd</h1>
      <p>
        Installers of Fire & Security Systems for Domestic & Commercial Premises
      </p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Contact
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.home-page-banner {
  width: 100%;
  height: 450px;
  background-image: url("~@/assets/images/generic-banner.jpg");
  background-size: cover;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;

  .content {
    align-self: flex-end;
  }
}
</style>
