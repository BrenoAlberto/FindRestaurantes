var deleted = [];

function restore() {
    $.each(deleted, function (i, v) {
      $('#main').append(v);
    });
}

function findById(id) {
  if(id == "todos"){
    restore();
  } else {
    if ($("div.col-xs-1[id!='" + id + "']").length > 1) {
      deleted.push($("div.col-xs-1[id!='" + id + "']").detach());
    }
    else {
      restore();
      deleted.push($("div.col-xs-1[id!='" + id + "']").detach());
   }
  }
}

function sortEventsByOrder(a,b) {

	var startA = parseInt($(a).attr('data-order'));
	var startB = parseInt($(b).attr('data-order'));	
	return startA - startB;
}



function order(){
  $('#restaurants').html($('div.col-xs-1').sort(sortEventsByOrder))
}

function searchFilter(name) {
  $("button#filter").text(name);
  $("button#search").removeClass('disabled');
}