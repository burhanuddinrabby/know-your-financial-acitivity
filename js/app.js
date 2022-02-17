const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
function calculation(){
    const incomeAmmount = parseFloat(income.value);
    const totalExpenses = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(clothes.value);
    const balance = incomeAmmount - totalExpenses;
    document.getElementById('expenseTotal').innerText = totalExpenses;
    document.getElementById('balanceTotal').innerText = balance;
    return balance;
}
document.getElementById('calc-btn').addEventListener('click', function(){
    calculation();
});
const savingPercentage = document.getElementById('savingPercentage');
document.getElementById('save-btn').addEventListener('click', function() {
    const savingPercentageValue = parseFloat(savingPercentage.value);
    const savingAmmount = parseFloat(income.value) * (savingPercentageValue / 100);
    document.getElementById('saving-ammount').innerText = savingAmmount;
    document.getElementById('remaing-balance').innerText = calculation() - savingAmmount;
});