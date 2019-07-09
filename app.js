const inputExpense = document.querySelector('#input-name');
const inputAmount = document.querySelector('#input-amount');
const addBtn = document.querySelector('#btn-add');
const expenseList = document.querySelector('#expense-list');
const alrtCtr = document.querySelector('ion-alert-controller');

addBtn.addEventListener('click',() => {
  const expense = inputExpense.value;
  const amount = inputAmount.value;
  console.log('jknhbgvfc');

  if(
    expense.trim().length <= 0 ||
    amount.trim().length <= 0 ||
    amount < 1 || 
    amount > 5
  ){
    alrtCtr.create({
        header: 'invalid input', 
        message: 'Please enter a valid values', 
        buttons: ['Okay']
    }).then(alertEle => alertEle.present())
    return
  }

  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<strong>${expense}:</strong>&nbsp;${amount}`;

  expenseList.appendChild(newItem);
})