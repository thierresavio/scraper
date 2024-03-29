
const form = document.getElementById("cnpjForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const query = {};
    for (const [key, value] of formData.entries()) {
        query[key] = value;
    }
    const queryString = new URLSearchParams(query).toString();
    const response = await fetch(`/cnpjs/?${queryString}`);
    const data = await response.json();
    renderResults(data);
});

function renderResults(data) {
    resultsDiv.innerHTML = "";
    data.forEach(cnpj => {
        const cnpjDiv = document.createElement("div");
        cnpjDiv.innerText = JSON.stringify(cnpj);
        resultsDiv.appendChild(cnpjDiv);
    });
}
