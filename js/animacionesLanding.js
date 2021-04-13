//Hacer aparecer primer seccion
$("#description").css('display', 'none')
                 .fadeIn(3000);
$(".carousel").css('display', 'none')
              .slideDown(2500);

//Animaciones en seccion indicado
$("#indicado").hover(() => {
    $("#mujer").hide(2000, () =>{
        $("#hombre").show(2500);
    });
});

//Aparecer iconos de redes sociales

$("#socialMedia").hover(() => {
    $("#fb").slideDown(1500);
    $("#ig").slideDown(2500);
    $("#tw").slideDown(3500);
});