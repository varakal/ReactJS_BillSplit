var val = [];
var prat = 0;
var vina = 0;
var shre = 0;
var vive = 0;

export function addValue(item,pra,shr,vin,viv){
// var intpra = pra.parseInt();
// var intshr = shr.parseInt();
// var intvin = vin.parseInt();
// var intviv = viv.parseInt();
// var intitem = item.parseInt();
var value=parseInt(item)/(parseInt(pra)+parseInt(shr)+parseInt(vin)+parseInt(viv));
 if (pra==1)
{
  prat+=value;
}
if (shr == 1){
  shre+=value;
}
if (vin==1){
  vina+=value;
}
if (viv==1)
{
  vive+=value;
}
}

export function getPratheekValue(){
  return prat;
}

export function getShreyasValue(){
  return shre;
}

export function getVinayValue(){
  return vina;
}

export function getVivekValue(){
  return vive;
}
