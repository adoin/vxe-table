<template>
  <div style="display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;">
   <div style="width: 100%;">默认风格：
     <vxe-tag>abc</vxe-tag>
     <vxe-tag content="老王绿" color="#45adbe"/>
     <vxe-tag content="mini" color="primary" size="mini"/>
     <vxe-tag content="small" color="warning" size="small" icon="vxe-icon-warning-circle"/>
     <vxe-tag content="large" color="error" size="large"/>
     <vxe-tag round>round</vxe-tag>
     <vxe-tag closable>closable</vxe-tag>
   </div>
    <div style="width: 100%;">框线风格：
      <vxe-tag tag-style="outline">abc</vxe-tag>
      <vxe-tag tag-style="outline" content="老王绿" color="#45adbe"/>
      <vxe-tag tag-style="outline" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="outline" content="small" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="outline" content="large" color="error" size="large"/>
      <vxe-tag tag-style="outline" round>round</vxe-tag>
      <vxe-tag tag-style="outline" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">胶囊风格：
      <vxe-tag tag-style="caplet">abc</vxe-tag>
      <vxe-tag tag-style="caplet" content="老王绿" color="#45adbe"/>
      <vxe-tag tag-style="caplet" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="caplet" content="small" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="caplet" content="large" color="error" size="large"/>
      <vxe-tag tag-style="caplet" round>round</vxe-tag>
      <vxe-tag tag-style="caplet" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">虚线风格：
      <vxe-tag tag-style="dashed" content="老王绿" color="#45adbe"/>
      <vxe-tag tag-style="dashed" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="dashed" content="small" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="dashed" content="large" color="error" size="large"/>
      <vxe-tag tag-style="dashed" round>round</vxe-tag>
      <vxe-tag tag-style="dashed" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">标记风格：
      <vxe-tag tag-style="mark">abc</vxe-tag>
      <vxe-tag tag-style="mark" content="老王绿老王绿老王绿老王绿" color="#45adbe"/>
      <vxe-tag tag-style="mark" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="mark" content="small" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="mark" content="large" color="error" size="large"/>
      <vxe-tag tag-style="mark" round>round</vxe-tag>
      <vxe-tag tag-style="mark" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">箭头风格：
      <vxe-tag tag-style="arrow">abc</vxe-tag>
      <vxe-tag tag-style="arrow" content="老王绿老王绿老王绿老王绿" color="#45adbe"/>
      <vxe-tag tag-style="arrow" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="arrow" content="small" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="arrow" content="large" color="error" size="large"/>
      <vxe-tag tag-style="arrow" round>round</vxe-tag>
      <vxe-tag tag-style="arrow" closable>closable</vxe-tag>
    </div>
    <div style="width: 100%;">旗帜风格：
      <vxe-tag tag-style="flag">abc</vxe-tag>
      <vxe-tag tag-style="flag" content="老王绿老王绿老王绿老王绿" color="#45adbe"/>
      <vxe-tag tag-style="flag" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="flag" content="small" color="warning" size="small" icon="vxe-icon-warning-circle"/>
      <vxe-tag tag-style="flag" content="large" color="error" size="large"/>
      <vxe-tag tag-style="flag" round>round</vxe-tag>
      <vxe-tag tag-style="flag" closable>closable</vxe-tag>
    </div>
  </div>
</template>
<script setup lang="ts" name="Tag">
</script>
