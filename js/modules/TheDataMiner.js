let errorCodes = {
    404: "Error in processing",
    500: "Server problem",
    403: "authorization error",
    503: "Services unavailable"
}

async function fetchData(sourceURL) {
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`ERROR!!!!! ${response.status}: ${errorCodes[response.status]}`);
        } 
        return response;           
    });
    let dataset = await resource.json();
    return dataset[0];
}

export { fetchData };