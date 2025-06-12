/*
    Dado o seguinte array de emails:
        const emails = ["joao@email.com", "ana@email.com", "lucas@email.com"];
        
    Realize a iteração na lista de forma a, para cada item, colocar no console a seguinte mensagem:
    “Enviando e-mail para [email_da_lista]”
*/

const emails = ["joao@email.com", "ana@email.com", "lucas@email.com"];

emails.forEach(email => {
    console.log(`Enviando e-mail para ${email}`);
})
