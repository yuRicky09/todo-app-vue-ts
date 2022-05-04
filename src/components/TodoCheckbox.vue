<template>
  <label>
    <input
      :checked="modelValue"
      type="checkbox"
      class="peer hidden"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span
      class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-light-gray-blue bg-white peer-checked:bg-gradient-to-br peer-checked:from-[#57ddff] peer-checked:to-[#c058f3]"
    >
      <CheckIcon v-show="modelValue" />
    </span>
  </label>
</template>

<script setup lang="ts">
import CheckIcon from "@/assets/images/icon-check.svg";

// eslint-disable-next-line vue/no-setup-props-destructure
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
defineEmits(["update:modelValue"]);
</script>
