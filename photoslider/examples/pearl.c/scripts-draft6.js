var imageDivs = [ "image1", "image2", "image3", "image4", "image5" ];
var currentDivIndex = 0;

var numImages = imageDivs.length; //get total number of items in the array

updateAllNodes();

function updateAllNodes() {
	for ( var i=0; i<numImages; i++ ) {
		
		//use the loop index to access the array item for that index
		var divIdName = imageDivs[ i ]; 
		
		var divNode = document.getElementById(divIdName);
		
		//testing only -- to confirm your work
		//alert( "Loop index is: " + i + ". " + " My divNode id is: " + divNode.getAttribute("id") );
		
		// but instead of this: divNode.setAttribute( "class", "image-holder" );
		//use an if/else test
		if ( i == currentDivIndex ) {
			divNode.setAttribute( "class", "image-holder" );
		}else{
			divNode.removeAttribute( "class" );
		}
		
	}
}

function showPrevious() {
	if ( currentDivIndex > 0 ) {
		currentDivIndex = currentDivIndex - 1;
        //alert( "showPrevious called! currentDivIndex is: " + currentDivIndex );
		updateAllNodes();
	}
}

function showNext() {
	if ( currentDivIndex < numImages-1 ) {
		currentDivIndex = currentDivIndex + 1;
        //alert( "showNext called! currentDivIndex is: " + currentDivIndex );
		updateAllNodes();
	}
}