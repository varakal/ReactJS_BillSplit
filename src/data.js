var val = [];
var prat = 0;
var vina = 0;
var shre = 0;
var vive = 0;

var itemarr = [];
var pratarr = [];
var vinarr = [];
var shrarr = [];
var vivarr = [];

export function addValue(item,pra,shr,vin,viv){

var value=parseFloat(item)/(parseFloat(pra)+parseFloat(shr)+parseFloat(vin)+parseFloat(viv));
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

itemarr.push(item);
pratarr.push(pra);
shrarr.push(shr);
vinarr.push(vin);
vivarr.push(viv);

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

export function getitemArray(){
  return itemarr;
}

export function getPraArray(){
  return pratarr;
}

export function getShrArray(){
  return shrarr;
}

export function getVinArray(){
  return vinarr;
}

export function getVivArray(){
  return vivarr;
}
