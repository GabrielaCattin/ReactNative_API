import { View } from 'react-native'
import PessoaAddComponent from '../components/PessoaAddComponent'

const PessoaAddTela = ({navigation}) => {
  return (
   <View>
    <PessoaAddComponent navigation={navigation}/>
   </View>
  )
}

export default PessoaAddTela

