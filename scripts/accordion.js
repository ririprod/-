// Ждем полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');
  const offset = 10;

// Переберем все айтемы 
  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    // Проверяем есть ли у айтема контент 
    if (!content) return;

    // 1. Создаем иконку и добавляем ее в header
    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.textContent = '+';
    header.appendChild(icon);

    //  2. Назначем обработчик клика по заголовку
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 3. Если уже активен - закрываем 
      if (isActive) {
        item.classList.remove('active');
        header.classList.remove('active');
        return;
      }

      // 4. Закрываем все остальные айтемы
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        const otherHeader = otherItem.querySelector('.accordion-header');
      })

      //  5. Открываем текущий айтем 
      item.classList.add('active');
      header.classList.add('active');

      //  6. Скроллим к элементу после анимации 
      setTimeout(() => {
        const rect = item.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let targetScroll = scrollTop + rect.top - offset;

        //  7. Границы скролла
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (targetScroll < 0) targetScroll = maxScroll;
        if (targetScroll > maxScroll) targetScroll = maxScroll;

        //  8. Плавная прокрутка к активному айтему
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });
      }, 300);
    });
  });
})