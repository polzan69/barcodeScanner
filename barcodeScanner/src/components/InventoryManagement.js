import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const InventoryManagement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory List</Text>
      
      <ScrollView style={styles.tableContainer}>
        {/* Placeholder table header */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Barcode</Text>
          <Text style={styles.headerCell}>Product</Text>
          <Text style={styles.headerCell}>Qty</Text>
        </View>
        
        {/* Placeholder table rows */}
        <View style={styles.tableRow}>
          <Text style={styles.cell}>123456789</Text>
          <Text style={styles.cell}>Sample Product</Text>
          <Text style={styles.cell}>1</Text>
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.cell}>987654321</Text>
          <Text style={styles.cell}>Test Item</Text>
          <Text style={styles.cell}>2</Text>
        </View>
      </ScrollView>
      
      <Text style={styles.subText}>
        CRUD operations will be implemented here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tableContainer: {
    flex: 1,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default InventoryManagement;     