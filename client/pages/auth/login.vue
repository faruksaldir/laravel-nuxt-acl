<template>
    <div>
        <div>
            <a href="#" @click.prevent="loginAsUser">Login as User</a>
        </div>

        <div>
            <a href="#" @click.prevent="loginAsAdmin">Login as admin</a>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        loginAsUser(){
           
            this.$auth.loginWith('local',{
                data:{
                    email: 'faruksaldir@gmail.com',
                    password:'password'
                }
            })
        },
         loginAsAdmin(){
           
            this.$auth.loginWith('local',{
                data:{
                    email: 'tugceakin@gmail.com',
                    password:'password'
                }
            })
        }
    },

    
    
}
</script>