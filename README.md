# CLI application - work with files

### Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
![list](https://monosnap.com/file/1aNJ7JDmosJh0JBp137LvdLjuOjwOG)

### Получаем контакт по id

node index.js --action get --id 5
![get by id](https://monosnap.com/file/VaXivYDdJbaMu7FFyHCk752wnTVcLY)

### Добавляем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![add](https://ibb.co/c37TfqJ)

### Удаляем контакт

node index.js --action remove --id=3
![remove](https://monosnap.com/file/t61TrtxIXdWKeJCSqMSJQyeYm9pLr8)
