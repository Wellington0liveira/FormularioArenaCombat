// listener para o evento de submit do formulário
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coleta os valores 
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
    
    // Envia os dados via fetch para o servidor Apps Script
    fetch('https://script.google.com/macros/s/AKfycbzZYjQPW1KOK-Ph6eW-jKYBkOWwxfvE84BjzohzHd-weGEr_mGTISmjg95asHjqfa3a/exec', { // Servidor Apps Script
      method: 'POST',
      mode: 'no-cors',  // evitar erro de CORS
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      // Sucesso
      alert("Dados enviados com sucesso!");
    })
    .catch(error => {
      // Erro
      console.error('Erro:', error);
      alert("Erro ao enviar os dados.");
    });
});
