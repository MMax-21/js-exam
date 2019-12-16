// текущее состояние полей. true - корректно заполнено, false - есть ошибки
let nameField = false;
let emailField = false;
let accountField = false;
let questionField = false;
let messageField = false;
let acceptField = false;

// Добавляем обработку заголовка поля
function addLabelActivity(field) {
// Если поле в фокусе, заголовок на рамке поля
    field.fieldName.addEventListener('focus', function(){
        field.fieldLabel.className = 'placeholder-up';
    });
// Если поле не в фокусе
    field.fieldName.addEventListener('blur', function(){
// Если поле пустое, заголовок переходит в placeholder
        if (field.fieldName.value.length == 0) {
            field.fieldLabel.className = 'placeholder';
        }
// Если в поле есть данные, заголовок на рамке поля
        else {
            field.fieldLabel.className = 'placeholder-up';
        }
    });
}

// Добавляем события при изменении поля
function addEventActivity(field) {
    if (field.event) {
        field.fieldName.addEventListener(field.event, (e) => { fieldChange(e) });
    }
}

// При изменении поля обрабатываем его содержимое
function fieldChange(e) {
// объект поля
    let field = e.currentTarget;
    switch (field.name) {
// Обрабатываем поле имени
        case 'name':
            nameField = checkText(field.value);
            break;
// Обрабатываем поле почты
        case 'email':
            emailField = checkEmail(field.value);
// обрабатываем сообщение об ошибке
            setError(emailField, emailError);
            break;
// Обрабатываем поле лицевого счета
        case 'account':
            accountField = checkNumber(field.value, minAccountLength);
// обрабатываем сообщение об ошибке
            setError(accountField, accountError);
            break;
// Обрабатываем поле списка вопросов
        case 'question':
            questionField = checkText(field.value);
// обрабатываем сообщение об ошибке
            setError(questionField, questionError);
            break;
// обрабатываем поле текста обращения
        case 'message':
            messageField = checkText(field.value);
            break;
// обрабатываем флажок согласия на обработку персональных данных            
        case 'acceptPersonal':
            acceptField = checkBox(field.checked);
            break;
    }
// Проверям корректность заполнения формы
    checkForm();
}

// Включаем подпись с сообщением об ошибке
function setError(state, object) {
    let display = (state) ? 'none' : 'block';
    object.style.display = display;

}

// Проверяем, что текст введен.
function checkText(value) {
    if (value.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

// Проверяем, что введен корректный email
function checkEmail(value) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value.search(re) != 0) {
        return false;
    }
    else {
        return true;
    }
}

// Проверяем, что введено число.
function checkNumber(value, minLength) {
// Проверяем минимальное количество символов
    if (value.length < minLength) {
        return false;
    }
// Проверяем что введено число
    if (!Number.isInteger(+value)) {
        return false;
    }
    else {
        return true;
    }
}

// Получаем состояние флажка
function checkBox(value) {
    return value;
}

// Проверям корректность заполнения формы
function checkForm() {
    if (nameField && emailField && accountField && questionField && messageField && acceptField) { //
// Включаем кнопку подтверждения формы
        submitButton.disabled = false;
    }
    else {
// Выключаем кнопку подтверждения формы
        submitButton.disabled = true;
    }
}

// Форма выбора файла
function openDialog() {
    document.getElementById('file').click();
}

// Добавление событий для поля формы
function addFormFieldActivity() {
    for (let i = 0; i < fields.length; i++) {
        addLabelActivity(fields[i]);
        addEventActivity(fields[i]);
    }
}

// Добавляем EventListener для флажка согласия на обработку персональных данных
acceptPersonal.addEventListener('change', (e) => {fieldChange(e)});
// Добавляем EventListener для кнопки загрузки файла
fileButton.addEventListener('click', openDialog);

// Добавляем события для полей формы
addFormFieldActivity();
