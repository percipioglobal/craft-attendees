<template>
    <div class="grid grid-cols-9 xl:grid-cols-10 bg-gray-100 py-2">
        <div class="col-span-3 p-3 text-left text-xs font-semibold text-gray-600 uppercase flex flex-nowrap items-center">
            <span class="inline-flex mb-0"><input type="checkbox" indeterminate="true"/></span>
            <span class="inline-flex pl-2">School / Organisation</span>
        </div>
        <div class="col-span-2 p-3 text-left text-xs font-semibold text-gray-600 uppercase">
            Name of attendee
        </div>
        <div class="col-span-1 xl:col-span-3 p-3 text-left text-xs font-semibold text-gray-600 uppercase">
            Email
        </div>
        <div class="p-3 text-left text-xs font-semibold text-gray-600 uppercase">
            Days
        </div>
        <div class="p-3 text-left text-xs font-semibold text-gray-600 uppercase">
            Status
        </div>
        <!--div class="p-3 text-left text-xs font-semibold text-gray-600 uppercase">&nbsp;</div-->
    </div>

    <div class="rounded-xl bg-white overflow-hidden min-h-16">
        <div v-if="attendees && attendees.length > 0" class="w-full pt-2">
            <article
                v-for="(attendee, i) in attendees"
                :class="[
                    attendees.length-1 !== i ? 'border-b border-gray-100 border-solid' : ''
                ]"
            >
                <list-item-attendee :event="event" :csrf="csrf" :attendee="attendee"/>
            </article>
            <svg v-if="loading" class="animate-spin ml-4 mt-5 mb-3 h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
        <p class="p-6" v-if="(!attendees || attendees.length === 0) && !loading">There are currently no attendees for this event</p>
    </div>
    <span class="pl-4 pt-4 inline-block text-gray-500">Total results: {{ (!attendees || attendees.length > 0) && !loading ? attendees?.length : '0'}}</span>
</template>

<script lang="ts">
    import {defineComponent, watchEffect, ref} from 'vue'
    import { useAttendeeStore } from '@/store/attendees'
    import { storeToRefs } from 'pinia'
    import ListItemAttendee from '@/vue/attendees/molecules/list-items/ListItemAttendee.vue';

    export default defineComponent({
        components: {
            'list-item-attendee': ListItemAttendee,
        },
        props: {
            event: {
                type: String,
                required: true
            },
            csrf: {
                type: String,
                required: true
            },
        },
        setup(props){
            const store = useAttendeeStore()
            const { attendees, loading } = storeToRefs(store)
            const hitsPerPage = ref(0)
            const currentPage = ref(0)

            watchEffect(() => {
                store.fetchAttendees(props.event, hitsPerPage.value, currentPage.value)
            })

            return { attendees, loading }

        }
    })
</script>