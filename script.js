// script.js

document.getElementById("resumeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const location = document.getElementById("location").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const education = document.getElementById("education").value.trim();
    const certificates = document.getElementById("certificates").value.trim();
  
    const output = `
      <h2>${name}</h2>
      <p><strong>Phone:</strong> ${phone} | <strong>Email:</strong> ${email} | <strong>Location:</strong> ${location}</p>
  
      <h3>Experience</h3>
      <p>${experience.replace(/\n/g, "<br>") || "N/A"}</p>
  
      <h3>Skills</h3>
      <p>${skills.replace(/\n/g, "<br>") || "N/A"}</p>
  
      <h3>Education</h3>
      <p>${education.replace(/\n/g, "<br>") || "N/A"}</p>
  
      <h3>Certificates</h3>
      <p>${certificates.replace(/\n/g, "<br>") || "N/A"}</p>
    `;
  
    document.getElementById("output").innerHTML = output;
  });

  // Background changer
const backgrounds = ['bg-1', 'bg-2', 'bg-3', 'bg-4', 'bg-5'];
let currentBg = 0;

document.getElementById("changeBg").addEventListener("click", () => {
  document.body.classList.remove(...backgrounds); // remove all
  currentBg = (currentBg + 1) % backgrounds.length; // cycle
  document.body.classList.add(backgrounds[currentBg]);
});
