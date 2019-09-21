* CRUD básico com node js.

- 1. Instalar as dependências:
    $ na raiz do projeto: npm install

- 2. Iniciar servidor:
    $ npm run dev

____________________________________________________________________________________________________________


**#### 1 - Criar **

Request:

```json
Método: POST
URL: /api/movie
Body:
{
  "title": "Movie",
  "description": "Description"
}
```

Response:

```json
{
    "_id": "5d8658f3386df4b46e4e4574",
    "title": "Movie",
    "description": "Description",
    "creatAt": "2019-09-21T17:08:03.874Z",
    "__v": 0
}
```

**#### 2 - Atualizar **

Request:

```json
Método: PUT
URL: /api/movie/:id
Body:
{
    "title": "New Movie"
}
```

Response:

```json
{
    "_id": "5d865890386df4b46e4e4567",
    "title": "New Movie",
    "description": "Description",
    "creatAt": "2019-09-21T17:06:24.091Z",
    "__v": 0
}
```

**#### 3 - Listagem paginada **

Request:

```json
Método: GET
URL: /api/movie?page=2
```

Response:

```json
{
    "docs": [
        {
            "_id": "5d8658f0386df4b46e4e4571",
            "title": "Movie 3",
            "description": "Description 3",
            "creatAt": "2019-09-21T17:08:00.572Z",
            "__v": 0
        },
        {
            "_id": "5d8658f1386df4b46e4e4572",
            "title": "Movie 3",
            "description": "Description 3",
            "creatAt": "2019-09-21T17:08:01.709Z",
            "__v": 0
        },
        {
            "_id": "5d8658f2386df4b46e4e4573",
            "title": "Movie 3",
            "description": "Description 3",
            "creatAt": "2019-09-21T17:08:02.823Z",
            "__v": 0
        },
        {
            "_id": "5d8658f3386df4b46e4e4574",
            "title": "Movie 3",
            "description": "Description 3",
            "creatAt": "2019-09-21T17:08:03.874Z",
            "__v": 0
        }
    ],
    "total": 14,
    "limit": 10,
    "page": "2",
    "pages": 2
}
```

**#### 4 - Listagem por ID **

Request:

```json
Método: GET
URL: /api/movie/:id

Response:

```json
{
    "_id": "5d865890386df4b46e4e4567",
    "title": "New Movie",
    "description": "Description 1",
    "creatAt": "2019-09-21T17:06:24.091Z",
    "__v": 0
}
```

**#### 5 - Remover por ID **

Request:

```json
Método: DELETE
URL: /api/movie/:id

Response:

Status 200: