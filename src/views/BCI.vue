<template>
  <div class="bci article">
    <h1>BCI or Brain Computer Interface</h1>
    <p>As the keyboard and mouse are the interface for your hands to control the computer, the BCI is the interface for your brain to control the computer. There are many ways you can build a BCI, but the core principle is to take brain activity from its user and use that to control a computerized system.</p>
    <p>Anybody can use a BCI, but they are currently used a lot in the medical field. They can allow an individual, who has lost motor controls, the ability to use a computer. Or, in the gaming world, they can be used to give a player additional abilities based off of their mental focus and attention.</p>
    <h2>Using EEG for BCI Applications</h2>
    <p>When you first see EEG recordings, you may wonder how anything useful can be pulled them.</p>
    <p><img class="art-img" srcset="../assets/EEG@2x.png 2x"></p>
    <p>If we apply some filter we can clean up the noise in the signal quite a bit. You can think of these like equalizers for music. We want to remove some bass and higher notes, so we can hear the vocals.</p>
    <p><img class="art-img" srcset="../assets/EEG-filtered@2x.png 2x"></p>
    <p>Cool! That is already looking a lot better. At this point any additional processing you do to the EEG recording is generally done to express hidden characteristic that we can't see with our eyes. For example, if we were developing a game that utilizes your focus and attention, we might want to see the levels of different brain rhythms. Rhythms have been found to characterize different states of awake and sleep. So if we have the computer crunch the numbers a bit we can get information like this.</p>
    <p><img class="art-img" srcset="../assets/Power-chart@2x.png 2x"></p>
    <p>We can see that the alpha levels are kind of low. Alpha levels have been associated with relaxation, so we might be able to say the player is not currently relaxed. Maybe part of your game can require an individual to be relaxed in order to cast a spell, or steady their aim.</p>
    <h2>You can actually develop your own BCI!</h2>
    <ol>
			<li><router-link to="/review">Buy a EEG device.</router-link></li>
			<li><router-link to="/resources">Write some code!</router-link></li>
			<li>Connect it to your application of choice.</li>
    </ol>
    <p>Of course I am simplifying it a bit, but given more and more people have coding skills, their is a good chance you could build one as a weekend project. If you are not the programming type, their are existing devices to use in gaming and many more coming soon. <a href="https://www.next-mind.com/" target="_blank">Nextmind</a> is a device that is already available and they are creating an ecosystem for developers to easily connect there device to games and in home control systems. One more system to keep your eyes on is <a href="https://galea.co/" target="_blank">Galea</a> which is being developed by Valve (Half-life games!) with collaboration from OpenBCI.</p>
  </div>
</template>

<style lang="scss">
	.art-img {
		width: 90%;
	}
</style>