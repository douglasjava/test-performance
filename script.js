import http from 'k6/http';
import { sleep } from 'k6';

export default function () {

    // Fazendo uma solicitação GET para a API de conselhos
    let response = http.get('https://api.adviceslip.com/advice');

    // Verificando se a solicitação foi bem-sucedida (status code 200)
    if (response.status === 200) {
        console.log('Conselho:', JSON.parse(response.body).slip.advice);
    } else {
        console.error('Falha ao buscar conselho. Código de status:', response.status);
    }

    // Espera por um curto período antes de fazer a próxima solicitação
    sleep(1);
    
}