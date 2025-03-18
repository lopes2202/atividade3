import React, { Component } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({ nome });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
    
          <Stack.Screen name="Home" component={HomeScreen} />


          <Stack.Screen name="AnimeDetails" component={AnimeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>AnimesFlix</Text>
          <Text style={styles.subtitle}>Melhores Animes</Text>
        </View>

  
        <Image
          source={require('./assets/animeflix.jpg')}  
          style={styles.bannerImage}
        />

        <ScrollView style={styles.animeList}>
          <AnimeCard
            title="Frieren"
            imageUrl={require('./assets/frieren.png')}
            navigation={this.props.navigation}  
            details={{
              sinopse: 'Frieren é uma maga que acompanhou um herói...',
              autor: 'Kenta Shinohara',
              ano: 2023,
            }}
          />
          <AnimeCard
            title="One Piece"
            imageUrl= {require('./assets/onepiece.jpg')}
            navigation={this.props.navigation}
            details={{
              sinopse: 'One Piece segue a jornada de Luffy...',
              autor: 'Eiichiro Oda',
              ano: 1999,
            }}
          />
            <AnimeCard
            title="Naruto Shippuden"
            imageUrl= {require('./assets/naruto.jpg')}
            navigation={this.props.navigation}
            details={{
              sinopse: 'One Piece segue a jornada de Luffy...',
              autor: 'Eiichiro Oda',
              ano: 1999,
            }}
          />

        </ScrollView>
      </View>
    );
  }
}

class AnimeCard extends Component {
  render() {
    return (
      <View style={styles.animeCard}>
        <Image source={this.props.imageUrl} style={styles.animeImage} />
        <Text style={styles.animeTitle}>{this.props.title}</Text>
        <Button
          title="Assistir Agora"
          onPress={() => {
            // Navegando para a tela de detalhes do anime e passando os dados
            this.props.navigation.navigate('AnimeDetails', {
              title: this.props.title,
              imageUrl: this.props.imageUrl,
              details: this.props.details,
            });
          }}
        />
      </View>
    );
  }
}

class AnimeDetails extends Component {
  render() {
    const { route } = this.props;
    const { title, imageUrl, details } = route.params;

    return (
      <View style={styles.container}>
        <Image source={imageUrl} style={styles.animeImage} />
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.detailTitle}>Sinopse:</Text>
        <Text style={styles.detailText}>{details.sinopse}</Text>

        <Text style={styles.detailTitle}>Autor:</Text>
        <Text style={styles.detailText}>{details.autor}</Text>

        <Text style={styles.detailTitle}>Ano de Lançamento:</Text>
        <Text style={styles.detailText}>{details.ano}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#FF6347',
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  animeList: {
    marginTop: 10,
  },
  animeCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
  },
  animeImage: {
    width: '100%', 
    height: undefined, 
    aspectRatio: 16 / 9, 
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'contain', 
  },

  animeTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});
