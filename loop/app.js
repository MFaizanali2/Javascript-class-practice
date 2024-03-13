// for(initialization; Condition; increment/decrement){}
// var i = 0;
// for (i = 0; i < 10; i++){
//     console.log(i);
// }
var pslTeam = ['karachi kings','multan sultan','lahore qalander',
'islamabad united','quetta qladiater','peshawar zalmi'];
var userInp = prompt('enter your city name');
var i;
var flag = false;
for(i = 0; i < pslTeam.length; i++){
    if(pslTeam[i].includes(userInp)){
        flag = true;
        alert('your city participated as'+ pslTeam[i]);
        // break;
    }
    console.log(pslTeam[i]);
}
if(!flag){
    alert('your city is not qualified for psl');
}
