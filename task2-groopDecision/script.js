/**************************************коменты для тимы******************************************/

let wrapper    = document.querySelector('.wrapper'), //получаем элемент всей страницы на который вешаем прослкшиватель
    resContain = document.querySelector('.result__contain'),//получаем элемент с выводом результата
    res        = ['Пивасик', 'Мартини', 'Водочка', 'Вискарик'],//массив вариантов ответа
    arr        = [],                                               //массив результатов по каждому блоку
    arrCheck   = [arrTemper  = document.getElementsByName('temper'),//массив элементов которые возвращают вес ответа который уходит в arr
                  arrSnack   = document.getElementsByName('snack'),
                  arrFiesta  = document.getElementsByName('fiesta'),
                  arrFriend  = document.getElementsByName('friend'),];

function chengeDisabled(x){//функция снятия блокировки с ответов
    for(let i = 0; i<x.length; i++){ //прохождение по следующему блоку вопросов
        x[i].removeAttribute('disabled'); //снять с каждого вопроса в блоке блокировку
    };
    arrCheck.splice(0,1);//удаление блока от которого получен результат
};

wrapper.addEventListener('click', (e)=>{// запуск прослушивания события
    let click = e.target,               //получение елемента на котором сработал клик
        contain = document.querySelector('.question'),//получение доступа к контейнеру с вопросом
        wrapper = document.querySelector('.wrapper');//локальный доступ к всему документу для локального использования в рамках события клик
    if(click.checked == true){          //проверка элементов имеющих атрибут check если он получил событие то:
        arr.push(click.dataset.indexNumber);//записать в массив arr значение data-index-number
        contain.classList.add('animation'); //навесить на контейнер с вопросами класс "animation"
        setTimeout(()=>{wrapper.removeChild(contain);}, 900); //запустить стрелочную функцию которая удалит у обертки первого потомка через 0.9сек
        (arrCheck.length !==0)?chengeDisabled(arrCheck[0]):console.log('массив закончился');//запуск проверки массива с блоками вопросов, если блоки с вопроссами еще есть запустить функицю для снятия блокировки с ответами
    };
    if(arr.length==5){  //проверка длинны массива с ответами, если ответили на все пять вопросов, то запустить стрелочную функцию, которая через 1.1 секунты выполнит проверку на самое часто встерающиеся число
        setTimeout(()=>{
        let countRepeat = 0, //счетчик повторений
            itemRepeat = 1,  //временный элемент в который заносится количество совподений(единица потому что нас не интересует одно совпадение)
            item;            // элемент который встречается чаще остальных по окончанию проверки
        for (let i=0; i<arr.length; i++){ //проход по массиву где получаем нулевое значение элемента
            for (let j=i; j<arr.length; j++){//еще один проход по массиву где сравниваем нулевой элемент массива с другими элементами массива
                if (arr[i] == arr[j]) //если нулевой элемент равен элемунту вызванного на момет итерации цикла
                    countRepeat++; // то увеилчить счетчик повторений на единицу
                if (itemRepeat<countRepeat){ //если "счетчик повторений" больше чем количество повторений то:
                itemRepeat=countRepeat; //количество повторений прировнять к значению счетчика повторений
                item = arr[i]; //и элемент мессива который проверялся, занести в переменную item
                }
            }
        countRepeat=0; // обнуление счетчика, для новой проверки совпадений
        }
    resContain.innerText = res[--item];}, 1100);//в контейнере результата изменить текст равный префикстному декременту item из массива результатов 
    };
});