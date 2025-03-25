import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Image, ScrollView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const personagensIniciais = [
  { id: '1', nome: 'Frieren', imagem: 'https://i.pinimg.com/736x/05/83/16/058316691ef3a7a73d78fe87ae5ea8a1.jpg' },
  { id: '2', nome: 'Fern', imagem: 'https://th.bing.com/th/id/OIP.BbhAg_IVZVoWOh4aK2gFJgAAAA?w=187&h=187&c=7&r=0&o=5&pid=1.7' },
  { id: '3', nome: 'Stark', imagem: 'https://th.bing.com/th/id/OIP.KZbqIcsdc_bqjd-yZUrL7AHaFP?rs=1&pid=ImgDetMain' },
  { id: '4', nome: 'Himmel', imagem: 'https://twinfinite.net/wp-content/uploads/2023/10/Frieren-Beyond-Journeys-End-Himmel.jpg?fit=1200%2C675' }
];

function TelaDePersonagens() {
  const [texto1, setTexto1] = useState('');
  const [texto2, setTexto2] = useState('');
  const [texto3, setTexto3] = useState('');
  const [texto4, setTexto4] = useState('');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(personagensIniciais[0].id);
  const [valorSlider1, setValorSlider1] = useState(50);
  const [valorSlider2, setValorSlider2] = useState(50);
  const [valorSwitch1, setValorSwitch1] = useState(false);
  const [valorSwitch2, setValorSwitch2] = useState(false);
  const [personagens, setPersonagens] = useState(personagensIniciais); 

  const handleAdicionarPersonagem = () => {
    const novoPersonagem = {
      id: (personagens.length + 1).toString(),
      nome: texto1,
      imagem: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcNbdAufjmRlAr9KL2I-Fz1w8GsJ30pOc61etQ4N8Xcl3jm09GYhx5xtHcFAVPt7To2XnR2EdY9T4G8CYQSsyfrw4PxTrvjKd1ir0qx_c', 
    };

    setPersonagens([...personagens, novoPersonagem]); 
    alert('Personagem salvo!');

    setTexto1('');
    setTexto2('');
    setTexto3('');
    setTexto4('');
    setValorSlider1(50);
    setValorSlider2(50);
    setValorSwitch1(false);
    setValorSwitch2(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personagens de Frieren</Text>

      <Picker
        selectedValue={personagemSelecionado}
        onValueChange={(itemValue) => setPersonagemSelecionado(itemValue)}
      >
        {personagens.map((personagem) => (
          <Picker.Item key={personagem.id} label={personagem.nome} value={personagem.id} />
        ))}
      </Picker>

      <TextInput style={styles.input} placeholder="Nome" value={texto1} onChangeText={setTexto1} />
      <TextInput style={styles.input} placeholder="Habilidade" value={texto2} onChangeText={setTexto2} />
      <TextInput style={styles.input} placeholder="Descrição" value={texto3} onChangeText={setTexto3} />
      <TextInput style={styles.input} placeholder="Atributo Especial" value={texto4} onChangeText={setTexto4} />

      <Text>Força</Text>
      <Slider minimumValue={0} maximumValue={100} value={valorSlider1} onValueChange={setValorSlider1} />

      <Text>Inteligência</Text>
      <Slider minimumValue={0} maximumValue={100} value={valorSlider2} onValueChange={setValorSlider2} />

      <Text>Magia</Text>
      <Switch value={valorSwitch1} onValueChange={setValorSwitch1} />

      <Text>Destreza</Text>
      <Switch value={valorSwitch2} onValueChange={setValorSwitch2} />

      <Button title="Salvar Personagem" onPress={handleAdicionarPersonagem} />
      <Button title="Redefinir" onPress={() => {
        setTexto1('');
        setTexto2('');
        setTexto3('');
        setTexto4('');
        setValorSlider1(50);
        setValorSlider2(50);
        setValorSwitch1(false);
        setValorSwitch2(false);
      }} />

      <View style={styles.imageContainer}>
        {personagens.map((personagem) => (
          <Image key={personagem.id} source={{ uri: personagem.imagem }} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela de Personagens">
        <Stack.Screen name="Tela de Personagens" component={TelaDePersonagens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-around',
    marginTop: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
});
