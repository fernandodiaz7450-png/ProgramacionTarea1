import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Ejercicio3() {
  // Estado booleano
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Toggle de Visibilidad</Text>

      {/* Botón con texto dinámico usando ternario */}
      <TouchableOpacity
        style={styles.boton}
        onPress={() => setMostrarDetalles(!mostrarDetalles)}
      >
        <Text style={styles.textoBoton}>
          {mostrarDetalles ? "Ocultar detalles" : "Mostrar detalles"}
        </Text>
      </TouchableOpacity>

      {/* Contenido condicionado */}
      {mostrarDetalles ? (
        <View style={styles.detalles}>
          <Text style={styles.descripcion}>
            Detalles del usuario: Información adicional visible.
          </Text>

          <Image
            source={{
              uri: "https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png",
            }}
            style={styles.imagen}
          />
        </View>
      ) : (
        <Text style={styles.oculto}>Detalles ocultos</Text>
      )}
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
    marginBottom: 20
  },
  boton: {
    backgroundColor: "#444",
    padding: 12,
    borderRadius: 6,
    marginBottom: 20
  },
  textoBoton: {
    color: "white"
  },
  detalles: {
    alignItems: "center"
  },
  descripcion: {
    marginBottom: 10,
    textAlign: "center"
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  oculto: {
    color: "gray"
  }
});