<script setup lang="ts">
import TimeTable from "../section_b/TimeTable.vue";
import { ref } from "vue";
import TimeService from "../../models/TimeService";
import DataTable from "../section_b/DataTable.vue";

const selectedIndexesWeekdays = ref<TimeService>({
  "week_day0": "000000000000000000000000000000000000000000000000",
  "week_day1": "000000000000000000000000000000000000000000000000",
  "week_day2": "000000000000000000000000000000000000000000000000",
  "week_day3": "000000000000000000000000000000000000000000000000",
  "week_day4": "000000000000000000000000000000000000000000000000",
  "week_day5": "000000000000000000000000000000000000000000000000",
  "week_day6": "000000000000000000000000000000000000000000000000"
    })

const handleSelectedIndexesChanges = (selectedIndxes: number[], weekdayIndex:number) => {
  
    const selectedIndexesToBit = new Array(48).fill(0).map((_x, index) => selectedIndxes.includes(index) ? 1 : 0).join("");
    
    switch (weekdayIndex) {
        case 0:
            selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day0: selectedIndexesToBit }
            break;
        case 1:
            selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day1: selectedIndexesToBit }
            break;  
        case 2:
            selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day2: selectedIndexesToBit }
            break;
        case 3:
            selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day3: selectedIndexesToBit }
            break;
        case 4:
            selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day4: selectedIndexesToBit }
            break;
        case 5:
            selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day5: selectedIndexesToBit }
            break;
        case 6:
            selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day6: selectedIndexesToBit }
            break;
    }
}

const handleOnSwitchClick = (weekdayIndex:number) => {
  
  const selectedIndexesToBit = new Array(48).fill(0).join("");
  
  switch (weekdayIndex) {
      case 0:
          selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day0: selectedIndexesToBit }
          break;
      case 1:
          selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day1: selectedIndexesToBit }
          break;  
      case 2:
          selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day2: selectedIndexesToBit }
          break;
      case 3:
          selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day3: selectedIndexesToBit }
          break;
      case 4:
          selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day4: selectedIndexesToBit }
          break;
      case 5:
          selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day5: selectedIndexesToBit }
          break;
      case 6:
          selectedIndexesWeekdays.value = { ...selectedIndexesWeekdays.value, week_day6: selectedIndexesToBit }
          break;
  }
}
</script>

<template>
    <div>
        <TimeTable 
            @handleSelectedIndexesChanges="handleSelectedIndexesChanges"
            @handleOnSwitchClick="handleOnSwitchClick"/>
    </div>
    <div>
        <DataTable :timeService="selectedIndexesWeekdays"/>
    </div>
</template>