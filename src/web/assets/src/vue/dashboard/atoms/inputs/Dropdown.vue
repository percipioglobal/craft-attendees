<template>
    <select
        name="period"
        class="block h-10 px-1 rounded-md bg-gray-300 border-gray-300"
        v-model="period"
        :disabled="loading"
        @change="handlePeriodChanged"
    >
        <option value="2022">Academic Year (2021/22)</option>
        <option value="2021">Academic Year (2020/21)</option>
        <option value="2020">Academic Year (2019/20)</option>
        <option value="3">Last 3 months</option>
        <option value="6">Last 6 months</option>
    </select>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { useDashboardStore } from "@/store/dashboard"
    import { storeToRefs } from "pinia"

    export default defineComponent({
        setup(){
            const store = useDashboardStore()
            const { loading, period } = storeToRefs(store)

            const handlePeriodChanged = (evt) => {
                store.period = parseInt(evt.currentTarget.value)
                store.fetchEvents()
            }

            return { loading, period, handlePeriodChanged }
        }
    })
</script>
