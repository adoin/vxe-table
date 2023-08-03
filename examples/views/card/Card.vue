<script setup lang="ts">
import VxeCard from '../../../packages/card/src/card'
import VxeButton from '../../../packages/button/src/button'
import { ref } from 'vue'
import { VxeCardInstance } from '../../../types/card'
const toggleCard = () => {
  cardRef.value?.toggleCollapse()
}
const cardRef = ref<VxeCardInstance>()
const isCollapse = ref(false)
</script>

<template>
  <div style="display:flex;flex-wrap:wrap;width: 100%;gap:18px;align-items: flex-start;justify-content: space-around;">
    <vxe-card style="width: 120px;height: 40px;">
      简单卡片
    </vxe-card>
    <vxe-card title="标题">
      标题页脚卡片
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <template #footer>
        <vxe-button type="text">按钮</vxe-button>
      </template>
    </vxe-card>
    <vxe-card ref="cardRef" title="标题" transform v-model:is-collapse="isCollapse">
      动态卡片
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <template #footer>
        <vxe-button type="text">按钮</vxe-button>
      </template>
    </vxe-card>
    <vxe-button @click="toggleCard">外部切换</vxe-button>
    <vxe-card title="标题" hover-effect="rotate">
      翻转卡片
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <template #back>
        <p>我是背面</p>
      </template>
      <template #footer>
        <vxe-button type="text">按钮</vxe-button>
      </template>
    </vxe-card>
  </div>
</template>

<style scoped>

</style>
