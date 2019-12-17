// Минимальное количество символов в поле лицевого счета.
const minAccountLength = 5;

// Элементы формы
const form = document.getElementById("form");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const accountError = document.getElementById("account-error");
const questionError = document.getElementById("question-error");
const fileButton = document.getElementById("upload");
const acceptPersonal = document.getElementById("acceptPersonal");
const submitButton = document.getElementById("submitButton");
const formSubmitted = document.getElementById("formSubmitted");
const emptyOption = document.getElementById("emptyOption");

const fields = [
    {
        'fieldName': document.getElementById("name"),
        'fieldLabel': document.getElementById("nameLabel"),
        'event': 'input',
    },
    {
        'fieldName': document.getElementById("email"),
        'fieldLabel': document.getElementById("emailLabel"),
        'event': 'input',
    },
    {
        'fieldName': document.getElementById("account"),
        'fieldLabel': document.getElementById("accountLabel"),
        'event': 'input',
    },
    {
        'fieldName': document.getElementById("question"),
        'fieldLabel': document.getElementById("questionLabel"),
        'event': 'change',
    },
    {
        'fieldName': document.getElementById("message"),
        'fieldLabel': document.getElementById("messageLabel"),
        'event': 'input',
    },
]

