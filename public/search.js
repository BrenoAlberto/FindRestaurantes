/* function search(){
  var opt = $("button#filter").text()
  for (var i = 0, l = restaurants.length; i < l; i++){
    if (arr[i][opt] === name) {
      return arr[i][opt];
    }
  }
  return false;
}
*/

function teste(restaurants){
  console.log(restaurants);
  for (var i = 0; i <= restaurants.length; i++){

      console.log(restaurants[i].name);

  }
}

function searchByName(name) {
    for (var i = 0, l = arr.length; i < l; i++){
      if (arr[i]['name'] === name) {
        return arr[i]['name'];
      }
    }
    return false;
}

function searchByKitchen(kitchen) {
  for (var i = 0, l = arr.length; i < l; i++){
    if (arr[i]['kitchen'] === kitchen) {
      return arr[i]['kitchen'];
    }
  }
  return false;
}

function searchFilter(name){
  $("button#filter").text(name);
  $("button#search").removeClass('disabled');
}

