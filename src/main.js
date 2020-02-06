import { HaikuLines } from './haiku.js';	
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Row } from './rows.js';

// User-Logic

$(document).ready(function () {

	let line1 = $("#line1").val();
	let line2 = $("#line2").val();
	let line3 = $("#line3").val();
	const haikuLines = new HaikuLines(line1, line2, line3);



});