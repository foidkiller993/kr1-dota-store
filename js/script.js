// Ждем, пока загрузится страница
document.addEventListener('DOMContentLoaded', () => {
    // Находим все кнопки с классом btn--buy
    const buyButtons = document.querySelectorAll('.btn--buy');

    // Для каждой кнопки вешаем событие клика
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Находим карточку товара, внутри которой нажали кнопку
            const card = event.target.closest('.product-card');
            // Берем название товара из заголовка карточки
            const productName = card.querySelector('.product-card__title').innerText;
            
            // Показываем всплывающее окно (имитация покупки)
            alert(`Товар "${productName}" добавлен в корзину!`);
            
            // Можно еще менять текст кнопки для наглядности
            button.innerText = 'В корзине';
            button.style.backgroundColor = '#4CAF50'; // Зеленый цвет
            button.style.color = '#fff';
        });
    });
});