<template>
  <Layout>
    <section id="container-centre" class="column centre flex-1">
      <h1 class="page-title">JSS Security Systems Ltd</h1>
      <div class="content">
        <p>
          Installers of Fire & Security Systems for Domestic & Commercial Premises
        </p>
        <section class="grid md:grid-cols-2 pb-10 container">
          <div>
            <span class="text-2xl">At JSS, we understand that the safety of your home or business is your top priority. That's why we offer a wide range of fire and security systems that are designed to protect you and your property from fire, theft, and other threats.</span>
          </div>
          <g-image src="~/assets/images/cctv.jpg" width="500" />
        </section>
        <div class="grid md:grid-cols-2">
          <div class="md:order-2">
            <h2 class="text-2xl">Our fire and security systems include:</h2>
            <ul class="mb-12 list-disc pl-4 text-base">
              <li>Fire alarms: These systems detect fire early on and sound an alarm to alert you and your family to evacuate.</li>
              <li>Fire extinguishers: These devices can be used to put out small fires before they get out of control.</li>
              <li>Intruder alarms: These systems detect unauthorized entry into your home or business and sound an alarm to scare away intruders.</li>
              <li>CCTV cameras: These cameras can be used to monitor your property and deter crime.</li>
              <li>Access control systems: These systems control who can enter your property, providing an extra layer of security.</li>
            </ul>
          </div>
          <g-image src="~/assets/images/cctv.jpg" width="500" class="md:order-1" />
        </div>
        <div class="content-center">

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
