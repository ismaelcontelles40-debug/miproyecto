/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints para gestionar tareas en TaskFlow
 */

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas obtenida correctamente
 */

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - prioridad
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Estudiar backend
 *               prioridad:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 example: high
 *     responses:
 *       201:
 *         description: Tarea creada correctamente
 *       400:
 *         description: Datos inválidos
 */

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   patch:
 *     summary: Completar o descompletar una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea actualizada correctamente
 *       404:
 *         description: Tarea no encontrada
 */

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: ID de la tarea
 *     responses:
 *       204:
 *         description: Tarea eliminada correctamente
 *       404:
 *         description: Tarea no encontrada
 */
const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  toggleTask,
  deleteTask,
} = require("../controllers/task.controller");

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id", toggleTask);
router.delete("/:id", deleteTask);

module.exports = router;