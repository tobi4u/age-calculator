document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const dayInput = form.querySelector('input[placeholder="DD"]');
    const monthInput = form.querySelector('input[placeholder="MM"]');
    const yearInput = form.querySelector('input[placeholder="YYYY"]');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const day = parseInt(dayInput.value, 10);
      const month = parseInt(monthInput.value, 10) - 1;
      const year = parseInt(yearInput.value, 10);
  
      if (isValidDate(day, month, year)) {
        const birthDate = new Date(year, month, day);
        const age = calculateAge(birthDate);
  
        document.querySelector('.poppins-extrabold-italic:nth-child(1) span').textContent = age.years;
        document.querySelector('.poppins-extrabold-italic:nth-child(2) span').textContent = age.months;
        document.querySelector('.poppins-extrabold-italic:nth-child(3) span').textContent = age.days;
      } else {
        alert('Please enter a valid date.');
      }
    });
  
    function isValidDate(day, month, year) {
      const date = new Date(year, month, day);
      return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
    }
  
    function calculateAge(birthDate) {
      const today = new Date();
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();
  
      if (days < 0) {
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
  
      if (months < 0) {
        years -= 1;
        months += 12;
      }
  
      return { years, months, days };
    }
  });
  