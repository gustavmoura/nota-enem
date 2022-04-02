const btnCalcular = document.querySelector("#btnCalcular");
const btnLimpar = document.querySelector("#btnLimpar");

btnCalcular.addEventListener("click", function (e) {
  e.preventDefault();

  const cn = document.querySelector("#cn");
  const ch = document.querySelector("#ch");
  const lc = document.querySelector("#lc");
  const mt = document.querySelector("#mt");
  const rd = document.querySelector("#rd");

  const cnP = document.querySelector("#cnP");
  const chP = document.querySelector("#chP");
  const lcP = document.querySelector("#lcP");
  const mtP = document.querySelector("#mtP");
  const rdP = document.querySelector("#rdP");

  const resu = document.querySelector("#resultado");

  let cnV = cn.value;
  let chV = ch.value;
  let lcV = lc.value;
  let mtV = mt.value;
  let rdV = rd.value;

  cnV = parseInt(cnV);
  chV = parseInt(chV,10);
  lcV = parseInt(lcV,10);
  mtV = parseInt(mtV,10);
  rdV = parseInt(rdV,10);

  let cnPV = cnP.value;
  let chPV = chP.value;
  let lcPV = lcP.value;
  let mtPV = mtP.value;
  let rdPV = rdP.value;

  cnPV = parseInt(cnPV,10);
  chPV = parseInt(chPV,10);
  lcPV = parseInt(lcPV,10);
  mtPV = parseInt(mtPV,10);
  rdPV = parseInt(rdPV,10);

  const peso = cnPV + chPV + lcPV + mtPV + rdPV;

  const r1 = cnV * cnPV;
  const r2 = chV * chPV;
  const r3 = lcV * lcPV;
  const r4 = mtV * mtPV;
  const r5 = rdV * rdPV;

  const rf = (r1 + r2 + r3 + r4 + r5);

  let resultado = rf/peso;

  if (resultado)
  resu.innerText = "Sua Nota Foi: "+resultado;
});
