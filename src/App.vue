<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import { ref, computed, type Ref } from 'vue'
import ProjectStatus from './components/ProjectStatus.vue'

type Project = {
  url: string
  key: string
  isAlive?: boolean
}
type KeepAliveResponse = {
  is_set: boolean
}
const envVariables = {
  URLS: 'VITE_SUPABASE_URLS',
  KEYS: 'VITE_SUPABASE_KEYS',
  SEPERATOR: '|',
}
const projects = computed<Project[] | string>(() => {
  const keysStrEnv = import.meta.env[envVariables.KEYS]
  const urlsStrEnv = import.meta.env[envVariables.URLS]
  console.log('import.meta.env[envVariables.KEYS]', keysStrEnv)
  console.log('import.meta.env[envVariables.URLS]', urlsStrEnv)

  if (keysStrEnv === undefined || urlsStrEnv === undefined) {
    return ' ⚠️⚠️⚠️ Environment variables undefined... Add a .env file using .env.prod starter file. ⚠️⚠️⚠️'
  }
  const urlsArr = urlsStrEnv.split(envVariables.SEPERATOR)
  const keysArr = keysStrEnv.split(envVariables.SEPERATOR)
  const values = urlsArr.map((url: string, index: number) => {
    return { url: url.trim(), key: keysArr[index]?.trim() || '' }
  })
  console.log('projects', values)

  return values
})
</script>

<template>
  <main>
    <h1>Keep Supabase Nano Project Alive</h1>
    <Suspense>
      <template #default>
        <main class="project-grid">
          <div v-if="typeof projects === 'string'">
            {{ projects }}
          </div>
          <ProjectStatus v-else v-for="project in projects" :key="project.url" :project />
        </main>
      </template>

      <template #fallback>
        <div class="loading-overlay">⏳ Loading all project statuses...</div>
      </template>
    </Suspense>
  </main>
</template>
<style>
.project-grid {
  display: grid;
  gap: 1rem;
  padding: 2rem;
}

.loading-overlay {
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
}
</style>
