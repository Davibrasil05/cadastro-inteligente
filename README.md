
# Formulário de Cadastro com Validação em Tempo Real

Este projeto consiste em um formulário de cadastro funcional desenvolvido com tecnologias web fundamentais. O objetivo principal é oferecer uma interface intuitiva com feedback imediato ao usuário através de validações customizadas e um medidor de força de senha.

---

## Funcionalidades

* **Validação de Nome:** Verifica se o campo foi preenchido e se possui o comprimento mínimo de 3 caracteres.
* **Validação de E-mail:** Valida o formato do endereço inserido via expressão regular (regex).
* **Medidor de Força de Senha:** * Feedback visual através de uma barra de progresso colorida.
    * Níveis de segurança: Fraca, Razoável, Boa e Forte.
    * Critérios técnicos: Mínimo de 8 caracteres, uso de letras maiúsculas, números e caracteres especiais.
* **Estados de Validação:** Alteração dinâmica de classes CSS para indicar sucesso (verde) ou erro (vermelho) nos campos de entrada.
* **Responsividade:** Layout adaptável para diferentes tamanhos de tela e dispositivos móveis.

---

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e acessibilidade.
* **CSS3:** Estilização baseada em variáveis (Custom Properties) e transições suaves.
* **JavaScript (Vanilla):** Lógica de validação de dados e manipulação dinâmica do DOM.

---

## Estrutura de Arquivos

```text
├── index.html   # Estrutura e marcação do formulário
├── index.css    # Definições de estilos e variáveis de cores
└── script.js    # Lógica de validação e controle de estados
```

---

## Instruções de Uso

1. Salve os arquivos `index.html`, `index.css` e `script.js` no mesmo diretório.
2. Certifique-se de que as referências de link e script no HTML correspondam aos nomes dos arquivos.
3. Execute o arquivo `index.html` em um navegador web.

---

## Observações Técnicas

A aplicação utiliza o evento `blur` para os campos de Nome e E-mail, disparando a validação quando o usuário retira o foco do campo. Para o campo de Senha, utiliza-se o evento `input`, permitindo a atualização da barra de força simultaneamente à digitação.

> **Importante:** Este projeto foca na validação do lado do cliente (Client-side). Para ambientes de produção, as mesmas regras devem ser replicadas no servidor (Server-side) para garantir a integridade dos dados.
