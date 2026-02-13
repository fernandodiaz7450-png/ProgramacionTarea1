import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  // Estado del usuario
  const [usuario, setUsuario] = useState({
    nombre: "",
    edad: ""
  });

  // Validación: la edad debe ser numérica y no vacía
  const edadValida = usuario.edad !== "" && !isNaN(Number(usuario.edad));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulario de Usuario</Text>

      {/* Input para nombre */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={usuario.nombre}
        onChangeText={(texto) =>
          setUsuario({ ...usuario, nombre: texto })
        }
      />

      {/* Input para edad */}
      <TextInput
        style={styles.input}
        placeholder="Ingrese su edad"
        keyboardType="numeric"
        value={usuario.edad}
        onChangeText={(texto) =>
          setUsuario({ ...usuario, edad: texto })
        }
      />

      {/* Mensaje condicionado usando operador ternario */}
      {edadValida ? (
        <Text style={styles.mensaje}>
          Hola, {usuario.nombre}. Tienes {usuario.edad} años.
        </Text>
      ) : (
        <Text style={styles.error}>
          Por favor ingrese una edad válida.
        </Text>
      )}
    </View>
  );
}

// Estilos básicos con StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center"
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  },
  mensaje: {
    fontSize: 16,
    color: "green",
    textAlign: "center"
  },
  error: {
    fontSize: 14,
    color: "red",
    textAlign: "center"
  }
});