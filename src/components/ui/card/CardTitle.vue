<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3
    :class="
      cn('text-3xl font-semibold leading-none tracking-tight text-slate-200', props.class)
    "
  >
    <slot />
  </h3>
</template>
