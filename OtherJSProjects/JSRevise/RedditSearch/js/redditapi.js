//Example of a url https://www.reddit.com/search.json?q=sega&sort=relevance&limit=1
export default {
    search: function (searchTerm, searchLimit, sortBy) {
        return fetch(
            `https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
            //res means response, we want it in json
        ).then(res => res.json()
        ).then(data => {
            return data.data.children.map(data => data.data);
        }).catch(err => console.log(err));
    }
};
