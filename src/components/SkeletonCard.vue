<template>
  <div class="field pr-0 bg-white" v-for="index in numberOfItem" :key="index">
    <div class="custom-skeleton p-4">
      <div class="flex align-center mb-3">
        <Skeleton
          shape="rectangle"
          size="4rem"
          class="rtl:ml-2 ltr:mr-2"
        ></Skeleton>
        <div class="flex justify-between w-full">
          <div>
            <Skeleton width="10rem" class="my-3"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
          </div>
          <div>
            <Skeleton width="4rem" class="my-3"></Skeleton>
            <Skeleton width="3rem" class="mb-2"></Skeleton>
          </div>
        </div>
      </div>
      <Skeleton width="5rem" class="my-3"></Skeleton>
      <Skeleton width="100%"></Skeleton>
      <div class="flex justify-between mt-3">
        <Skeleton width="6rem" height="2rem"></Skeleton>
        <Skeleton width="6rem" height="2rem"></Skeleton>
        <Skeleton width="6rem" height="2rem"></Skeleton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  numberOfItem: {
    type: Number,
    default: 4,
  },
});
</script>
