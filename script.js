function submit_info(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const select = document.getElementById("skills");
    const skills = Array.from(select.selectedOptions).map(option => option.value);
    const box = document.getElementById("box");
    box.innerHTML = `
  <h3>Bienvenue, ${name}</h3>
  <p>Birthday: ${date}</p>
  <p>Gender: ${gender}</p>
  <p>Skills: ${skills.join(', ')}</p>
`;

}

const form = document.getElementById("formule");
form.addEventListener("submit", submit_info);