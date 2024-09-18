window.onload = function() { 
  var triangle = document.getElementById('triangle'); 
  if (triangle) {
    triangle.style.display = 'none'; 
    alert('Element found and changed!');
} else { 
    console.error('Element with id="triangle" not found'); 
    } 
};
