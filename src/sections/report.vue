<template>
  <h1>Report</h1>
  <p>Total Work Orders number: <b>{{ WO_total_number }}</b></p>
  <p style="margin-left: 5%;" v-for="raisedYear in WO_raised_years">raised in {{ raisedYear }}: <b>{{
    WO_raised_byYears[raisedYear] }}</b></p>
  <br>
  <div>
    <p>Raised by Assets in 2023:</p>
    <div class="raised-by-assets"></div>
  </div>
  <p>Raised by Departments:</p>
  <table style="width: 100%;">
    <tr>
      <th>Department name</th>
      <th>Total raised</th>
      <th v-for="raisedYear in WO_raised_years">{{ raisedYear }}</th>
      <th>2023 in %</th>
    </tr>
    <tr v-for="department in Object.keys(WO_raised_byDepartments)">
      <td>{{ department }}</td>
      <td>{{ WO_raised_byDepartments[department]['total'] }}</td>
      <td v-for="raisedYear in WO_raised_years">{{ WO_raised_byDepartments[department][raisedYear] }}</td>
      <td>{{ (WO_raised_byDepartments[department][2023] / WO_raised_byYears[2023] * 100).toFixed(1) }}%</td>
    </tr>
  </table>
  <br>
  <p>Raised by Priority:</p>
  <table style="width: 100%;">
    <tr>
      <th>Priority type</th>
      <th>Total raised</th>
      <th v-for="raisedYear in WO_raised_years">{{ raisedYear }}</th>
      <th>2023 in %</th>
    </tr>
    <tr v-for="priority in Object.keys(WO_raised_byPriority)">
      <td>{{ priority }}</td>
      <td>{{ WO_raised_byPriority[priority]['total'] }}</td>
      <td v-for="raisedYear in WO_raised_years">{{ WO_raised_byPriority[priority][raisedYear] }}</td>
      <td>{{ (WO_raised_byPriority[priority][2023] / WO_raised_byYears[2023] * 100).toFixed(1) }}%</td>
    </tr>
  </table>
  <br>
  <p>Raised by JobTypes:</p>
  <table style="width: 100%;">
    <tr>
      <th>Job Type</th>
      <th>Total raised</th>
      <th v-for="raisedYear in WO_raised_years">{{ raisedYear }}</th>
      <th>2023 in %</th>
    </tr>
    <tr v-for="jobType in Object.keys(WO_raised_byJobTypes)">
      <td>{{ jobType }}</td>
      <td>{{ WO_raised_byJobTypes[jobType]['total'] }}</td>
      <td v-for="raisedYear in WO_raised_years">{{ WO_raised_byJobTypes[jobType][raisedYear] }}</td>
      <td>{{ (WO_raised_byJobTypes[jobType][2023] / WO_raised_byYears[2023] * 100).toFixed(1) }}%</td>
    </tr>
  </table>
  <br>
  <p>By Actual Status:</p>
  <table style="width: 100%;">
    <tr>
      <th>Status</th>
      <th>Total raised</th>
      <th v-for="raisedYear in WO_raised_years">{{ raisedYear }}</th>
      <th>2023 in %</th>
    </tr>
    <tr v-for="status in Object.keys(WO_raised_status)">
      <td>{{ status }}</td>
      <td>{{ WO_raised_status[status]['total'] }}</td>
      <td v-for="raisedYear in WO_raised_years">{{ WO_raised_status[status][raisedYear] }}</td>
      <td>{{ (WO_raised_status[status][2023] / WO_raised_byYears[2023] * 100).toFixed(1) }}%</td>
    </tr>
  </table>
</template>

<script>
import { byAssets } from "@/js/byAssets"
import { getValue } from "@/js/requests";
export default {
  name: "report",
  data() {
    return {
      WO_total_number: 0,
      WO_raised_years: [],
      WO_raised_byYears: {},

      WO_departments_List: [],
      WO_raised_byDepartments: {},

      WO_priority_List: [],
      WO_raised_byPriority: {},

      WO_jobType_List: [],
      WO_raised_byJobTypes: {},

      WO_status_List: [],
      WO_raised_status: {},

    }
  },
  mounted() {
    getValue('WO_total_number').then(d => this.WO_total_number = d)
    fetch('http://127.0.0.1:8000/utils/WO_raised_years').then(d => d.json()).then(d => { console.log(d); this.WO_raised_years = d });
    fetch('http://127.0.0.1:8000/utils/WO_raised_byYears').then(d => d.json()).then(d => { console.log(d); this.WO_raised_byYears = d });

    fetch('http://127.0.0.1:8000/utils/WO_raised_byAssets').then(d => d.json()).then(d => { console.log(d); this.WO_raised_byAssets = d });

    fetch('http://127.0.0.1:8000/utils/WO_departments_List').then(d => d.json()).then(d => { console.log(d); this.WO_departments_List = d });
    fetch('http://127.0.0.1:8000/utils/WO_raised_byDepartments').then(d => d.json()).then(d => { console.log(d); this.WO_raised_byDepartments = d });

    fetch('http://127.0.0.1:8000/utils/WO_priority_List').then(d => d.json()).then(d => { console.log(d); this.WO_priority_List = d });
    fetch('http://127.0.0.1:8000/utils/WO_raised_byPriority').then(d => d.json()).then(d => { console.log(d); this.WO_raised_byPriority = d });

    fetch('http://127.0.0.1:8000/utils/WO_jobType_List').then(d => d.json()).then(d => { console.log(d); this.WO_jobType_List = d });
    fetch('http://127.0.0.1:8000/utils/WO_raised_byJobTypes').then(d => d.json()).then(d => { console.log(d); this.WO_raised_byJobTypes = d });

    fetch('http://127.0.0.1:8000/utils/WO_status_List').then(d => d.json()).then(d => { console.log(d); this.WO_status_List = d });
    fetch('http://127.0.0.1:8000/utils/WO_raised_status').then(d => d.json()).then(d => { console.log(d); this.WO_raised_status = d });

    fetch('http://127.0.0.1:8000/utils/WO_raised_byAssets').then(d => d.json()).then(d => byAssets(document.querySelector('.raised-by-assets'), d));

  }
};
</script>

<style>
h1 {
  text-align: center;
}

td,
th {
  border: 1px solid black;
  text-align: center;
}

.raised-by-assets .hiden {
  font-size: large;
  display: none;
}
</style>
@/js/byAssets