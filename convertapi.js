//https://www.convertapi.com/html-to-docx/nodejs

const API_KEY = 'testKey'; // insert your ConvertAPI key here

const convertapi = require('convertapi')(API_KEY);

const inputFilePath = 'inputs/DE Key Customer Version Finja example Report.pdf';
const outputFilePath = 'outputs/DE Key Customer Version Finja example Report.docx';

convertapi
	.convert('docx', { File: inputFilePath }, 'pdf')
	.then(function(result) { result.saveFiles(outputFilePath); });
