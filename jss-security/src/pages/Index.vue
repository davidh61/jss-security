<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title">JSS Security!</h1>
      <div class="content">
        <p>
          Our mission is to provide you bla bla bla
        </p>
        <div class="grid md:grid-cols-2 pb-10">
          <div>
            <h2 class="text-3xl">Our services</h2>
            <ul class="mb-12 list-disc pl-4">
              <li>Lorem ipsum</li>
              <li>Image lazyloading via gridsome builtin functionality</li>
              <li>A simple blog with categories, tags and featured images</li>
            </ul>
          </div>
          <g-image src="~/assets/images/cctv.jpg" width="500" />
        </div>
        <div class="grid md:grid-cols-2">
          <div class="md:order-2">
            <h2 class="text-3xl ">Why choose us</h2>
            <ul class="mb-12 list-disc pl-4">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <g-image src="~/assets/images/cctv.jpg" width="500" class="md:order-1" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>
