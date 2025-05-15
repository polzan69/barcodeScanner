import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const BarcodeScanner = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Barcode Scanner Placeholder</Text>
      <Text style={styles.subText}>Camera integration will be added here</Text>
      
      {/* Temporary button to test navigation to ProductRegistration */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ProductRegistration', { barcodeId: '123456789' })}
      >
        <Text style={styles.buttonText}>Simulate Scan (Test)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BarcodeScanner;