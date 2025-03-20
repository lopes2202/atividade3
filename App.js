import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const frierenAnime = {
  name: "Frieren: Beyond Journey’s End",
  description:
    "Após derrotar o Rei Demônio ao lado de seus companheiros, a elfa maga Frieren embarca em uma jornada para compreender a vida humana e os sentimentos que negligenciou durante sua longa existência.",
  author: "Kanehito Yamada",
  studio: "Madhouse",
  year: "2023",
  image: "https://th.bing.com/th/id/OIP.70CRUr2gRSq21nNBbnVU1wHaC9?rs=1&pid=ImgDetMain",
  characters: [
    { 
      id: "1", 
      name: "Frieren", 
      role: "Protagonista - Maga", 
      image: "https://i.pinimg.com/736x/05/83/16/058316691ef3a7a73d78fe87ae5ea8a1.jpg",
      bio: "Uma maga elfa que vive por milênios. Após derrotar o Rei Demônio, percebe que não compreende os sentimentos humanos e decide embarcar em uma jornada para explorar a mortalidade.",
      abilities: ["Magia Anciã", "Manipulação Elemental", "Longevidade"],
      voiceActor: "Atsumi Tanezaki (JP)",
    },
    { 
      id: "2", 
      name: "Fern", 
      role: "Discípula de Frieren", 
      image: "https://th.bing.com/th/id/OIP.BbhAg_IVZVoWOh4aK2gFJgAAAA?w=187&h=187&c=7&r=0&o=5&pid=1.7",
      bio: "Uma jovem maga treinada por Frieren. Apesar de séria e disciplinada, possui um forte senso de justiça e se preocupa profundamente com sua mestra.",
      abilities: ["Magia de Defesa", "Feitiços de Ataque", "Controle Preciso de Mana"],
      voiceActor: "Kana Ichinose (JP)",
    },
    { 
      id: "3", 
      name: "Stark", 
      role: "Guerreiro", 
      image: "https://th.bing.com/th/id/OIP.KZbqIcsdc_bqjd-yZUrL7AHaFP?rs=1&pid=ImgDetMain",
      bio: "Um guerreiro forte e destemido que viaja com Frieren e Fern. Apesar de sua força, muitas vezes é tímido e relutante em aceitar elogios.",
      abilities: ["Força Sobre-Humana", "Resistência Extrema", "Mestre em Espadas"],
      voiceActor: "Chiaki Kobayashi (JP)",
    },
    { 
      id: "4", 
      name: "Heiter", 
      role: "Ex-sacerdote", 
      image: "https://th.bing.com/th/id/OIP.vlHE21iihaE1l2hGcx4WawAAAA?rs=1&pid=ImgDetMain",
      bio: "Um ex-sacerdote que viajou com Frieren no passado. Ele acredita na importância de preparar Frieren para uma vida de conexões humanas.",
      abilities: ["Bênçãos Divinas", "Cura Avançada", "Proteção Espiritual"],
      voiceActor: "Yoji Ueda (JP)",
    },
    { 
      id: "5", 
      name: "Eisen", 
      role: "Guerreiro Anão", 
      image: "https://static.wikia.nocookie.net/frieren/images/8/8d/Eisen.jpg/revision/latest?cb=20210429230625",
      bio: "Membro do grupo original de heróis que derrotou o Rei Demônio. Um guerreiro anão extremamente forte e experiente.",
      abilities: ["Força Avançada", "Resistência de Aço", "Mestre em Machado"],
      voiceActor: "Nobuhiko Okamoto (JP)",
    },
    { 
      id: "6", 
      name: "Himmel", 
      role: "Líder do Grupo de Heróis", 
      image: "https://i.pinimg.com/736x/3f/e5/84/3fe58418cebb967b39605d8417bcf443.jpg",
      bio: "Um dos maiores heróis da história. Apesar de ser um guerreiro talentoso, ele valorizava as conexões humanas mais do que qualquer coisa.",
      abilities: ["Espada Lendária", "Carisma", "Habilidades de Liderança"],
      voiceActor: "Toshiyuki Toyonaga (JP)",
    },
    { 
      id: "7", 
      name: "Aura, a Imortal", 
      role: "Vilã - General do Rei Demônio", 
      image: "https://preview.redd.it/aura-from-frieren-v0-uon8wbn9v7md1.jpg?width=468&format=pjpg&auto=webp&s=98486bd9364e57b3b705715412b1e66dc0729b19",
      bio: "Uma das generais mais poderosas do exército do Rei Demônio. Usa sua magia para controlar e manipular os mortos.",
      abilities: ["Magia de Necromancia", "Controle de Almas", "Aura Demoníaca"],
      voiceActor: "Ayana Taketatsu (JP)",
    },
    { 
      id: "8", 
      name: "Qual", 
      role: "Vilão - General do Rei Demônio", 
      image: "https://static.wikia.nocookie.net/frieren/images/1/18/Qual.png/revision/latest?cb=20220612180713",
      bio: "Um dos generais do exército do Rei Demônio. É extremamente poderoso e quase imbatível em combate.",
      abilities: ["Força Descomunal", "Magia Negra", "Invocação Demoníaca"],
      voiceActor: "Hiroki Yasumoto (JP)",
    }
  ],
};


const FrierenScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: frierenAnime.image }} style={styles.animeBanner} />

      <View style={styles.infoContainer}>
        <Text style={styles.animeTitle}>{frierenAnime.name}</Text>
        <Text style={styles.description}>{frierenAnime.description}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text>🖊 Autor: {frierenAnime.author}</Text>
        <Text>🎬 Estúdio: {frierenAnime.studio}</Text>
        <Text>📆 Ano de Lançamento: {frierenAnime.year}</Text>
      </View>

      <Text style={styles.sectionTitle}>✨ Personagens</Text>
      <FlatList
        data={frierenAnime.characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.characterItem} 
            onPress={() => navigation.navigate("CharacterDetails", { character: item })}
          >
            <Image source={{ uri: item.image }} style={styles.characterImage} />
            <View>
              <Text style={styles.characterName}>{item.name}</Text>
              <Text style={styles.characterRole}>{item.role}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const CharacterDetailsScreen = ({ route, navigation }) => {
  const { character } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.characterImageLarge} />
      <Text style={styles.characterName}>{character.name}</Text>
      <Text style={styles.characterBio}>{character.bio}</Text>

      <Text style={styles.sectionTitle}>🔮 Habilidades</Text>
      <FlatList
        data={character.abilities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.abilityItem}>
            <Ionicons name="sparkles-outline" size={20} color="purple" />
            <Text style={styles.abilityText}>{item}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FrierenAnime" component={FrierenScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  animeBanner: { width: "100%", height: 200, resizeMode: "cover" },
  characterImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  characterImageLarge: { width: "100%", height: 250, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginTop: 15, marginLeft: 15 },
  characterItem: { flexDirection: "row", alignItems: "center", padding: 10, borderRadius: 10, backgroundColor: "#fff", elevation: 2, margin: 5 },
  backButton: { flexDirection: "row", alignItems: "center", padding: 15, alignSelf: "center" },
  backText: { fontSize: 18, marginLeft: 5 },
  animeTitle: { fontSize: 22, fontWeight: "bold", marginTop: 10, textAlign: "center" },
  description: { fontSize: 14, margin: 10, textAlign: "justify" },
  characterName: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginTop: 10 },
  characterBio: { fontSize: 14, textAlign: "justify", marginHorizontal: 15 },
  abilityItem: { flexDirection: "row", alignItems: "center", padding: 5, marginLeft: 15 },
  abilityText: { fontSize: 16, marginLeft: 5 },
});



