var api_base = "https://ep-portfolio-api.herokuapp.com/api/v1/"
// var api_base = "https://localhost:8000/api/v1/"

$(document).ready(function() {
	set_experience();
	set_skills();
	set_portfolio();
	set_education();
});

function set_experience() {
	$.get(api_base + "experience/", (data) => {

		data = sort_object(data, "start_date", date = true);

		data.forEach((datum, index) => {
			var title = datum["title"];
			var company = datum.company;

			var start_date = get_year_month(datum.start_date);
			var end_date = datum.end_date ? get_year_month(datum.end_date) : "Present";
			var description = datum.description ? datum.description : "";

			var timeline_div = '<div class="timeline"><div class="timeline-date"><h6 class="heading-uppercase">' + start_date + ' - ' + end_date + '</h6></div><div class="timeline-content"><h4>' + company + '</h4><p><h6>' + title + '</h6></p><p>' + description.replace(/\n/g, "<br />"); + '</p></div></div>'

			$("#experience_timeline").append(timeline_div);
		});
	});
}

function set_skills() {
	$.get(api_base + "skill/", (data) => {

		// Filter based on skill type
		// Skill
		skill_data = data.filter((datum) => {
			return datum.skill_type == "LN";
		});

		skill_data = sort_object(skill_data, "rating", desc = true);

		insert_skill(skill_data);

		// Adding new Line
		$("#skill_progress").append('<div class="col-12 col-md-12 margin-top-50"></div>');

		// Technology
		tech_data = data.filter((datum) => {
			return datum.skill_type == "TG";
		});

		tech_data = sort_object(tech_data, "rating", desc = true);

		insert_skill(tech_data);
	});

}

function insert_skill(data) {
	data.forEach((datum, index) => {
		var skill = datum.skill;
		var rating = datum.rating;

		var skills_div = '<div class="col-12 col-md-6"><div class="progress-box"><h6 class="font-weight-normal">' + skill + '</h6><div class="progress progress-height-2px progress-radius"><div class="progress-bar" role="progressbar" style="width: ' + rating + '%;" aria-valuenow="' + rating + '" aria-valuemin="0" aria-valuemax="100"><span>' + rating + '%</span></div></div></div>'

		$("#skill_progress").append(skills_div);
	});
}

function set_portfolio() {
	$.get(api_base + "portfolio/", (data) => {

		// Fetcing unique portfolio type
		// var portfolio_types = [...new Set(data.map(item => item.portfolio_type))];
		// portfolio_types = portfolio_types.sort().reverse();

		$.get(api_base + "portfoliotype/", (portfoliotype_data) => {
			ptype = sort_object(portfoliotype_data, "priority");
			ptype.forEach((item, type_index) => {
				portfolio_type = item.portfolio_type;

				// Looping through portfolio type
				// Filter projects based on type
				port_data = data.filter((datum) => {
					return datum.portfolio_type == portfolio_type;
				});

				// Sorting based on priority
				port_data = sort_object(port_data, "priority");

				// Add new portfolio type title and masonry section
				var port_title_sec = '<div class="text-center margin-bottom-30 margin-top-30">';
				port_title_sec += '<h4>' + portfolio_type + '</h4>';
				port_title_sec += '</div>';

				port_title_sec += '<div id="portfolio_items_' + type_index + '" class="row">';
				port_title_sec += '</div>';

				$("#portfolio_main").append(port_title_sec);

				// Loop through port data
				port_data.forEach((datum, index) => {
					insert_portfolio(datum, type_index);
				});



			});
		});

	});
}

function insert_portfolio(data, num) {

	var port_item = '<div class="col-12 col-md-4">';
	port_item += '<div class="padding-30 border-all border-radius hover-shadow">';
	port_item += '<h3 class="font-weight-light text-dark text-center">' + data.title + '</h3>';
	port_item += '<p class="font-weight-semi-bold text-center">' + data.languages.toString().replace(",", ", ") + '</p>';
	port_item += '<p class="font-weight-semi-bold text-center">' + data.technology.toString().replace(",", ", ") + '</p>';
	port_item += '<br>';
	port_item += '<p class="font-weight-light text-center">' + data.description + '</p>';
	port_item += '</div>';
	port_item += '</div>';

	$("#portfolio_items_" + num).append(port_item);
}

function set_education() {

	$.get(api_base + "education/", (data) => {

		data = sort_object(data, "start_date", date = true);

		data.forEach((datum, index) => {
			insert_education(datum)
		});

	});
}

function insert_education(datum) {

	var start_date = get_year_month(datum.start_date);
	var end_date = datum.end_date ? get_year_month(datum.end_date) : "Present";

	var edu_data = '<div class="row">';
	edu_data += '<div class="col-12 col-md-2"></div>';
	edu_data += '<div class="col-12 col-md-8">';
	edu_data += '<div class="text-center padding-30 border-all border-radius">';
	edu_data += '<h3 class="font-weight-light text-dark text-center">' + datum.degree + '</h3>';
	edu_data += '<p class="font-weight-semi-bold text-center">' + datum.college + '</p>';
	edu_data += '<br>';
	edu_data += '<p class="font-weight-light text-center">' + start_date + " - " + end_date + '</p>';
	edu_data += '</div>';
	edu_data += '</div>';
	edu_data += '<div class="col-12 col-md-2"></div>';
	edu_data += '</div>';

	$("#education_rows").append(edu_data);
}