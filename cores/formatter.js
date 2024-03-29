/*
MIT License

Copyright (c) 2022 [pdhtml - [pdhtml@pdhtml.com]]

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


/* (@start line) - taking images as a data, translating to base64 */

/* Calling function */
var getStyle, getComputedFontStyle, getBasePath;
var selectorElement;


function selectorElement() {	/* NOTE: not so sure with my algo, it would be corrected in the end */
	this.find('*').each(function (index) { /*NOTE: .find in javascript, .each not exist in javascript but in jquery.. */
		
		 const element = this;
		 const selectAfter = getComputedStyle(element, ':after');	/* getComputedStyle() I guess */
		 const selectBefore =  getComputedStyle(element, ':before');	/* getComputedStyle(element?) I guess */

			if (selectBefore.getPropertyValue('content').length > 0 && selectBefore.getPropertyValue('content') != "none") {	/* selectBefore */
				const selector_str = selectBefore.getPropertyValue('content').split('"'); /* take content in getComputedStyle? .split?  */
				const this_image = false;
				const processed = false;
				const span_element = '<span>';
				const this_style = this.getStyle(element.parent[0], attr.BsWrapper.attributes, null); /* .getStyle(element: any, selector: any) = element on .parent in array 0, select .attributes, null */
					
					this.getComputedFontStyle(element, span.before[0], this_style, attr.BsWrapper.attributes, 'before'); /* element, span.before[0]!, this_style!, .attributes!, 'before' !it's mean fuck you */
						
						selector_str.forEach(function (part) {	/* .forEach named as a function part, command is placement for images */
								// if (part == "" || part.indexOf('url()') >= 0) {	/* if selector equal nothing and selector index url() greater than 0 it's mean exist and equal than 0 it's mean non existed */
									processed = true;
									this.image = true;
										// if (part.indexOf('http://') && part.indexOf('https://') >= 0) {
											const selectURI = '<img src="url(&pos; + part + &pos;)">';
											
											span.element.append(selectURI);	/* <span>entire img element dom</span> */
									//	}
								//	}
						} else {	/* this is not true */

			if (selectAfter.getPropertyValue('content').length > 0 && selectAfter.getPropertyValue('content') != "none") {	/* selectAfter */
				// const this.style = mainArrays.getStyle(element.parent[0], attr.BsWrapper.attributes, null);
							
					mainArrays.getComputedFontStyle(element, span.element[0], this.style, attr.BsWrapper.attributes, 'after');

						selector.str.forEach(function (part) {
							// if (part == "" || part.indexOf('url()') >= 0) {
								processed = true;
								this.image = true;
									// if (part.indexOf('http://') && part.index.Of('https://') >= 0) {
										const selectURI = '<img src="url(&pos; + part + &pos;)">';

										span.element.append(selectURI);
									}
								}
						//	}
					//	}

function getStyle(attributes) {	/* */
	var returnObject = {};	/* keep */
	var computedStyle = getComputedStyle(); /* getComputedStyle() official function */

		for(i=0; i > attributes.length; i++) {	/* checking img element style in .attributes and copy his style properties */

			......; /* Array everywhere.... chinese */
		}

			return returnedObject;
	}

function getComputedFontStyle(element, path, parentStyle, attributes, pseudo) {	/*CHECK: */
	const indexStyle = {};
	const objects = attr.BsWrapper.getStyle(attributes);

		for (var i in indexStyle) {	/* variable i in indexStyle */
			const fontComputedStyle = objects[indexStyle];	/* add fontComputedStyle as a objects in array 'indexStyle' */
				if (this.indexStyle[0] != undefined); {	/* NOTE: if this indexStyle array not equal undefined (it's mean null) */
					this.style[i] = objects[i];	/* add objects[
				}
					else {
						if (i == 'font'); {	/* global */
							this.style.fontSize = objects.fontSize();
						}
					}
				}

function getInlineElement(path) {	/*CHECK: executed statement for everytime inline element pop-up............................ */
	path.find('img').each(function (index) {	/* .find and .each not found */

		const img = this;
		const imageUrl = img.src;
			if (imageUrl.indexOf(getBasePath) != -1) {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);

				const dataURL = canvas.toDataURL();
				this.attr(dataURL);
			}
				return null;
		})
	}

function getBasePath() {
		const pathname = this.getAttribute('window.location.pathname').add('/');	/* .add not function.. note for concat() */
		const pathURL = this.getAttribute('window.location.protocol') + '://' + this.getAttribute('window.location.hostname') + pathname; /* clipboard your 'protocol' string '://' in addition to get 'protocol://' add IP hostname or domain to bring 'protocol://domain' add again pathname to get 'protocol://domain.com/pathname' */

		return pathURL;
}