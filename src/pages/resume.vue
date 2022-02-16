<template>
  <div class="text-bittersweet-800 dark:text-orient-300">
    <h1 class="mb-3">Resumé in progress</h1>
    <Section>
      <template #title>Experience</template>
      <Entry>
        <template #entity>FactSet Research Systems</template>
        <template #dates>July 2020 - January 2022</template>
        <template #title>Software Engineer II</template>
        <template #location>Remote</template>
        <template #default>
          <ul>
            <li>Enhance and maintain FactSet's user interface libraries</li>
          </ul>
        </template>
      </Entry>
    </Section>
    <Section>
      <template #title>Education</template>
      <Entry>
        <template #entity>Rensselaer Polytechnic Institute</template>
        <template #dates>August 2017 - May 2020</template>
        <template #title>B.S. in Computer Science</template>
        <template #default>Dual Degree with Computer Science</template>
      </Entry>
    </Section>
  </div>
</template>