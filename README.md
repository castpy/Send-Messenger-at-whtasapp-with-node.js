# Send-Messenger-at-whtasapp-with-node.js

<aside>
💡 **Atenção:** Usar esse BOT pode ser perigoso! Não me responsabilizo pela má pratica e uso indevido. Leia atentamente TODAS as informações para que haja um bom funcionamento!

</aside>

# Sobre o BOT

---

Este é um BOT simples de envio de mensagem feito em NODE.JS e com a biblioteca **[puppeteer](https://www.npmjs.com/package/puppeteer).** 

Através desse BOT é possível enviar mensagens automaticamente para qualquer contato do Whatsapp apenas ‘setando’ o nome.

# Iniciando o projeto

---

- Iniciando o node
    
    ```jsx
    npm init
    ```
    
- Instalando o **puppeteer**
    
    ```jsx
    npm install puppeteer
    ```
    

# Configurando o BOT

---

- Nome do usuário receptor
    
    Na linha ****21**** do arquivo, você irá encontrar o seguinte trecho de código:
    
    ```jsx
    const contactName = "";
    ```
    

Aqui você terá que adicionar o nome do contato salvo no celular.

```jsx
const contactName = "Castpy";
```

- Configurando mensagem
    
    Na linha ****34**** do arquivo, você irá encontrar o seguinte trecho de código:
    
    ```jsx
    const mensage = "Mensagem enviada via BOT e criado com NODE.JS";
    ```
    
    Você irá adicionar sua mensagem nessa constante ou se preferir e souber trabalhar com listas, faça uma! 😉
    

# ❗Atenção❗

---

Alguns erros que podem acontecer é por conta das classes CSS, constantemente alteradas no Web Whastapp. Se você souber inspecionar o navegador, fique à vontade para alterar as linhas ****16**** e ******23!******