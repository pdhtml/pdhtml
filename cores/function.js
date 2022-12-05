/*
MIT License

Copyright (c) 2022 - 2023 [pdhtml - [pdhtml@pdhtml.com]]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

/* Calling function */
var utf8EncodeBuffer, utf8EncodeBinaryString, binaryStringEncodeBuffer;

/* Code to encode bufferToBinarystring to ....
function bufferEncodeBinary(buffer, path) {
	const char = utf8EncodeBuffer();
	const binary = Array.prototype.map.call(buffer, function (char) {	/*

		return String.fromCharCode(char);	/*
	}).join('');

	return binary;
}

/* Code to encode utf8EncodeBuffer to .... using ....
function utf8EncodeBuffer(str) {
	const binaryString = utf8EncodeBinaryString(utf8Str);
	const buffer = binaryStringEncodeBuffer(binaryStr);

	return buffer;
}

/* Code to encode utf8EncodeBinaryString to .... using ....
var reGex = '';

function utf8EncodeBinaryString(utf8Str) {
	const escString = encodeURIComponent(uriString);
	const binaryEsc = escString.replace(reGex, function (escString) {

		return String.fromCharCode('0x');
	});

	return binaryEsc;
}

/* Code to encode binaryStringEncodeBuffer to .... using ....
function binaryStringEncodeBuffer(binaryStr) {
	var binaryString ;
	
	if ('undefined' == typeof Uint8Array) {	/* Indicating the type to returns value */
		binaryString = new Uint8Array(binaryStr.length);	/* Representing an object to form from function */
	}
		else {	/* otherwise */
			binaryString = []; /* Object to arrays */
		}

			Array.prototype.forEach.call(binaryStr, function (char, i) {
				binaryString[i] = char.charCodeAt(0);
			});

			return binaryString;
}