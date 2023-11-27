/**
 * Represents a feedback form view with input validation.
 */
class FeedbackFormView {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.phoneInput = document.getElementById('phone');
    this.nameInput = document.getElementById('name');
  }

  /**
   * Initializes the feedback form view by setting up event listeners.
   */
  init() {
    this.setupEventListeners();
  }

  /**
   * Sets up event listeners for form submission, phone input, and name input.
   */
  setupEventListeners() {
    this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    this.phoneInput.addEventListener('input', this.handlePhoneInput.bind(this));
    this.nameInput.addEventListener('input', this.handleNameInput.bind(this));
    this.phoneInput.maxLength = 17;
  }

  /**
   * Handles the form submission event.
   */
  handleFormSubmit(event) {
    event.preventDefault();

    if (this.form.checkValidity()) {
      alert('Успешно');
    } else {
      alert('Пожалуйста, заполните все обязательные поля корректно.');
    }
  }

  /**
   * Handles the input event for the name field, validating the name format.
   */
  handleNameInput() {
    const namePattern = /^[A-Za-zА-Яа-я]{4,}$/;
    if (!namePattern.test(this.nameInput.value)) {
      this.nameInput.setCustomValidity('Имя должно содержать только буквы и начинаться с заглавной буквы');
    } else {
      this.nameInput.setCustomValidity('');
    }
  }

  /**
   * Handles the input event for the phone field, formatting and validating the phone number.
   */
  handlePhoneInput() {
    const isFormatted = /\+\d{1,3}\(\d{3}\)\s\d{3}(-\d{2}){2}/.test(this.phoneInput.value);

    if (!isFormatted) {
      const cleaned = ('' + this.phoneInput.value).replace(/\D/g, '');

      const countryCode = '+7';
      const operatorCode = cleaned.slice(1, 4);
      const firstBlock = cleaned.slice(4, 7);
      const secondBlock = cleaned.slice(7, 9);
      const thirdBlock = cleaned.slice(9);

      const formattedNumber = `${countryCode}(${operatorCode}) ${firstBlock}-${secondBlock}-${thirdBlock}`;
      this.phoneInput.value = formattedNumber;
      this.validatePhoneNumber();
    }
  }

  /**
   * Validates the phone number format.
   */
  validatePhoneNumber() {
    const cleaned = ('' + this.phoneInput.value).replace(/\D/g, '');

    if (cleaned.length === 10) {
      this.phoneInput.setCustomValidity('');
    } else {
      this.phoneInput.setCustomValidity('Введите телефон в формате +7(000) 000-00-00.');
    }
  }
}