document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("./js/data.json");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        document.querySelector("header h1").textContent = data.name;
        document.querySelector(".job-title").textContent = data.jobTitle;

        const contactList = document.querySelector("#contact ul");
        contactList.innerHTML = `
            <li><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Location:</strong> ${data.location}</li>
            <li><strong>LinkedIn:</strong> <a href="${data.linkedin.url}" target="_blank">${data.linkedin.label}</a></li>
        `;

        const edu = data.education;
        document.querySelector("#education .entry").innerHTML = `
            <h3>${edu.title}</h3>
            <p class="institution">${edu.institution}</p>
            <p class="dates">${edu.dates}</p>
        `;

        const work = data.work;
        const workEntry = document.querySelector("#work .entry");
        workEntry.innerHTML = `
            <h3>${work.title}</h3>
            <p class="institution">${work.institution}</p>
            <p class="dates">${work.dates}</p>
            <ul>${work.details.map(item => `<li>${item}</li>`).join('')}</ul>
        `;

        const skillsList = document.querySelector("#skills ul");
        skillsList.innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join('');
    } catch (err) {
        console.error("Failed to load profile data:", err);
    }
});