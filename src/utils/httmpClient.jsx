const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
        "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjI1NTAyMDNkNGQ1ODBmMzkwODA1YzhjZWQ0MDgxNCIsInN1YiI6IjYzNGI1OTUwNjhiMWVhMDA4MjMyNjQ3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hklHMlm12uYhQ0Qbh5canCj26fE3fsOVsCqZMHpCSYM",
        "Content-Type": "application/json;charset=utf-8"
    }
}).then(result => result.json())
}