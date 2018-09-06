var deleted = [];

function restore() {
    $.each(deleted, function (i, v) {
      $('#main').append(v);
    });
}

function findById(id) {
  if ($("div.col-xs-1[id!='" + id + "']").length > 1) {
    deleted.push($("div.col-xs-1[id!='" + id + "']").detach());
  }
  else {
    restore();
    deleted.push($("div.col-xs-1[id!='" + id + "']").detach());
  }
}

function searchByKitchen(kitchen) {
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i]['kitchen'] === kitchen) {
      return arr[i]['kitchen'];
    }
  }
  return false;
}

function searchFilter(name) {
  $("button#filter").text(name);
  $("button#search").removeClass('disabled');
}
