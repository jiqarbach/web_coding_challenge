import express from 'express'
import { Request, Response } from 'express'
require('./database')
const app = express()

const port = 3000

app.get('/test/t1', (req: Request,res: Response) => {
    return res.send('Hello Test t1 !')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})