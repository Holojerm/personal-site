<template>
  <div class="flex flex-col text-center text-bittersweet-900 dark:text-orient-100 mb-6">
    <img class="rounded-full w-60 border-bittersweet-500 border-3 dark:border-orient-500 self-center" src="../assets/profilepic.jpeg" />
    <h1 class="text-bittersweet-600 dark:text-orient-400 px-4 lg:px-0 m-4">Hey, I'm Jeremy</h1>
    <p>Welcome to my website!  I'm not a big fan of titles, but I've done software engineering for a monetary reward.  You get the idea.  On this site you can find my <a href="/projects">projects</a>, <a href="/writings">writings</a>, and a way to <a href="/contact">contact me</a>.  Take a look around, relax, and stay a while.</p>
    <h2>What I'm Up To</h2>
    <p><i>Updated 2-24-2022</i></p>
    <p>I left my job at FactSet to pursue my interests in crypto, web3, and data science.</p>
    <p><strong>Crypto</strong>: I am currently reading David Wong's <i>Real World Cryptography</i> to develop a foundational understanding of applied cryptography.</p>
    <p><strong>Web3</strong>: Planning a series of projects to develop my Solidity and Cairo skills.  I am also following Crypto Twitter as well as various Discords to find my place in the Web3 ecosystem.</p>
    <p><strong>Data Science</strong>: I am currently reading François Chollet's <i>Deep Learning with Python</i> to refresh my domain knowledge.  I plan on completing several Kaggle competitions and am considering participating in a Data Science bootcamp.</p>
    <p>I am developing this personal site to showcase my projects, skills, and ideas.  I welcome any and all feedback.  Thank you for reading!</p>
    <h2>About Me</h2>
    <p>Other Interests</p>
    <ul>
      <li><i>Sports</i>: Scuba Diving, Basketball, Football (Soccer), Spikeball, Running</li>
      <li><i>Movies</i>: Pixar, The Dark Knight Trilogy, Inglorious Basterds</li>
      <li><i>Music</i>: Indie, Alternative Rock, Hip Hop</li>
      <li><i>Subjects</i>: Neuroscience, Economics, Pyschology</li>
    </ul>
    <p>Optimizations: I try my best to...</p>
    <ul>
      <li>Live a minimalist lifestyle.  Less is more.</li>
      <li>Be carbon negative.  Regenerative systems are the goal.</li>
      <li>Maintain a growth mindset.  Win and help win.</li>
      <li>Avoid dopamine and glucose spikes.  I want to be here forever.</li>
    </ul>
    <h2>My Timeline</h2>
    <ul>
      <li>Born in 1999.  A new challenger approaches.</li>
      <li>Started participating in Math Olympiads in 2009</li>
      <li>Began attending a YMCA sleepaway camp in 2011.  Fostering my love and appreciation for nature.</li>
      <li>Interest in Computer Science and Self-Driving Cars piqued in 2015</li>
      <li>Graduated High School in 2017.  Off to a STEM school.</li>
      <li>Graduated University in 2020.  Happy to have a job during a pandemic.</li>
      <li>Worked at FactSet until early 2022.  Taking a bet on myself.</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
h2 {
  @apply m-3;
}

p, ul {
  @apply mb-2 align-baseline text-justify max-w-200 w-full mx-auto px-4;
}

ul {
  @apply list-disc pl-12;
}

a {
  @apply underline;
}
</style>
