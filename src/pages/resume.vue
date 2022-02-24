<template>
  <div class="text-bittersweet-800 dark:text-orient-300 px-10">
    <h1 class="text-bittersweet-700 dark:text-orient-400 font-bold mb-3">Jeremy Ettlinger's Resumé</h1>
    <Section>
      <template #title>Experience</template>
      <Entry>
        <template #entity>FactSet Research Systems</template>
        <template #dates>July 2020 - January 2022</template>
        <template #title>Software Engineer II</template>
        <template #location>Remote</template>
        <template #default>
          <ul class="list-disc pl-6">
            <li>Enhanced and maintained FactSet's internal user interface (UI) libraries using HTML, CSS, Typescript, and Vue.js.</li>
            <li>Built out dozens of components for FactSet's new UI library, focusing on accessibility, responsiveness, and adaptability.</li>
            <li>Practiced Agile/Kanban on a large team of product managers, designers, and engineers to optimize processes and production.</li>
            <li>Tested the libraries using Cypress for end-to-end testing, Gemini for image testing, and Jest for unit testing.</li>
            <li>Upgraded the team's CI/CD from Jenkins to Github Actions.</li>
            <li>Documented the libraries on a markdown website with demos and APIs for design, product, and engineering.</li>
            <li>Provided ongoing support to several other teams using the libraries.</li>
          </ul>
        </template>
      </Entry>
    </Section>
    <Section>
      <template #title>Education</template>
      <Entry>
        <template #entity>Rensselaer Polytechnic Institute</template>
        <template #dates>August 2017 - May 2020</template>
        <template #title>Dual B.S. in Computer and Systems Engineering & Computer Science</template>
        <template #location>Troy, NY USA</template>
      </Entry>
    </Section>
    <Section>
      <template #title>Skills</template>
      <Entry>
        <template #entity>Proficient</template>
        <template #default>HTML; CSS; JavaScript/TypeScript; Vue; Python; Git; Jenkins; Github Actions; Cypress; Gemini; Jest;</template>
      </Entry>
      <Entry>
        <template #entity>Moderate</template>
        <template #default>C/C++; Java; Angular; React; TensorFlow; Keras; PyTorch; R;</template>
      </Entry>
    </Section>
  </div>
</template>