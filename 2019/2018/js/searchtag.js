SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><span>{path}</span><a href="{url}">{title}</a></li>',
    noResultsText: '<li><a href="#!">No results found.</a></li>',
    limit: 20,
    fuzzy: false,
    exclude: ['Welcome']
});