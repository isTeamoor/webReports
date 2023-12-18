export async function getValue(reqName, variable){
    return fetch('http://127.0.0.1:8000/' + requestLib[reqName]).then(response => response.json()).then(d => this[variable] = d)
}

const requestLib = {
    WO_raised_number_by_Year:'analysis/WO_raised_number_by_Year'
}