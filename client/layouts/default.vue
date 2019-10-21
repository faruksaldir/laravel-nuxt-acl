<template>
  <div>
    <div v-if="$auth.loggedIn"> 
      <p>Logged in as {{$auth.user.name}}</p>
    </div>
    <nuxt />
  </div>
</template>
