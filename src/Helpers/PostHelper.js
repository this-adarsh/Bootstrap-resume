export default function getPostList(url) {
    url = baseUrl() + url
    return fetch(url)
        .then((res) => res.json());
}
function baseUrl() {
    return 'https://public-api.wordpress.com/rest/v1.1/sites/thisadarshblog.wordpress.com/';
}