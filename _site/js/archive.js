var options = {
	valueNames: [ 'name', 'role', 'work', 'country', 'year', 'training', 'presentation', 'keynote' ]
};

var userList = new List('archivelist', options);

$('#filter-training').click(function() {
    userList.filter(function(item) {
        if (item.values().training == "training") {
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('#filter-presentation').click(function() {
    userList.filter(function(item) {
        if (item.values().presentation == "presentation") {
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('#filter-keynote').click(function() {
    userList.filter(function(item) {
        if (item.values().keynote == "keynote") {
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('#filter-none').click(function() {
    userList.filter();
    return false;
});