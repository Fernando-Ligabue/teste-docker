Rebuild de Website com Next.js, Tailwind CSS, Chadcn UI, React Icons e Lucide React
Este projeto tem como objetivo a reconstrução de um website, utilizando as tecnologias mais modernas e eficientes para garantir uma experiência de desenvolvimento fluída e uma interface visual moderna e responsiva.

Tecnologias Utilizadas
Next.js: Framework React para desenvolvimento de aplicações web, com suporte a renderização no lado do servidor (SSR) e geração de sites estáticos (SSG).

Tailwind CSS: Framework de utilitários para criação de interfaces de usuário customizáveis de forma rápida e responsiva.

Chadcn UI: Biblioteca de componentes UI altamente acessíveis e personalizáveis.

React Icons: Biblioteca de ícones para React, fornecendo uma ampla gama de ícones.

Lucide React: Conjunto de ícones SVG para React, ideal para interfaces minimalistas e claras.

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js (recomendado: versão 16 ou superior)

npm ou Yarn

Git

Como Rodar o Projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
Instale as dependências:

Com npm:

bash
Copiar
Editar
npm install
Ou com Yarn:

bash
Copiar
Editar
yarn install
Inicie o servidor de desenvolvimento:

Com npm:

bash
Copiar
Editar
npm run dev
Ou com Yarn:

bash
Copiar
Editar
yarn dev
Acesse o site:

Abra seu navegador e acesse http://localhost:3000.

Estrutura do Projeto
O projeto segue uma estrutura padrão do Next.js:

bash
Copiar
Editar
/pages          # Contém as páginas do site (ex: index.js, about.js)
/components     # Componentes reutilizáveis (ex: Header, Footer)
/styles         # Estilos globais e customizações do Tailwind CSS
/public         # Arquivos públicos como imagens e fontes
Personalizações
Tailwind CSS
O projeto já vem configurado com o Tailwind CSS. Você pode adicionar ou modificar as configurações no arquivo tailwind.config.js para personalizar cores, fontes e outros aspectos do estilo.

Chadcn UI
A biblioteca Chadcn UI oferece componentes prontos para uso que podem ser facilmente integrados no seu projeto. Exemplo de uso de um componente:

jsx
Copiar
Editar
import { Button } from 'chadcn-ui'

const HomePage = () => (
  <div className="flex justify-center items-center min-h-dvh">
    <Button variant="primary">Clique Aqui</Button>
  </div>
)


React Icons & Lucide React
Para usar ícones do React Icons ou Lucide React, basta importar o ícone desejado e inseri-lo no seu componente:

jsx
Copiar
Editar
import { FaBeer } from 'react-icons/fa';  // React Icons
import { Search } from 'lucide-react';    // Lucide React

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <h1>Meu Website</h1>
    <Search className="w-6 h-6" />
    <FaBeer className="w-6 h-6" />
  </header>
)

Como Contribuir
Faça o fork deste repositório.

Crie uma branch para sua feature ou correção (git checkout -b feature/nome-da-feature).

Faça as alterações desejadas e commite suas mudanças (git commit -am 'Adicionando nova feature').

Envie para o seu repositório forkado (git push origin feature/nome-da-feature).

Abra um Pull Request.

Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.