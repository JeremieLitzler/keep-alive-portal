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
const projects = computed<Project[]>(() => {
  const urls = import.meta.env[envVariables.URLS].split(envVariables.SEPERATOR)
  const keys = import.meta.env[envVariables.KEYS].split(envVariables.SEPERATOR)
  const values = urls.map((url: string, index: number) => {
    return { url: url.trim(), key: keys[index]?.trim() || '' }
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
          <ProjectStatus v-for="project in projects" :key="project.url" :project />
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
