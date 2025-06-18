<!-- ProjectStatus.vue -->
<script setup lang="ts">
import { ref } from 'vue'

import { createClient } from '@supabase/supabase-js'

const props = defineProps<{
  project: {
    url: string
    key: string
  }
}>()

const status = ref<string | null>(null)
const error = ref<string | null>(null)

const supabase = createClient(props.project.url, props.project.key)
const { data, error: errorSupabase } = await supabase
  .from('keep_alive')
  .select('is_set')
  .limit(1)
  .single()

if (errorSupabase) {
  error.value = errorSupabase.message
} else {
  status.value = 'Available'
}
</script>

<template>
  <div class="project-status">
    <p v-if="error">Status of project <{{ props.project.url }}>: ❌ Error - {{ error }}</p>
    <p v-else-if="status === null">⏳ Loading...</p>
    <p v-else>Status of project <{{ props.project.url }}>: ✅ {{ status }}</p>
  </div>
</template>
