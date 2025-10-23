import React, { useState } from 'react';
import { SectionList, Text, View, StyleSheet, TextInput, SafeAreaView } from 'react-native';

// Dados dos produtos com nome, preço e categoria
const todosProdutos = [
  { title: 'Eletrônicos', data: [
    { nome: 'Notebook', preco: 3500.00 },
    { nome: 'Smartphone', preco: 2000.00 },
    { nome: 'TV', preco: 1800.00 },
    { nome: 'Tablet', preco: 1200.00 },
    { nome: 'Fone de Ouvido', preco: 150.00 },
  ]},
  { title: 'Roupas', data: [
    { nome: 'Camiseta', preco: 50.00 },
    { nome: 'Calça', preco: 120.00 },
    { nome: 'Jaqueta', preco: 200.00 },
    { nome: 'Tênis', preco: 250.00 },
    { nome: 'Blusa', preco: 80.00 },
  ]},
  { title: 'Alimentos', data: [
    { nome: 'Arroz', preco: 25.00 },
    { nome: 'Feijão', preco: 8.00 },
    { nome: 'Macarrão', preco: 5.00 },
    { nome: 'Café', preco: 15.00 },
    { nome: 'Açúcar', preco: 4.00 },
  ]},
  { title: 'Livros', data: [
    { nome: 'Romance', preco: 45.00 },
    { nome: 'Ficção Científica', preco: 50.00 },
    { nome: 'Biografia', preco: 40.00 },
    { nome: 'Técnico', preco: 120.00 },
  ]},
];

export default function CatalogoInterativo() {
  const [filtro, setFiltro] = useState('');

  // Função para filtrar produtos por nome
  const filtrarProdutos = () => {
    if (!filtro.trim()) {
      return todosProdutos;
    }

    const filtroLower = filtro.toLowerCase();
    
    // Filtra os produtos e mantém apenas as seções que têm produtos correspondentes
    const secoesFiltradas = todosProdutos
      .map(secao => ({
        title: secao.title,
        data: secao.data.filter(produto => 
          produto.nome.toLowerCase().includes(filtroLower)
        )
      }))
      .filter(secao => secao.data.length > 0);

    return secoesFiltradas;
  };

  const produtosFiltrados = filtrarProdutos();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titulo}>Catálogo de Produtos</Text>
        <TextInput
          style={styles.inputFiltro}
          placeholder="Buscar produto..."
          value={filtro}
          onChangeText={setFiltro}
        />
      </View>
      
      <SectionList
        sections={produtosFiltrados}
        keyExtractor={(item, index) => item.nome + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemNome}>{item.nome}</Text>
            <Text style={styles.itemPreco}>
              R$ {item.preco.toFixed(2).replace('.', ',')}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum produto encontrado</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  inputFiltro: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionHeader: {
    fontSize: 20,
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 12,
    fontWeight: 'bold',
    marginTop: 8,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemNome: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  itemPreco: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
