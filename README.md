# TODO
## INTRODUCTION
CS50x 2024 final project. Besides the technologies taught in the lectures, additional
technologies were used aiming to learn web development.

Video demo: <https://youtu.be/-6yQxfNHeyA>

## DESCRIPTION
TODO is a to-do list desktop web app that helps you keep track of your daily and
weekly tasks.

### Frontend
#### Technologies
The frontend was built using [Vite](https://vitejs.dev/),
[React](https://react.dev/) (and its associated ecosystem packages, e.g.
[React Router](https://reactrouter.com/en/main), [React Hook Form](https://react-hook-form.com/))
for reactive UI components, [Tailwind](https://tailwindcss.com/) for main styling,
and [shadcn/ui](https://ui.shadcn.com/) for accessible primitive components.

#### File structure
The frontend source files are structured as below:
```
.
└── src/
    ├── assets/
    ├── features/
    │   ├── authentication/
    │   └── todos/
    ├── lib/
    ├── routes/
    ├── ui/
    ├── main.css
    └── main.jsx
```
- `assets/`: contains icons and images for general use;
- `features/`: contains all features implemented in the app. Each feature has its
own folder and associated source files. An `index.js` file exports all relevant
components of each feature for the `routes` to use;
- `lib/`: contains help functions for general use;
- `routes/`: contains all routes. The `features` and `ui` folders will serve the
routes with components to display when the user access navigate through the app;
- `ui/`: contains all base components of the app;
- `main.css`: supplementary custom styling;
- `main.jsx`: Starts the app.

The file structure was inspired by [Bullet-proof React](https://github.com/alan2207/bulletproof-react) and chosen for its
vertical structuring. Each section or folder only exports what is needs to, and keeps
its local source files private.

### Backend
#### Techonologies
The backend was built using [Express](https://expressjs.com/)
(and its associated ecosystem middlewares). The backend was built as an JSON API.

#### File structure
The backend source files are structured as below:
```
.
└── src/
├── api/
│   ├── controllers/
│   ├── routes/
│   ├── schemas/
│   └── index.js
├── db/
├── middlewares/
├── utils/
├── server.js
└── app.js
```
- `api/`: contains all routes for API endpoints and its handling. An `index.js`
file exports the mounted API endpoints to be consumed by the app;
- `db/`: contains the schema and connection to the database;
- `middlewares/`: contains general middlewares used by the app;
- `utils/`: contains help functions for general use;
- `app.js`: Creates the app;
- `server.js`: starts the server.

Using the concepts learned from [Bullet-proof React](https://github.com/alan2207/bulletproof-react),
the files were vertically structured. The backend source files of [MonkeyType](https://github.com/monkeytypegame/monkeytype) was used as inspiration
for naming the folders.

