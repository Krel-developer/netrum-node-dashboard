<script setup lang="ts">
import { Container } from '~/shared/ui'

const isDark = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div :class="{ dark: isDark }">
    <div
      class="p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <Container>
        <!-- Переключатель темы -->
        <div class="flex justify-end mb-4">
          <button
            @click="toggleDark"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
          >
            {{ isDark ? 'Светлая тема' : 'Тёмная тема' }}
          </button>
        </div>

        <!-- Карточки -->
      </Container>
    </div>
  </div>
</template>
