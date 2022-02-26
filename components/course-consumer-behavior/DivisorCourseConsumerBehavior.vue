<template>
  <div class="container flex flex-col flex-1 bg-orange-200 rounded-md shadow-md mx-auto h-12 px-4 md:px-12 items-center content-center">
    <!-- <h2> injection test </h2> -->
    <span class="flex grow items-center">
          <img
            src="~/assets/img/perfil_rodrigo_wiethorn.png"
            alt="avatar"
            class="h-20 item-center">
          <p
            v-text="'Rodrigo Wiethorn'" />
          <br>
          <p
            class=""
            v-text="'Instrutor'" />
    </span>
    <!-- <span>
      <p
        v-text="'Rodrigo Wiethorn'" />
      <p
        class=""
        v-text="'Instrutor'" />
    </span> -->
    <span class="flex grow  text-lg font-normal pr-3 float-left">
      {{ this.$t('online_courses.our_courses.course_2_score') }}
    </span>
    <span class="flex grow text-lg font-normal pl-3 float-right">
      {{ this.$t('online_courses.our_courses.course_2_duration') }} {{ this.$t('online_courses.our_courses.course_2_time_unit') }}
    </span>
    <div
      class="flex grow  star-ratings-sprite inline-block float-left">
        <span :style="{width: '93%'}" class="rating"></span>
    </div>

  </div>
</template>

<script>

export default {
  name: 'DivisorCourseConsumerBehavior'
}
</script>
