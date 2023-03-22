/* NODE JS
Практика с env файлом,
Посмотри библиотку dotenv.
Создай файл .env
В нем создай переменную Password
Импортируй эту переменную в главный файл index.html
Сделай вывод в консоль значение данной переменной
Если все корректно вывелось то сделай следущие пункты
Добавь файл .env в файл .gitignore
Запуш свой проект на github
Настрой лайв страницу чтоб она отображалась
почитай про CI/CD и github actions
Как можно использовать github secrets
Проверь выводится ли в консоль то же значение на лайв странице что и локально выводилось */

require('dotenv').config()
console.log(process.env)

// Octokit.js
// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//   auth: 'YOUR-TOKEN'
// })

// await octokit.request('GET /orgs/{org}/actions/secrets', {
//   org: 'ORG',
//   headers: {
//     'X-GitHub-Api-Version': '2022-11-28'
//   }
// })

// console.log(octokit);