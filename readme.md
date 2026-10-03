# Project Documentation / Документация проекта

## English

### Read the docs for this project

#### Install NPM dependencies

Run this command in the project root:

`npm install`

#### Tailwind CSS

If Tailwind CSS is not yet installed in your project:

`npm install tailwindcss @tailwindcss/cli`

Start Tailwind CLI in watch mode to automatically rebuild styles on changes:

`npx @tailwindcss/cli -i ./src/css/input.css -o ./dist/css/output.css --watch`

> **Note:** Keep this process running while you work on styles.

#### Gulp

If you don't have the Gulp command line utility installed globally:

`npm install --global gulp-cli`

Then, in the project root, start watching for changes in the `/src` folder:

`gulp`

> Gulp will process your files and update the `/dist` folder automatically and will be listening for further changes.

#### Live-server

##### Start your local development server

If `live-server` is not installed on your machine:

`npm install -g live-server`

Navigate to the `dist` folder and start the dev server:

`cd dist && live-server --port=5501 --wait=500`

> **Important:** If you only want to preview the project content, simply start the local dev server as described above.  
> Make sure the project is built first (either by running `gulp` or the Tailwind watcher) before opening the preview.

> **Important 2:** You should run Gulp, Tailwind and live-server in parallel terminal windows, so they work together.

---

## Русский

### Прочтите документацию по этому проекту

#### Установка зависимостей NPM

Выполните в корневой папке проекта:

`npm install`

#### Tailwind CSS

Если Tailwind CSS ещё не установлен в вашем проекте:

`npm install tailwindcss @tailwindcss/cli`

Запустите интерфейс командной строки Tailwind с опцией `--watch`, чтобы автоматически пересобирать стили при изменениях:

`npx @tailwindcss/cli -i ./src/css/input.css -o ./dist/css/output.css --watch`

> **Примечание:** Оставьте этот процесс запущенным, пока вы работаете со стилями.

#### Gulp

Если утилита командной строки Gulp не установлена глобально:

`npm install --global gulp-cli`

Затем в корневой папке проекта запустите отслеживание изменений в папке `/src`:

`gulp`

> Gulp автоматически обработает файлы, обновит папку `/dist` и будет ожидать дальнейших изменений.

#### Live-server

##### Запустите локальный сервер разработки

Если `live-server` не установлен на вашем компьютере:

`npm install -g live-server`

Перейдите в папку `dist` и запустите сервер разработки:

`cd dist && live-server --port=5501 --wait=500`

> **Важно:** Если вам нужно только предварительно просмотреть содержимое проекта, просто запустите локальный сервер разработки, как описано выше.  
> Убедитесь, что проект предварительно собран (запустите `gulp` или watcher Tailwind), прежде чем открывать предпросмотр.

> **Важно 2:** Запускайте Gulp, Tailwind и live-server в параллельных окнах терминала, чтобы они работали совместно.
