# ArenaCombat - Formulário de Inscrição

Este projeto é um formulário web para inscrições em uma competição de robótica fictícia, a **ArenaCombat**. Nele, os participantes preenchem informações pessoais e detalhes sobre seus robôs, que são enviados para uma planilha do Google Sheets. Além disso, os dados coletados podem ser visualizados por meio de um gráfico de radar que destaca as avaliações de diversos critérios.

## Descrição

O formulário coleta os seguintes dados:
- **Informações Pessoais:** Nome e Email.
- **Dados do Robô:** Nome, descrição, categoria (diversas categorias de peso) e avaliações (velocidade, resistência, agilidade, precisão, potência e custo) – classificadas de 1 a 5.

Após o envio, os dados são transmitidos via `fetch` para um endpoint do Google Apps Script, que se encarrega de registrar as informações em uma planilha do Google Sheets.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página e do formulário.
- **CSS3**: Estilização, incluindo uso de fonte [Orbitron](https://fonts.google.com/specimen/Orbitron) e background customizado.
- **JavaScript**: Captura dos dados do formulário e envio via `fetch` para o servidor.
- **Google Apps Script**: Backend para armazenamento dos dados na planilha e geração do gráfico de radar.

## Funcionalidades

- **Formulário Interativo:** Campos para preenchimento de dados com validação básica.
- **Integração com Google Sheets:** Os dados enviados pelo formulário são registrados em uma planilha para posterior visualização e análise.
- **Avaliação do Robô:** Os participantes atribuem notas de 1 a 5 para diferentes atributos do robô, que podem ser visualizados em um gráfico de radar.
- **Design Responsivo:** O layout se adapta a diferentes dispositivos, garantindo uma boa experiência para o usuário.

## Estrutura do Projeto

ArenaCombat/  
├── index.html     # Página principal contendo o formulário de inscrição  
├── style.css      # Arquivo de estilos que define a aparência e o layout do formulário  
├── script.js      # Lógica em JavaScript para captura e envio dos dados via fetch  
└── README.md      # Informações e instruções sobre o projeto  
