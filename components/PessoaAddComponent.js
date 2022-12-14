import { StyleSheet, ToastAndroid } from 'react-native'
import { Button, Card, Input } from '@rneui/themed'
import { useState } from 'react'
import * as pessoaService from '../service/PessoaService'

const PessoaAddComponent = () => {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [hobby, sethobby] = useState('')

    const addPessoa = async () => {
        try{
            const res = await pessoaService.cadastrarPessoa({nome, idade, hobby})
            console.log(res)
            ToastAndroid.show('Pessoa cadastrada com sucesso!!', 2000)
        }
        catch (erro){
            console.log('erro', erro)
            ToastAndroid.show('Falha. Tente novamente mais tarde', 2000)
        }
        navigation.goBack()
    }
  return (
    <>
    <Card containerStyle={styles.card}>
        <Card.Title>Cadastro de Pessoas</Card.Title>
        <Card.Divider></Card.Divider>
        <Input 
        placeholder='Nome' 
        leftIcon={{type:'font-awesome', name:'user'}} 
        style={styles.textInput}
        onChangeText = {(nome) => setNome(nome)}
        />
        <Input 
        placeholder='Idade' 
        leftIcon={{type:'font-awesome', name:'info'}} 
        style={styles.textInput}
        onChangeText = {(idade) => setIdade(idade)}
        />
        <Input 
        placeholder='hobby' 
        leftIcon={{type:'font-awesome', name:'heart'}} 
        style={styles.textInput}
        onChangeText = {(hobby) => sethobby(hobby)}
        />

        <Button 
        title="OK" 
        buttonStyle={styles.button}
        onPress={() => addPessoa()}
        />
    </Card>
    </>
  )
}

export default PessoaAddComponent

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 8
    },
    card: {
        padding: 8,
        borderRadius: 8
    },
    textInput: {
        textAlign: 'center',
        margin: 0,
        padding: 0
    }
})



//"https://g5bb8ec7fcace09-pessoashobbysrest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/pessoas/" 