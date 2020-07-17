// Feet To Mile Javascript

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(50000);
console.log(result);




// Wood Calculator Javascript

function woodCalculator(chair, table, bed){
    var chairPcs = chair * 1;
    var tablePcs = table * 3;
    var bedPcs = bed * 5;
    var totalWood = chairPcs + tablePcs + bedPcs;
    return totalWood;
}




// Brick Calculator Javascript

function brickCalculator(floors){
    if (floors <=10){
        bricks = (floors * 15) * 1000;
        return bricks;   
    }

    else if (floors >=10 && floors <=20){
        var firstTenFloor = (floors-10);
        firstTenFloor = firstTenFloor * (15*1000);

        bricks = (floors * 12) * 1000 + firstTenFloor;
        return bricks;
    }

    else if(floors<=21);{
        var firstTenFloor = 10;
        var aboveTenFloor = 10;
        var aboveTwentyFloor = floors (firstTenFloor+aboveTenFloor);

        firstTenFloor = (10*15) * 1000;
        aboveTenFloor = (10*15) * 1000;
        aboveTwentyFloor = (aboveTwentyFloor*10) * 1000;

        bricks = (firstTenFloor+aboveTenFloor+aboveTwentyFloor);
        return bricks;
    }
}




// Tiny Friend Javascript

function tinyFriend(frinds){
    var smaller = frinds[0]

for(i = 0; i < frinds.length; i++){
    var nameLength = frinds[i].length;

    if(smaller < nameLength){
        smaller = nameLength}
        
        return smaller;
    }
}
