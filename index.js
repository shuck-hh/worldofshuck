async function loadProjects() {
    const username = 'ios12checher' // !change!
    const response = await fetch(
        `https://api.github.com/users/${username}/repos`
    );
    const repos = await response.json();

    const list = document.getElementById("projectsSection");

    repos.forEach(repo => {
        const li = document.createElement("li");
        li.innerHTML = `
      <a href="${repo.html_url}" target="_blank">
        ${repo.name}
      </a>
      <p>${repo.description || "No description"}</p>
    `;
        list.appendChild(li);
    });
}