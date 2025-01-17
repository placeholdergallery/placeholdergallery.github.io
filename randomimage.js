
function get_random_image() {

const image_array = [
	'images/RandomImages/1.jpg',
	'images/RandomImages/2.jpg',
	'images/RandomImages/3.jpg',
	'images/RandomImages/4.jpg',
	'images/RandomImages/5.jpg'
];

const random_index = Math.floor(Math.random()* image_array.length);

document.getElementById('infoimage').src = image_array[random_index];
}