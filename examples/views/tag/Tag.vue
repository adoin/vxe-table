<template>
  <div style="display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;">
   <div style="width: 100%;">默认风格：
     <vxe-tag>abc</vxe-tag>
     <vxe-tag content="老王绿" color="#45adbe"/>
     <vxe-tag content="mini" color="primary" size="mini"/>
     <vxe-tag content="small" color="warning" size="small"/>
     <vxe-tag content="large" color="error" size="large"/>
   </div>
    <div style="width: 100%;">框线风格：
      <vxe-tag tag-style="outline">abc</vxe-tag>
      <vxe-tag tag-style="outline" content="老王绿" color="#45adbe"/>
      <vxe-tag tag-style="outline" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="outline" content="small" color="warning" size="small"/>
      <vxe-tag tag-style="outline" content="large" color="error" size="large"/>
    </div>
    <div style="width: 100%;">虚线风格：
      <vxe-tag tag-style="dashed">abc</vxe-tag>
      <vxe-tag tag-style="dashed" content="老王绿" color="#45adbe"/>
      <vxe-tag tag-style="dashed" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="dashed" content="small" color="warning" size="small"/>
      <vxe-tag tag-style="dashed" content="large" color="error" size="large"/>
    </div>
    <div style="width: 100%;">标记风格：
      <vxe-tag tag-style="mark">abc</vxe-tag>
      <vxe-tag tag-style="mark" content="老王绿老王绿老王绿老王绿" color="#45adbe"/>
      <vxe-tag tag-style="mark" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="mark" content="small" color="warning" size="small"/>
      <vxe-tag tag-style="mark" content="large" color="error" size="large"/>
    </div>
    <div style="width: 100%;">旗帜风格：
      <vxe-tag tag-style="flag">abc</vxe-tag>
      <vxe-tag tag-style="flag" content="老王绿老王绿老王绿老王绿" color="#45adbe"/>
      <vxe-tag tag-style="flag" content="mini" color="primary" size="mini"/>
      <vxe-tag tag-style="flag" content="small" color="warning" size="small"/>
      <vxe-tag tag-style="flag" content="large" color="error" size="large"/>
    </div>
  </div>
</template>
<script setup lang="ts" name="Tag">
</script>
