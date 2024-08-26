# boilerplate-html

this project use it tailwind to run it you have to install

## Get started

The first thing you have to do is:

- Run `npx tailwindcss -i ./styles/css/input.css -o ./styles/css/output.css --watch`
  that will help you to execute taildwind package.

- Once you have installed taildwind in other terminal you proceed to run
  `npm install -g sass` to install Sass.

- You need to execute Sass input and output file, with that you have to run
  `sass styles/scss/main.scss styles/css/main.css --watch`

You need to keep in mind for this boilerplate in the tailwind.config.js into the content: ["*.html"], only I added .html extension, if you need to work with other format you have to add it. for example:
/\*_ @type {import('tailwindcss').Config} _/
module.exports = {
content: ["{html,js}"],
}
