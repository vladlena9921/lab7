var groupmates = [
 {
 "name": "Ксения",
 "group": "БВТ1702",
 "age": 19,
 "marks": [4, 3, 5, 5, 4]
 },
 {
 "name": "Мария",
 "group": "БВТ1701",
 "age": 20,
 "marks": [3, 2, 3, 4, 3]
 },
 {
 "name": "Елизавета",
 "group": "БВТ1702",
 "age": 19,
 "marks": [3, 5, 4, 3, 5]
 },
 {
 "name": "Ирина",
 "group": "БВТ1701",
 "age": 18,
 "marks": [5, 5, 5, 4, 5]
 }
];

var rpad = function(str, length) {
 // js не поддерживает добавление нужного количества символов
 // справа от строки то есть аналога ljust из языка Python здесь нет
 str = str.toString(); // преобразование в строку
 while (str.length < length)
 str = str + ' '; // добавление пробела в конец строки
 return str; // когда все пробелы добавлены, возвратить строку
};

var printStudents = function(students){
 console.log(
 rpad("Имя студента", 15),
 rpad("Группа", 8),
 rpad("Возраст", 8),
 rpad("Оценки", 20)
 );
 // был выведен заголовок таблицы
 for (var i = 0; i<=students.length-1; i++){
 // в цикле выводится каждый экземпляр студента
 console.log(
 rpad(students[i]['name'], 15),
 rpad(students[i]['group'], 8),
 rpad(students[i]['age'], 8),
 rpad(students[i]['marks'], 20)
 );
 }
 console.log('\n'); // добавляется пустая строка в конце вывода
};
printStudents(groupmates);


var studentsFilter = function(group_filter)
{
	for(var i=0; i<groupmates.length; i++)
	{
		if (group_filter == groupmates[i].group)
		{
			console.log(
			rpad(groupmates[i]['name'], 15),
			rpad(groupmates[i]['group'], 8),
			rpad(groupmates[i]['age'], 8),
			rpad(groupmates[i]['marks'], 20)
			);
		}
	}
}

var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i<foldBtns.length; i++){
 foldBtns[i].addEventListener("click", function(e) {
 elem = e.target.parentElement.parentElement.parentElement;
 if (elem.className == "one-post"){
	elem.children[0].children[1].innerHTML = "<h2>развернуть</h2>";
	elem.className = "one-post folded";
	return;
 }
 if (elem.className == "one-post folded"){
	 elem.children[0].children[1].innerHTML = "<h2>свернуть</h2>";
	elem.className = "one-post";
	return;
 }
});
}


