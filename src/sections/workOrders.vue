<template>
    <div>Work orders</div>
    <p>{{ sections }}</p>
    <select name="selectSections" id="selectSections" multiple @change="selectedSections">
        <option selected disabled>Choose section for filtering</option>
        <option v-for="section in initFilters.sections" :value="section">{{ section }}</option>
    </select>
    <button @click="getResponse">Get Response</button>
    <p>{{ response }}</p>
</template>
    
<script>
export default {
    name: "work-orders",

    data() {
        return {
            initFilters: {
                sections: ['Created By', 'Priority Description', 'JobType Description'],
                years: [2021, 2023],
            },
            sections: [],
            filters: [],
            response: {},

        }
    },

    mounted() {
        fetch('http://127.0.0.1:8000/stat/sectionsList').then((data) => data.json()).then((data) => this.initFilters.sections = data);
    },

    methods: {
        selectedSections() {
            let options = document.querySelector('#selectSections').childNodes;
            let selectedOptions = []
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) selectedOptions.push(options[i].value)
            };
            this.sections = selectedOptions
        },

        getResponse() {
            console.log('started')
            fetch('http://127.0.0.1:8000/stat/wo', {
                method: 'POST',
                body: JSON.stringify({
                    "filters": [
                        {
                            "field": "raisedYear",
                            "operator": "==",
                            "value": "2023"
                        }
                    ],
                    "sections": this.sections
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((data) => data.json()).then((data) => this.response = data);
        }
    },



}
</script>

<style scoped></style>
    