const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const savingPercentage = document.getElementById('savingPercentage');
const inputs = document.getElementsByClassName('inp');
function calculation(){
    if(income.value == '' || food.value == '' || rent.value == '' || clothes.value == ''/*  || savingPercentage.value == '' */){
        document.getElementById('error-msg').innerText = 'Input type cannot be empty';
    }else if(income.value < 0){
        document.getElementById('error-msg').innerText = 'Income cannot be negative';
    }else if(food.value < 0 || rent.value < 0 || clothes.value < 0 /* || savingPercentage.value < 0 */){
        document.getElementById('error-msg').innerText = 'Cost cannot be negative';
    }else{
        const incomeAmmount = parseFloat(income.value);
        const totalExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);
        const balance = incomeAmmount - totalExpenses;
        if (totalExpenses > incomeAmmount){
            document.getElementById('expenseTotal').innerText = totalExpenses;
            document.getElementById('expenseTotal').style.color = 'red';
            document.getElementById('error-msg').innerText = 'You\'ve gone over your income';
            document.getElementById('balanceTotal').innerText = '';
        }else{
            document.getElementById('expenseTotal').innerText = totalExpenses;
            document.getElementById('expenseTotal').style.color = 'black';
            document.getElementById('error-msg').innerText = '';
            document.getElementById('balanceTotal').innerText = balance;
            return balance;
        }
    }
}
document.getElementById('calc-btn').addEventListener('click', function(){
    calculation();
});
document.getElementById('save-btn').addEventListener('click', function() {
    const balance = calculation();
    if (income.value != '' && income.value > 0 && food.value >= 0 && rent.value >= 0 && clothes.value >= 0 && savingPercentage.value >= 0 && balance >= 0) {
        const savingPercentageValue = parseFloat(savingPercentage.value);
        const savingAmmount = parseFloat(income.value) * (savingPercentageValue / 100);
        if (savingAmmount > balance) {
            document.getElementById('error-msg-saving').innerText = 'You can\'t save more than you have';
            document.getElementById('saving-ammount').innerText = Math.round(savingAmmount);
            document.getElementById('saving-ammount').style.color = 'red';
            document.getElementById('remaing-balance').innerText = '000';
        }else if(savingPercentage.value < 0){
            document.getElementById('error-msg-saving').innerText = 'You cannot be save negative percentage of ammount';
        }
        else{
            document.getElementById('error-msg-saving').innerText = '';
            document.getElementById('saving-ammount').innerText = Math.ceil(savingAmmount);
            document.getElementById('saving-ammount').style.color = 'black';
            document.getElementById('remaing-balance').innerText = Math.floor(balance - savingAmmount);
        }
    }
});