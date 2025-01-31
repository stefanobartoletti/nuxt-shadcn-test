<template>
  <div class="container flex items-center gap-8 rounded-lg border p-8">
    <Button>Button</Button>

    <Select>
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">
            Apple
          </SelectItem>
          <SelectItem value="banana">
            Banana
          </SelectItem>
          <SelectItem value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem value="grapes">
            Grapes
          </SelectItem>
          <SelectItem value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          class="w-[280px] justify-start text-left font-normal"
        >
          <CalendarIcon class="mr-2 size-4" />
          {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar v-model="value" initial-focus />
      </PopoverContent>
    </Popover>

    <Slider
      v-model="modelValue"
      :max="100"
      :step="1"
      :class="cn('w-48', $attrs.class ?? '')"
    />
  </div>
</template>

<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { cn } from '@/lib/utils'
import {
  DateFormatter,

  getLocalTimeZone,
} from '@internationalized/date'

import { Calendar as CalendarIcon } from 'lucide-vue-next'

const value = ref<DateValue>()

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const modelValue = ref([50])
</script>
