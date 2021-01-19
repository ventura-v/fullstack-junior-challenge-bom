const calculate = (event) => {
  event.preventDefault();

  let value = document.getElementById('value').value;
  const initialValue = document.getElementById('initial-value').value;
  const payments = document.getElementById('payments').value;
  let rate = document.getElementById('rate').value;
  rate = rate / 100;
  const table = document.getElementById('table-result');
  let A = 0;
  let J = value * rate;
  const pmt = value * (rate / (1 - (1 / (1 + rate) ** payments)));
  const paymentValue = document.getElementById('payment-value');
  paymentValue.innerHTML += pmt.toFixed(2);
  let totalRate = 0;
  let totalA = 0

  if (!parseFloat(value) && value != 0) {
    alert("O Valor precisa ser um número válido. Ex: 10.000,00")
  }
  if (!parseFloat(initialValue) && initialValue != 0) {
    alert("O Valor Entrada precisa ser um número válido. Ex: 0")
  }
  if (!parseFloat(rate)) {
    alert("A taxa de juros precisa ser um número válido. Ex: 3,80")
  }

  document.getElementById('result-container').style.display = 'block';

  for (let i = 0; i <= payments; i++) {
    if (i === 0) {
      table.innerHTML +=
        `<tr>
          <td>${i}</td>
          <td>R$ 0,00</td>
          <td>R$ 0,00</td>
          <td>R$ 0,00</td>
          <td>R$ ${value}</td>
        </tr>`;
    } else {

      J = value * rate;
      totalRate += J
      A = pmt - J;
      totalA += A
      value -= A;


      table.innerHTML +=
        `<tr>
            <td>${i}</td>
            <td>R$ ${pmt.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${J.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${A.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${value.toFixed(2).replace('.', ',')}</td>
          </tr>`;
    }

  }

  table.innerHTML +=
    `<tr>
        <td>TOTAIS</td>
        <td>R$ ${(pmt * payments).toFixed(2).replace('.', ',')}</td>
        <td>R$ ${totalRate.toFixed(2).replace('.', ',')}</td>
        <td>R$ ${totalA.toFixed(2).replace('.', ',')}</td>
        <td>-</td>
      </tr>`;

}

document.getElementById('form-container').addEventListener('submit', calculate);