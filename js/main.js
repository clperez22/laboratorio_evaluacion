async function getUsuarios() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  function crearComponentes(data) {
    const container = document.getElementById('container');
  
    //  un bucle for para iterar sobre los datos
    data.forEach(item => {
      const componente = document.createElement('div');
      componente.classList.add('caja');

     
  


      const profilePicture = document.createElement('div');
      profilePicture.classList.add('profile-picture');
  
      const username = document.createElement('div');
      username.classList.add('username');
      username.textContent = item.username;
      
  
      const nombre = document.createElement('nombres');
      nombre.textContent = item.name;
  
      const email = document.createElement('p');
      email.textContent = item.email;
  
      const telefono = document.createElement('p');
      telefono.textContent = item.phone;
  
      const compañia = document.createElement('p');
      compañia.textContent = item.company.name;
      
  
      componente.appendChild(profilePicture);
      componente.appendChild(username);
      componente.appendChild(nombre);
      componente.appendChild(email);
      componente.appendChild(telefono);
      componente.appendChild(compañia);
  
      container.appendChild(componente);
    });
  }
  
  getUsuarios()
    .then(data => crearComponentes(data))
    .catch(error => console.log(error));