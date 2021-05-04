
$("#generarPDF").click( () => {
    $("#generarPDF").toggle();
    $("#goHome").toggle();
    window.print();
    $("#generarPDF").toggle();
    $("#goHome").toggle();
    
});