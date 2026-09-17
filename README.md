    # ⏱️ Horas Blackboard - Client

    Interface web minimalista desenvolvida em **React**, **TypeScript** e **Tailwind CSS** para consulta rápida de
    horas de estudo e acessos acumulados na plataforma Blackboard.

    ---

    ## 🚀 Tecnologias

    - [React 19](https://react.dev/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Vite](https://vitejs.dev/)
    - [Tailwind CSS v4](https://tailwindcss.com/)
    - [Axios](https://axios-http.com/)

    ---

    ## ⚙️ Pré-requisitos

    Certifique-se de ter instalado em sua máquina:
    - [Node.js](https://nodejs.org/) (versão 18 ou superior)
    - Gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)

    ---

    ## 🛠️ Como Configurar e Rodar

    ### 1. Clonar o repositório e instalar dependências

    ```bash
    # Clone o repositório (substitua pela sua URL)
    git clone <URL_DO_REPOSITORIO>

    # Acesse a pasta do projeto
    cd API-Horas-Blackboard-main

    # Instale as dependências
    npm install

  ### 2. Configurar variáveis de ambiente

  Crie um arquivo .env na raiz do projeto (ou copie a partir do .env.example):

    cp .env.example .env

  Abra o arquivo .env e preencha as configurações da sua API:

    VITE_API_URL=https://sua-api.com
    VITE_API_KEY=seu_token_aqui

  ### 3. Iniciar o servidor de desenvolvimento

    npm run dev

  Acesse a aplicação no navegador através do endereço exibido no terminal (geralmente http://localhost:5173).
  ──────
  ## 📦 Scripts Disponíveis

  • npm run dev: Inicia o servidor local de desenvolvimento.
  • npm run build: Compila o TypeScript e gera o build de produção via Vite.
  • npm run preview: Visualiza o build de produção localmente.
  • npm run lint: Executa a verificação de código com Oxlint.