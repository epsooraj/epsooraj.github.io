function sort_object(data, key, desc=false, date=false){
	data.sort((a, b) => {
		if (desc){
			if (date){
				return Date(b[key]) - Date(a[key]);
			}
			else{
				return b[key] - a[key];
			}
		}
		else {
			if (date){
				return Date(b[key]) - Date(a[key]);
			}
			return a[key] - b[key];
		}
		
	});

	return data;
}


function get_year_month(date){
	var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

	var d = new Date(date);
	var month = d.getUTCMonth();
	var year = d.getUTCFullYear();

	return year + " " + months[month];
}