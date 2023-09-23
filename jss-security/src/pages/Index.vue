<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <div class="grid md:grid-cols-3 gap-3.5 pb-11 container items-center">
        <div class="md:col-span-2">
          <span class="text-xl"
            >At JSS, we understand that the safety of your home or business is
            your top priority. That's why we offer a wide range of fire and
            security systems that are designed to protect you and your property
            from fire, theft, and other threats.</span
          >
        </div>
        <g-image src="~/assets/images/cctv.jpg" width="500" />
      </div>

      <!-- <FiftyFifty text="At JSS, we understand that the safety of your home or business is your
        top priority. That's why we offer a wide range of fire and security
        systems that are designed to protect you and your property from fire,
        theft, and other threats."
        imageFile="~/assets/images/work.jpg"/> -->

      <div class="grid md:grid-cols-3 gap-3.5 pb-11 container items-center">
        <div class="md:order-last md:col-span-2">
          <span class="text-xl"
            >We are a two-person company that specializes in the installation
            and maintenance of fire and security systems for homes and
            businesses. We are committed to providing our customers with the
            highest quality service and products, and we are always available to
            answer your questions and address your concerns.</span
          >
        </div>
        <g-image src="~/assets/images/work.jpg" width="500" />
      </div>
    </section>
  </Layout>
</template>

<script>
// import ContactCta from '~/components/home/Banner.vue'
import FiftyFifty from "~/components/FiftyFifty.vue";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    // Banner
    FiftyFifty,
  },
};
</script>
