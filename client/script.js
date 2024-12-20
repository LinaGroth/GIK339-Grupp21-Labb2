const url = 'http://localhost:3000/users';

fetch(url)
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    console.log('Array', data); 

    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";

    data.forEach(user => {
      const li = document.createElement("li");

      li.innerHTML = `
        <div>
          <h3>${user.firstName} ${user.lastName}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Color:</strong> ${user.color}</p>
        </div>
      `;

      li.style.backgroundColor = user.color;

      ul.appendChild(li);
    });

    document.getElementById("user-list-container").appendChild(ul);
  })
