import Vue from 'vue'
import { Can, abilitiesPlugin } from '@casl/vue'
import { AbilityBuilder } from '@casl/ability'


Vue.component('Can', Can)

export default ({app}) => {

    let abilities = AbilityBuilder.define(can => {
        if(app.$auth.loggedIn){
            app.$auth.user.permissions.forEach((permissions) => {
              
                can(...permissions)
            })
        }
    })
    Vue.use(abilitiesPlugin, abilities)
}
