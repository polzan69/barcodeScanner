import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ProductRegistration = ({ route, navigation }) => {
  // Placeholder for barcode data that will be passed from scanner
  const { barcodeId = 'No Barcode' } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Registration Form</Text>
      <Text style={styles.barcodeText}>Barcode: {barcodeId}</Text>
      <Text style={styles.subText}>Form fields will be added here:</Text>
      <View style={styles.fieldList}>
        <Text>• Category</Text>
        <Text>• Product Name</Text>
        <Text>• Quantity</Text>
        <Text>• State</Text>
      </View>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('InventoryManagement')}
      >
        <Text style={styles.buttonText}>Save (Test)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  barcodeText: {
    fontSize: 18,
    color: '#007AFF',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  fieldList: {
    marginLeft: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductRegistration;