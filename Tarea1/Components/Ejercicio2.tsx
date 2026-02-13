import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Ejercicio2() {
  // Estado del contador
  const [contador, setContador] = useState(0);

  // Validaciones
  const esPar = contador % 2 === 0;
  const esNegativo = contador < 0;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>

      {/* Valor actual */}
      <Text style={styles.numero}>{contador}</Text>

      {/* Botones */}
      <View style={styles.botones}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.textoBoton}>Sumar +1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boton}
          onPress={() => setContador(contador - 1)}
        >
          <Text style={styles.textoBoton}>Restar -1</Text>
        </TouchableOpacity>
      </View>

      {/* Mensaje si es negativo */}
      {esNegativo && (
        <Text style={styles.error}>
          No se recomienda valores negativos
        </Text>
      )}

      {/* Par o impar con operador ternario */}
      <Text style={esPar ? styles.par : styles.impar}>
        {esPar ? "Número par" : "Número impar"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  titulo: {
    fontSize: 22,
    marginBottom: 10
  },
  numero: {
    fontSize: 40,
    marginBottom: 20
  },
  botones: {
    flexDirection: "row",
    marginBottom: 20
  },
  boton: {
    backgroundColor: "#444",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5
  },
  textoBoton: {
    color: "white"
  },
  error: {
    color: "red",
    marginBottom: 10
  },
  par: {
    color: "blue",
    fontSize: 18
  },
  impar: {
    color: "purple",
    fontSize: 18
  }
});