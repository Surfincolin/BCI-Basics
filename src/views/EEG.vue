<template>
  <div class="eeg article">
    <h1>EEG - Electroencephalogram</h1>
		<p>An encephalogram is an recording electrical activity in brain. Electroencephalogram is an electrical recording of the electrical activity in the brain.</p>
		<h2>Wait, why is there electricity in my brain?</h2>
		<p>Your brain is made up of a bunch of cells, and the primary cell of the brain is the neuron. There are around 86 billion neurons in the brain. Each neuron kind of looks like a tree with branches called dendrites and trunks called axons. Neurons are connected to each other via there branches. Specifically, little buttons called synapses make all the connections. Each neuron is estimated to have around 7 thousand synaptic connections. So when you do the math, there is a ton of cells in the brain with a ton of connections to each other.</p>
		<h2>Electricity!?!</h2>
		<p>Neurons work by changing their ion concentration, and ion are charged particles. Think of it like salt water flowing in and out of the cells. As these concentrations change, a chain reaction can happen where so many ions gather that you have a measurable electrical spike. Nothing like your wall sockets in your home but around 40 millivolts. The cool part is the chain reaction in once neuron can extend on into other neurons, and then you might have a whole group of neurons firing (repeated electrical spiking).</p>
		<p>With enough of these neurons firing at the same time, an electrical field can be emitted. Fields may seem a bit mysterious but you can think of them in the same way as magnets. The force between magnets is invisible but you know it exists based off the attraction or repulsion between two magnets that you can feel. If you are familiar with the physics of it, you know magnets and electricity are actually one and the same. The electric field will bounce around and eventually portions of that electric field will make it through the skull and to the scalp. These fields are really really small, in the microvolts range.</p>
		<p>With a metal electrode place on the scalp we can actually measure these small voltages. We need some fancy amplifiers, but those are often built into the device measuring the voltages. From there we can take those values and study them or uses them in a <router-link to="/bci">BCI application</router-link>.</p>
		<p>There is an important piece of information to know about EEG and that is that the measurements are not specific to a single neuron. The voltages are a result of a conglomeration of neurons firing, resulting in electric fields large enough to make it to the scalp. So we can think of the activity recorded as a generalized activity for a particular region of the brain.</p>
		<p>EEG is really an amazing technology and it can be used to understand the brain further and it is even detailed enough to use it as a controller in application. With enough electrodes recording an EEG signal you can actually distinguish whether an individual is thinking about moving their left hand or right hand.</p>

    <img id="brain-img" alt="Vue logo" srcset="../assets/eeg-man.png 4x">
    <p>Not me...</p>
  </div>
</template>