<script setup lang="ts">
import VxeCard from '../../../packages/card/src/card'
import VxeButton from '../../../packages/button/src/button'
import { ref } from 'vue'
import { VxeCardInstance } from '../../../types/card'

const toggleCard = () => {
  cardRef.value?.toggleCollapse()
}
const cardRef = ref<VxeCardInstance>()
const isCollapse = ref(true)
const demoCodes = [
  `
   <vxe-card title="标题" :width="300">
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
    <br/>
    <p>
      <vxe-card title="标题" hover-effect="press">
        悬浮点击效果卡片
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </p>
    <p>
      <vxe-card title="标题" hover-effect="scale">
        悬浮放大效果卡片
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </p>
    <p>
      <vxe-card title="标题" hover-effect="rotate" :rotating-height="450">
        翻转卡片-上下
        <p>正面</p>
        <p>可以放点概览</p>
        <p>注意正反面内容无法限制，所以上下和左右卡片需要设定高度rotating-height</p>
        <p>1</p>
        <p>1</p>
        <template #back>
          <p>我是背面</p>
          <p>可以放点详情</p>
        </template>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </p>
    <p>
      <vxe-card title="标题" hover-effect="rotate" rotate-mode="diagonal" :width="350">
        翻转卡片-斜向
        <p>正面</p>
        <p>可以放点概览</p>
        <p>斜向则不用设置高度，因为要保持宽高比1比1</p>
        <p>1</p>
        <p>1</p>
        <template #back>
          <p>我是背面</p>
          <p>可以放点详情</p>
        </template>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </p>
    <br/>
    <div style="width: 100%; display: flex; gap:2em;align-items: center;">
      <vxe-button @click="toggleCard" status="primary">外部切换展开</vxe-button>
      <vxe-card ref="cardRef" title="标题-点我" transform :width="200" v-model:is-collapse="isCollapse">
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
      <vxe-card ref="cardRef" title="标题悬浮时点我切换固定状态" transform="click-hover" :width="400" v-model:is-collapse="isCollapse">
        动态卡片-悬浮临时展开
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </div>
  `,
  `
  const toggleCard = () => {
  cardRef.value?.toggleCollapse()
}
const cardRef = ref<VxeCardInstance>()
const isCollapse = ref(true)
  `
]
</script>

<template>
  <div style="background: #e0e5ec;padding: 10px 20px;">
    <h2>演示背景色：#e0e5ec</h2>
    <vxe-card title="标题" :width="300">
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
    <br/>
    <p>
      <vxe-card title="标题" hover-effect="press">
        悬浮点击效果卡片
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </p>
    <p>
      <vxe-card title="标题" hover-effect="scale">
        悬浮放大效果卡片
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </p>
    <p>
      <vxe-card title="标题" hover-effect="rotate" :rotating-height="450">
        翻转卡片-上下
        <p>正面</p>
        <p>可以放点概览</p>
        <p>注意正反面内容无法限制，所以上下和左右卡片需要设定高度rotating-height</p>
        <p>1</p>
        <p>1</p>
        <template #back>
          <p>我是背面</p>
          <p>可以放点详情</p>
        </template>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </p>
    <p>
      <vxe-card title="标题" hover-effect="rotate" rotate-mode="diagonal" :width="350">
        翻转卡片-斜向
        <p>正面</p>
        <p>可以放点概览</p>
        <p>斜向则不用设置高度，因为要保持宽高比1比1</p>
        <p>1</p>
        <p>1</p>
        <template #back>
          <p>我是背面</p>
          <p>可以放点详情</p>
        </template>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </p>
    <br/>
    <div style="width: 100%; display: flex; gap:2em;align-items: center;">
      <vxe-button @click="toggleCard" status="primary">外部切换展开</vxe-button>
      <vxe-card ref="cardRef" title="标题-点我" transform :width="200" v-model:is-collapse="isCollapse">
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
      <vxe-card ref="cardRef" title="标题悬浮时点我切换固定状态" transform="click-hover" :width="400"
                v-model:is-collapse="isCollapse">
        动态卡片-悬浮临时展开
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <template #footer>
          <vxe-button type="text">按钮</vxe-button>
        </template>
      </vxe-card>
    </div>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>
    <pre>
      <pre-code class="html">{{ demoCodes[0] }}</pre-code>
      <pre-code class="js">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<style scoped>

</style>
