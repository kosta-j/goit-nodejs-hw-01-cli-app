# CLI application - work with files

### Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
![list](https://i.ibb.co/pWShHP7/list.png)

### Получаем контакт по id

node index.js --action get --id 5
![get by id](https://i.ibb.co/GR153G2/get.png)

### Добавляем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![add](https://i.ibb.co/YQqjng2/add.png)

### Удаляем контакт

node index.js --action remove --id=3
![remove](https://i.ibb.co/K7W2CVf/remove.png)
