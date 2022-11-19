import axios from 'axios'

const endpointPessoas = '/pessoas/'
const base = axios.create({
    baseURL: 'https://g5bb8ec7fcace09-pessoashobbiesrest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/pessoas/'
})

const obterLista = () => {
    return base.get(endpointPessoas)
}

const cadastrarPessoa = (pessoa) => {
    return base.post(
        endpointPessoas,
        pessoa,
        {headers: {'Content-Type': 'application/json'}}
    )
}

export {obterLista, cadastrarPessoa}