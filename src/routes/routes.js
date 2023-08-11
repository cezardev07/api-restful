import express from "express"
import { database } from "../database/database.js"
import { uuid } from "uuidv4"

const router = express.Router()

router.get("/", (_req, res) => {
    return res.status(200).json(database)
})

router.post("/", (req, res) => {
    if (req.body.nome && req.body.email && req.body.senha) {
        const newUser = {
            id: uuid(),
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        }
        database.push(newUser)
        return res.status(201).json({
            feedback: "Usuário criado com sucesso!",
            status: 201,
        })
    }
    return res.status(400).json({
        feedback: "Dados inválidos para criação de usuário!",
        status: 400,
    })
})

router.put("/", (req, res) => {
    const { id } = req.body
    if (req.body.nome && req.body.email && req.body.senha) {
        const foundUser = database.find(user => user.id === id)
        if (foundUser) {
            foundUser.nome = req.body.nome
            foundUser.email = req.body.email
            foundUser.senha = req.body.senha
            return res.status(200).json({
                feedback: "Usuário editado com sucesso!",
                status: 200,
            })
        }
        return res.status(404).json({
            feedback: "Usuário não encontrado para edição!",
            status: 404,
        })
    }
    return res.status(400).json({
        feedback: "Dados inválidos para edição de usuário!",
        status: 400,
    })
})

router.delete("/", (req, res) => {
    const { id } = req.body
    const foundIndex = database.findIndex(user => user.id === id)
    
    if (foundIndex !== -1) {
        database.splice(foundIndex, 1)
        return res.status(200).json({
            feedback: "Usuário deletado com sucesso!",
            status: 200,
        })
    }
    return res.status(404).json({
        feedback: "Usuário não encontrado para exclusão!",
        status: 404,
    })
})

router.delete("/delete-all-users", (_req, res) => {
    if (database.length > 0) {
        database.splice(0, database.length)
        return res.status(200).json({
            feedback: "Todos os usuários foram deletados com sucesso!",
            status: 200,
        })
    }
    return res.status(404).json({
        feedback: "Nenhum usuário para deletar!",
        status: 404,
    })
})

export default router
