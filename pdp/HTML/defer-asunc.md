# async	Порядок загрузки (кто загрузится первым, тот и сработает). DOMContentLoaded: Не имеет значения. Может загрузиться и выполниться до того, как страница полностью загрузится. Такое случается, если скрипты маленькие или хранятся в кеше, а документ достаточно большой.

# defer	Порядок документа (как расположены в документе). DOMContentLoaded: Выполняется после того, как документ загружен и обработан (ждёт), непосредственно перед DOMContentLoaded.