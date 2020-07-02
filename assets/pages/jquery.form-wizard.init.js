/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Form Wizard
 */



$(function ()
{
   



    $("#form-horizontal").steps({
       headerTag: "h3",
       bodyTag: "fieldset",
       transitionEffect: "slide",
       //finish:"Finish",

       onFinished: function (event, currentIndex) {

        swal({
            title:"Success",
            type:"success",
            text:"Your request has been posted to the Insurance  Companies / Brokers  you have chosen, We will get back to you as soon as possible."
            }).then(function() {
            window.location.href="customer.html";
            }
            );
            
            
       }           
   });
 




    $("#form-vertical").steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical"
    });
});




