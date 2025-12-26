<script lang="ts" setup>
import { Card, Container } from '~/shared/ui'
</script>

<template>
  <Container class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <!-- Total Nodes -->
    <Card
      ><div class="relative w-20 h-20 flex-shrink-0">
        <!-- SVG круговой диаграммы -->
        <svg class="w-full h-full" viewBox="0 0 36 36">
          <circle
            class="text-gray-300 dark:text-gray-600"
            stroke-width="3.8"
            stroke="currentColor"
            fill="none"
            cx="18"
            cy="18"
            r="15.9155"
          />
          <circle
            class="text-green-500"
            stroke-width="3.8"
            stroke-linecap="round"
            stroke-dasharray="50, 50"
            stroke-dashoffset="25"
            stroke="currentColor"
            fill="none"
            cx="18"
            cy="18"
            r="15.9155"
          />
        </svg>
        <div
          class="absolute inset-0 flex items-center justify-center text-xl font-semibold"
        >
          80
        </div>
      </div>
      <div>
        <div class="flex items-center space-x-2 mb-2">
          <!-- Иконка -->
          <svg
            class="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20h.01M4 4h16v16H4V4z"
            />
          </svg>
          <h2 class="text-lg font-semibold">Total Nodes</h2>
        </div>
        <p class="text-2xl font-bold">150</p>
      </div>
    </Card>
    <!-- Active Nodes -->
    <Card>
      <svg
        class="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <div>
        <h2 class="text-lg font-semibold">Active Nodes</h2>
        <p class="text-2xl font-bold">120</p>
      </div>
    </Card>

    <!-- Inactive Nodes -->
    <Card
      ><svg
        class="w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
      <div>
        <h2 class="text-lg font-semibold">Inactive Nodes</h2>
        <p class="text-2xl font-bold">30</p>
      </div></Card
    >

    <!-- Total Tasks -->
    <Card>
      <svg
        class="w-6 h-6 text-purple-600"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12h6m-6 4h6m-6-8h6"
        />
      </svg>
      <div>
        <h2 class="text-lg font-semibold">Total Tasks</h2>
        <p class="text-2xl font-bold">45</p>
      </div>
    </Card>
  </Container>
</template>

<style scoped lang="sass"></style>
