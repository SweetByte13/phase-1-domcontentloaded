//event listner to detect when DOM is loaded
//the listners callback 
//  to target id= text
//  replace text with "this is really cool"


document.addEventListener(
    "DOMContentLoaded", 
    function() {
        
        const word2 = document.getElementById('text');
        
        word2.textContent = ('This is really cool!');
        
        word2.addEventListener('load', () => word2.textContent = ('This is really cool!'))

});