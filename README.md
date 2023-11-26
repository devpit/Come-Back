# JavaScript - Atualização Dinâmica do Título da Página

Este script em JavaScript tem como função principal a modificação dinâmica do título da página, proporcionando uma experiência personalizada para o usuário quando ele sai ou retorna à janela do navegador.

## Funcionalidades

1. **Alteração Dinâmica do Título:**
   - O código é projetado para detectar quando o usuário sai da janela do navegador e quando retorna.
   - Com base nessas interações, o título da página é modificado dinamicamente para oferecer uma experiência mais envolvente.

## Como Utilizar

1. **Inclusão do Script:**
   - Inclua o script JavaScript no arquivo HTML da sua página web.
   ```html
   <script src="caminho-para/o-seu-script.js"></script>
   ```

2. **Configuração Personalizada (Opcional):**
   - Se necessário, ajuste as configurações no script para atender às necessidades específicas do seu projeto.

## Códido JS

```javascript
let docTitle = document.title;

window.addEventListener("blur", () =>{
  document.title = "Hei! Volte aqui...";
})

window.addEventListener("focus", () =>{
  document.title = docTitle;
})
```

## Contribuição

Contribuições são bem-vindas! Se você encontrar problemas ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Esperamos que este script torne a experiência do usuário em sua página mais dinâmica e atraente. Se você tiver alguma dúvida ou precisar de suporte, sinta-se à vontade para entrar em contato.
