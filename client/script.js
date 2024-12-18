const url = 'http://localhost:3000/users';

fetch(url)
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    console.log('Array', data); // Visa den hämtade datan i konsolen

    // Skapa en <ul>-lista
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";

    // Gå igenom varje användare i datan
    data.forEach(user => {
      const li = document.createElement("li");

      // Fyll i innehållet i varje <li> med användardata
      li.innerHTML = `
        <div>
          <h3>${user.firstName} ${user.lastName}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Color:</strong> ${user.color}</p>
        </div>
      `;

      // Styla bakgrundsfärgen på varje listobjekt
      li.style.backgroundColor = user.color;

      // Lägg till <li> i <ul>
      ul.appendChild(li);
    });

    // Lägg till hela <ul> till DOM:en i en container med id "user-list-container"
    document.getElementById("user-list-container").appendChild(ul);
  })
