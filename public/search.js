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