<template>
  <div style="display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;">
    <div style="width: 100%;">默认风格：
      <vxe-tag>常用写法</vxe-tag>
      <vxe-tag content="老王绿" color="#45adbe"/>
      <vxe-tag content="萝莉蓝" color="primary" size="mini"/>
      <vxe-tag content="土黄" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag content="大妈红" color="error" size="large"/>
      <vxe-tag round>round</vxe-tag>
      <vxe-tag closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">框线风格：
      <vxe-tag tag-style="outline">常用写法</vxe-tag>
      <vxe-tag tag-style="outline" content="老王绿" color="#45adbe"/>
      <vxe-tag tag-style="outline" content="萝莉蓝" color="primary" size="mini"/>
      <vxe-tag tag-style="outline" content="土黄" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="outline" content="大妈红" color="error" size="large"/>
      <vxe-tag tag-style="outline" round>round</vxe-tag>
      <vxe-tag tag-style="outline" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">胶囊风格：
      <vxe-tag tag-style="caplet">常用写法</vxe-tag>
      <vxe-tag tag-style="caplet" content="老王绿" color="#45adbe"/>
      <vxe-tag tag-style="caplet" content="萝莉蓝" color="primary" size="mini"/>
      <vxe-tag tag-style="caplet" content="土黄" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="caplet" content="大妈红" color="error" size="large"/>
      <vxe-tag tag-style="caplet" round>round</vxe-tag>
      <vxe-tag tag-style="caplet" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">虚线风格：
      <vxe-tag tag-style="dashed" content="老王绿" color="#45adbe"/>
      <vxe-tag tag-style="dashed" content="萝莉蓝" color="primary" size="mini"/>
      <vxe-tag tag-style="dashed" content="土黄" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="dashed" content="大妈红" color="error" size="large"/>
      <vxe-tag tag-style="dashed" round>round</vxe-tag>
      <vxe-tag tag-style="dashed" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">标记风格：
      <vxe-tag tag-style="mark">常用写法</vxe-tag>
      <vxe-tag tag-style="mark" content="老王绿老王绿老王绿老王绿" color="#45adbe"/>
      <vxe-tag tag-style="mark" content="萝莉蓝" color="primary" size="mini"/>
      <vxe-tag tag-style="mark" content="土黄" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="mark" content="大妈红" color="error" size="large"/>
      <vxe-tag tag-style="mark" round>round</vxe-tag>
      <vxe-tag tag-style="mark" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">箭头风格：
      <vxe-tag tag-style="arrow">常用写法</vxe-tag>
      <vxe-tag tag-style="arrow" content="老王绿老王绿老王绿老王绿" color="#45adbe"/>
      <vxe-tag tag-style="arrow" content="萝莉蓝" color="primary" size="mini"/>
      <vxe-tag tag-style="arrow" content="土黄" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="arrow" content="大妈红" color="error" size="large"/>
      <vxe-tag tag-style="arrow" round>round</vxe-tag>
      <vxe-tag tag-style="arrow" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">旗帜风格：
      <vxe-tag tag-style="flag">常用写法</vxe-tag>
      <vxe-tag tag-style="flag" v-model:content="str" editable color="#45adbe"/>
      <vxe-tag tag-style="flag" content="萝莉蓝" color="primary" size="mini"/>
      <vxe-tag tag-style="flag" content="土黄" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="flag" content="大妈红" color="error" size="large"/>
      <vxe-tag tag-style="flag" round>round</vxe-tag>
      <vxe-tag tag-style="flag" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">
      <span> 简单标签组：</span>
      <vxe-tags tag-style="mark" v-model="tagStrList"/>
    </div>
    <div style="width: 100%;">
      <span> 五花八门标签组：</span>
      <vxe-tags tag-style="mark" v-model="tagPropList" creator/>
    </div>
  </div>
</template>
<script setup lang="ts" name="Tag">
import { ref } from 'vue'
import { VxeTagProps } from '../../../types'

const str = ref('实时可编辑文本')
const tagStrList = ref(['a', 'n', 'y'])
const tagPropList = ref<VxeTagProps[]>([
  {
    tagStyle: 'mark',
    content: '吖吖啊'
  },
  {
    tagStyle: 'flag',
    content: '不不不',
    color: 'primary'
  },
  {
    tagStyle: 'arrow',
    content: '出出出',
    color: '#b074d2'
  }
])
</script>
