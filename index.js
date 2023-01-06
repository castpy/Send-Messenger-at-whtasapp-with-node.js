const puppeteer = require("puppeteer");

(async function main(){
    try{

        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();

        // Setando o agente do navegador para não ser detectado pelo whatsapp como bot
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36");

        // Indo até o endereço do whatsapp
        await page.goto("https://web.whatsapp.com/");

        // Class css que iremos procurar pelo nome
        await page.waitForSelector(".zoWT4");
        // Dalay de 5000ms para não ser detectado pelo whatsapp como bot
        await delay(5000);

        // Nome do contato que receberá a mensagem
        const contactName = "Jonathan Laco";
        await page.click(`span[title='${contactName}']`)
        await page.waitForSelector(".zoWT4");

        // Encontrando a barra de mensagem
        const editor = await page.$("div[tabindex='-1']");
        await editor.focus();

        // Setando a quantidade de mensagens
        const amountOfMessenges = 500

        for (var i = 0; i < amountOfMessenges; i++){
            await page.evaluate(() => {
                const mensage = "Tu é gay? kkkkkkkkk";
                document.execCommand("insertText", false, mensage);
            });
            await page.click("span[data-testid='send']");
            await delay(500)
        }
        
    }catch(e){
        console.error("error mine", e);
    }
})();


//Função que recebe a quantidade de tempo de espera
function delay(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time)
    });
}