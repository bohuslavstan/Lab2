document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Запобігаємо перезавантаженню сторінки при натисканні на submit

        const formData = new FormData(form);
        const formEntries = Array.from(formData.entries()); // Конвертуємо об'єкт FormData в масив масивів

        const surveyData = {};
        for (const [key, value] of formEntries) {
            surveyData[key] = value;
        }

        saveToLocalStorage(surveyData);
        form.reset(); // Очищаємо форму після відправки
    });
});

function saveToLocalStorage(data) {
    let surveys = JSON.parse(localStorage.getItem('surveys')) || []; // Отримуємо попередні дані або створюємо новий масив
    surveys.push(data);
    localStorage.setItem('surveys', JSON.stringify(surveys)); // Зберігаємо дані у LocalStorage
}
