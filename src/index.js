import express from 'express'

const server = express();
const port = 3333

server.listen(port, () => {
    console.log('listening on port ' + port);
});