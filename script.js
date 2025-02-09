document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var nomerobo = document.getElementById('nomerobo').value;
    var descricaorobo = document.getElementById('descricaorobo').value;
    var categoria = document.getElementById('categoria').value;
    var velocidade = document.getElementById('velocidade').value;
    var resistencia = document.getElementById('resistencia').value;
    var agilidade = document.getElementById('agilidade').value;
    var precisao = document.getElementById('precisao').value;
    var potencia = document.getElementById('potencia').value;
    var custo = document.getElementById('custo').value;
    
    var data = { 
        nome: nome, 
        email: email, 
        nomerobo: nomerobo, 
        descricaorobo: descricaorobo, 
        categoria: categoria,
        velocidade: velocidade,
        resistencia: resistencia,
        agilidade: agilidade,
        precisao: precisao,
        potencia: potencia,
        custo: custo
    };
    fetch('https://script.google.com/macros/s/AKfycbzZYjQPW1KOK-Ph6eW-jKYBkOWwxfvE84BjzohzHd-weGEr_mGTISmjg95asHjqfa3a/exec', { //Servidor Apps Script
      method: 'POST',
      mode: 'no-cors',  // Evita erro de CORS
      headers: {
        'Content-Type': 'application/json' //Tipo de envio JSON
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      alert("Dados enviados com sucesso!"); // Callback Positivo
    })
    .catch(error => {
      console.error('Erro:', error);
      alert("Erro ao enviar os dados."); // Callback Negativo
    });
  });
