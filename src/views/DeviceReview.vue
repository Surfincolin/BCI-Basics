<template>
  <div class="review article">
    <h1>Device Review</h1>
    <p>Wonder what BCI device to get? There are so many choices. Is one device better than the others? Let me help shed a little light on the two devices I have experience with.</p>
    <h3><a href="https://store.neurosky.com/pages/mindwave" target="_blank">Mindwave: NeuroSky</a></h3>
    <p><img class="review-img" srcset="../assets/mindwave.png 2x"></p>
    <p>The Mindwave is probably the most affordable entry point into owning an actual EEG device. Unfortunately, Neurosky doesn't have the best reputation among the BCI community as there were clams that they weren't even EEG devices. They do work, and with a little bit of coding you can actually get raw readings off the device.</p><p>I have the version one which was designed for kids, but they now have a version 2 for adults. Which is good as the older version was kind of painful to where. I actually end up modifying it with a headband so it would fit better.</p><p>The Mindwave is targeted toward meditation and focus games and applications. Outside of those areas, I have yet to see a really solid classification application. But that doesn't mean you can't build one!</p>
    <h3><a href="https://shop.openbci.com/collections/frontpage/products/cyton-biosensing-board-8-channel?variant=38958638542" target="_blank">Cyton: OpenBCI</a></h3>
    <p><img class="review-img" srcset="../assets/cyton.png 1x"></p>
    <p>This device is a bit more expensive. You are looking at around $400, unless you purchase its little brother the Ganglion. The Cyton has 8 channels and is targeted toward the diy community. They do get used in school, but are not yet considered as reliable as research grade devices.</p><p>OpenBCI is completely open source which is fantastic. You can actually download the gerber files(circuit board design files) and customize your own BCI device. Along with the open source comes a great community with tones of information to help get you up and running.</p><p>The device can be a bit unwieldy without all the extras they sell on the OpenBCI site. An ideal setup with the Cyton would have the 3D printed headset and active dry electrodes, but the price quickly climbs to $1,000 and above.</p><p>If you are serious about BCI, you can use a Cyton as a great entry point and learn about the nature of EEG recordings and how sensitive they can be. This will help you learn to setup electrode and filter incoming signals to attain usable data. With good data you can start building machine learning models and start classifying motor movements.</p>
    <h3>Everything else</h3>
    <p>There are resource to completely build your own EEG device from scratch. You will gain an electrical engineering degree along the way. As for the clinical devices, they are going to be fairly expensive, so unless you have some connections or find a used device, your gonna need a couple grand to buy one.</p><p>Who needs a device!! Yes, you might not need a device to get started working with BCIs. There is plenty of EEG dataset out there for free. Search for EEG competition data. The great thing about this data is that it has been meticulously gathered on clinical equipment!! So you can go to town developing your state of the are mind reading algorithms.</p>
  </div>
</template>

<style lang="scss">
    .review-img {
        width: 30%;
        // float: left;
        padding: 20px;
    }
    
</style>