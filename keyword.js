function keywordSearch () {
var player = GetPlayer(),
userGoals = player.GetVar("userGoals").toUpperCase();
array1 = ['FUNDRAISING', 'RAISING MONEY', 'DEVELOPMENT'],
array2 = ['EATING CAKE', 'EATING PIE', 'EATING COBBLER'],
array3 = ['WAILING', 'SOBBING', 'CRYING'];


for (var i = 0; i < array1.length; i++) {

  if (userGoals.includes(array1[i])) {
    player.SetVar('goal1', "Fundraising");
  }
}

for (var i = 0; i < array2.length; i++) {

  if (userGoals.includes(array2[i])) {
    player.SetVar('goal2', "Consuming baked goods");
  }
}

for (var i = 0; i < array3.length; i++) {

  if (userGoals.includes(array3[i])) {
    player.SetVar('goal3', "Feeling sorry about your life");
  }
}

}
