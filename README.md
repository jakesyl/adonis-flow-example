# Adonis Flow

To start everything, run `yarn` and then open 2 terminals:

one with `npm run dev` (or `adonis serve --dev --debug`)
the other for `npm run babel:watch` (or `babel appFlow --watch -d app`).
When you make changes in any `appFlow` file (like adding new types or something) babel transpile it in to app folder, where adonis serve see changes, grab them and reload itself.

Please see [this post](https://github.com/adonisjs/adonis-framework/issues/907#issuecomment-402059084) for more information. Original implementation concept by [@Dionid](https://github.com/Dionid) for original implementation and checkout the flow/static type checking adonis conversation [here](https://github.com/adonisjs/discussion/issues/65)

# TODO 

There are a few things that can be done to make this work a lot better:

- [ ] Investigate the use of `babel-node` for development (as opposed to running two commands)
- [ ] More/better examples. Potentially flowify an existing [adonis starter](https://github.com/ahmadarif/adonis4)
- [ ] As per facebook/flow/issues#7014, implement some sort of module-resolver for resolving paths with the `use()` keyword in `.flowconfig`
- [ ] Look at [static typing](https://github.com/adonisjs/discussion/issues/65) for adonis 5 and if it fits, figure out the best way to leverage whatever typing sysem is used for better compatibility.


# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

To start everything working you need to open 2 terminals:

one with npm run dev (or adonis serve --dev --debug)
the other for npm run babel:watch (or babel appFlow --watch -d app).


npm run babel:watch
npm run dev

