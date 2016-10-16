var subTotal = document.getElementById('subTotalInput');
var totalTip = document.getElementById('totalTip');
var totalResult = document.getElementById('totalResult');
var tipRate = document.getElementById("tipRates");

function getSubtotalPercent(subTotal, tipValueIndex) {
  var rawTip = subTotal * (tipValueIndex / 100);
  var roundedTip = Math.round(rawTip * 100) / 100;

  return roundedTip;
}

function calculateTotal() {
  var subTotalVal;

  // if (subTotal.value.length >= 3) {
  //   subTotalVal = Number(subTotal.value) / 100;
  //   subTotal.value = subTotalVal;
  // } else {
  //   subTotalVal = Number(subTotal.value);
  // }

  subTotalVal = Number(subTotal.value);

  // Get percetage amount for tip
  var tipRateValue = document.getElementsByTagName("option")[tipRate.selectedIndex].value;

  // Calculates the tip percentage
  var percentTotal = getSubtotalPercent(subTotalVal, tipRateValue);

  totalTip.innerHTML = percentTotal;
  totalResult.innerHTML = Math.round((subTotalVal + percentTotal) * 100) / 100;
}

subTotal.onkeyup = function() {
  calculateTotal();
};

tipRate.onchange = function() {
  calculateTotal();
};