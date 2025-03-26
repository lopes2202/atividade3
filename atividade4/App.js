import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const personagensBanco = {
  'frieren': {
    imagem: 'https://i.pinimg.com/736x/05/83/16/058316691ef3a7a73d78fe87ae5ea8a1.jpg',
    descricao: 'Frieren é uma maga elfa que vive há mil anos. Ela busca entender melhor as emoções humanas após derrotar o Rei Demônio.',
  },
  'fern': {
    imagem: 'https://th.bing.com/th/id/OIP.BbhAg_IVZVoWOh4aK2gFJgAAAA?w=187&h=187&c=7&r=0&o=5&pid=1.7',
    descricao: 'Fern é a aprendiz de Frieren e uma maga prodígio, responsável e disciplinada.',
  },
  'stark': {
    imagem: 'https://th.bing.com/th/id/OIP.KZbqIcsdc_bqjd-yZUrL7AHaFP?rs=1&pid=ImgDetMain',
    descricao: 'Stark é um guerreiro forte e destemido, mas com um lado gentil e hesitante.',
  },
  'himmel': {
    imagem: 'https://twinfinite.net/wp-content/uploads/2023/10/Frieren-Beyond-Journeys-End-Himmel.jpg?fit=1200%2C675',
    descricao: 'Himmel foi um herói lendário que inspirou Frieren a valorizar suas memórias.',
  },
  'heiter': {
    imagem: 'https://avatarfiles.alphacoders.com/375/thumb-1920-375912.png',
    descricao: 'Heiter foi um sacerdote bondoso e ajudou Frieren a encontrar um propósito.',
  },
  'aura': {
    imagem: 'https://cdn.rafled.com/anime-icons/images/CxuTvHhQ6K686I6Ncm0RB7JpqctHgrfy.jpg',
    descricao: 'Aura é uma guerreira inimiga de Frieren, conhecida por seu poder de dominação.',
  }
};

function TelaDePersonagens() {
  const [nomePersonagem, setNomePersonagem] = useState('');
  const [habilidade, setHabilidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [atributoEspecial, setAtributoEspecial] = useState('');
  const [forca, setForca] = useState(50);
  const [inteligencia, setInteligencia] = useState(50);
  const [magia, setMagia] = useState(false);
  const [destreza, setDestreza] = useState(false);
  const [personagens, setPersonagens] = useState([]);
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  const [descricaoSelecionada, setDescricaoSelecionada] = useState(null);

  const handleAdicionarPersonagem = () => {
    const nomeFormatado = nomePersonagem.trim().toLowerCase(); 

    if (!nomeFormatado) {
      alert('Digite um nome para o personagem!');
      return;
    }

    const personagem = personagensBanco[nomeFormatado];

    if (!personagem) {
      alert('Este personagem não está no banco de dados!');
      return;
    }

    const novoPersonagem = {
      id: (personagens.length + 1).toString(),
      nome: nomePersonagem, 
      imagem: personagem.imagem,
      descricao: personagem.descricao,
    };

    setPersonagens([...personagens, novoPersonagem]);
    setPersonagemSelecionado(novoPersonagem.id);
    alert('Personagem salvo!');


    setNomePersonagem('');
    setHabilidade('');
    setDescricao('');
    setAtributoEspecial('');
    setForca(50);
    setInteligencia(50);
    setMagia(false);
    setDestreza(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Personagens de Frieren</Text>

        {personagens.length > 0 && (
          <Picker
            selectedValue={personagemSelecionado}
            onValueChange={(itemValue) => setPersonagemSelecionado(itemValue)}
          >
            {personagens.map((personagem) => (
              <Picker.Item key={personagem.id} label={personagem.nome} value={personagem.id} />
            ))}
          </Picker>
        )}

        <TextInput style={styles.input} placeholder="Nome" value={nomePersonagem} onChangeText={setNomePersonagem} />
        <TextInput style={styles.input} placeholder="Habilidade" value={habilidade} onChangeText={setHabilidade} />
        <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
        <TextInput style={styles.input} placeholder="Atributo Especial" value={atributoEspecial} onChangeText={setAtributoEspecial} />

        <Text>Força</Text>
        <Slider minimumValue={0} maximumValue={100} value={forca} onValueChange={setForca} />

        <Text>Inteligência</Text>
        <Slider minimumValue={0} maximumValue={100} value={inteligencia} onValueChange={setInteligencia} />

        <Text>Magia</Text>
        <Switch value={magia} onValueChange={setMagia} />

        <Text>Destreza</Text>
        <Switch value={destreza} onValueChange={setDestreza} />

        <Button title="Salvar Personagem" onPress={handleAdicionarPersonagem} />
        <Button title="Redefinir" onPress={() => {
          setNomePersonagem('');
          setHabilidade('');
          setDescricao('');
          setAtributoEspecial('');
          setForca(50);
          setInteligencia(50);
          setMagia(false);
          setDestreza(false);
        }} />

        {personagens.length > 0 && (
          <View style={styles.imageContainer}>
            {personagens.map((personagem) => (
              <TouchableOpacity key={personagem.id} onPress={() => setDescricaoSelecionada(personagem.descricao)}>
                <Image source={{ uri: personagem.imagem }} style={styles.image} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {descricaoSelecionada && (
        <ScrollView style={styles.descricaoContainer}>
          <Text style={styles.descricao}>{descricaoSelecionada}</Text>
        </ScrollView>
      )}
    </View>
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
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  imageContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20 },
  image: { width: 120, height: 120, borderRadius: 10, marginBottom: 10 },
  descricaoContainer: { maxHeight: 150, marginTop: 10, paddingHorizontal: 10 },
  descricao: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 10 }
});
