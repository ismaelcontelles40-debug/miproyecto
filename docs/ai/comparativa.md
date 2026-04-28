# Comparativa de asistentes IA

En esta práctica se comparan ChatGPT y Claude para comprobar cómo ayudan en tareas de desarrollo web.

## 1. Explicación de conceptos técnicos

Prompt utilizado  
Explica qué es LocalStorage en JavaScript con un ejemplo sencillo.

Resultado esperado  
El asistente debe explicar que LocalStorage permite guardar datos en el navegador y que esos datos se mantienen aunque se recargue la página.

Conclusión  
ChatGPT explicó el concepto de forma clara y con ejemplos. Claude también lo explicó bien, aunque con una respuesta más extensa. Para aprender rápido, ChatGPT resultó más directo.

## 2. Detección de errores en código

Prompt utilizado  
Revisa este código JavaScript y dime qué error tiene:

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.push({
  id: Date.now(),
  title: "Nueva tarea",
  completed: false
});

Error detectado  
El problema es que si no hay datos guardados en LocalStorage, tasks será null y no se podrá usar .push().

Solución  
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

Conclusión  
Los asistentes detectaron correctamente el error y explicaron la solución. Es importante validar los datos antes de utilizarlos.

## 3. Generación de funciones desde lenguaje natural

Prompt utilizado  
Genera una función en JavaScript para filtrar tareas por todas, completadas y pendientes.

Código generado  
function filterTasks(tasks, filter) {
  if (filter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  if (filter === "pending") {
    return tasks.filter((task) => !task.completed);
  }

  return tasks;
}

Conclusión  
La función es correcta, fácil de entender y se puede integrar directamente en el proyecto TaskFlow.

## 4. Comparativa final

Criterio               ChatGPT                 Claude  
Explicaciones          Claras y directas       Más largas  
Detección de errores   Buena                  Buena  
Generación de código   Muy útil               Útil  
Facilidad de uso       Alta                   Alta  

## Conclusión general

Los asistentes de inteligencia artificial son herramientas muy útiles para aprender y programar. Permiten ahorrar tiempo, detectar errores y generar código rápidamente. Sin embargo, es importante revisar siempre las respuestas y entender el código generado.