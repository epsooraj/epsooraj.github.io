var api_base = "https://ep-portfolio-api.herokuapp.com/api/v1/"
// var api_base = "https://localhost:8000/api/v1/"

$( document ).ready(function() {
	set_experience();
	set_skills();
});

function set_experience(){
	$.get(api_base + "experience/", (data) => {

		data = sort_object(data, "start_date", date=true);

		data.forEach((datum, index) => {
			var title = datum["title"];
			var company = datum.company;

			var start_date = get_year_month(datum.start_date);
			var end_date = datum.end_date ? get_year_month(datum.end_date) : "Present";
			var description = datum.description ? datum.description : "";

			var timeline_div = '<div class="timeline"><div class="timeline-date"><h6 class="heading-uppercase">' + start_date + ' - ' + end_date + '</h6></div><div class="timeline-content"><h4>' + company + '</h4><p><h6>' + title + '</h6></p><p>' + description.replace(/\n/g, "<br />"); + '</p></div></div>'

			$("#experience_timeline").append(timeline_div);
		})
	});
}

function set_skills(){
	$.get(api_base + "skill/", (data) => {

		// Filter based on skill type
		// Skill
		skill_data = data.filter((datum) => {
			return datum.skill_type == "LN";
		});

		skill_data = sort_object(skill_data, "rating", desc=true);

		insert_skill(skill_data);

		// Adding new Line
		$("#skill_progress").append('<div class="col-12 col-md-12 margin-top-50"></div>');

		// Technology
		tech_data = data.filter((datum) => {
			return datum.skill_type == "TG";
		});

		tech_data = sort_object(tech_data, "rating", desc=true);

		insert_skill(tech_data);
	});

}

function insert_skill(data){
	data.forEach((datum, index) => {
		var skill = datum.skill;
		var rating = datum.rating;

		var skills_div = '<div class="col-12 col-md-6"><div class="progress-box"><h6 class="font-weight-normal">' + skill + '</h6><div class="progress progress-height-2px progress-radius"><div class="progress-bar" role="progressbar" style="width: ' + rating + '%;" aria-valuenow="' + rating + '" aria-valuemin="0" aria-valuemax="100"><span>' + rating + '%</span></div></div></div>'

		$("#skill_progress").append(skills_div);
	});
}