async function usuariosx() {
    try {
      let ddd = await fetch("https://jsonplaceholder.typicode.com/users");
      let gato1 = await ddd.json();
      return gato1;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  function hola(gato1) {
    let hhola = document.getElementById('hhola');
  
  
    gato1.forEach(item => {
      let gato2 = document.createElement('div');
      gato2.classList.add('caja');

     
  


      let profilePicture = document.createElement('div');
      profilePicture.classList.add('circulo');
  
      let username = document.createElement('div');
      username.classList.add('username');
      username.textContent = item.username;
    
  
      let email = document.createElement('div');
      email.classList.add('corrreo');
      email.textContent = item.email;
  
      let telefono = document.createElement('div');
      telefono.classList.add('cel');
      telefono.textContent = item.phone;
  
      let compañia = document.createElement('div');
      compañia.classList.add('empresa');
      compañia.textContent = item.company.name;
      
  
      gato2.appendChild(profilePicture);
      gato2.appendChild(username);
      
      gato2.appendChild(email);
      gato2.appendChild(telefono);
      gato2.appendChild(compañia);
  
      hhola.appendChild(gato2);
    });
  }
  
  usuariosx()
    .then(gato1=> hola(gato1))
    .catch(error => console.log(error));