<?php 
	// outputs e.g.  somefile.txt was last modified: December 29 2002 22:16:23.
header('Content-type: application/json');
$filename = 'index.html';
if (file_exists($filename)) {
    echo json_encode(date("F d, Y H:i:s", filemtime($filename)));
}	
?>