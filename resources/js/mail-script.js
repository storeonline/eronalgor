$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
        preventSubmit:true,
        submitError:function($form,event,errors)
        {},
        submitSuccess:function($form,event)
        {
            event.preventDefault();
            var name=$("input#name").val();
            var email=$("input#email").val();
            var message=$("#textareamanage").val();
            $.ajax({
                url:"resources/mail/sendmail.php",
                type:"post",
                data:{name:name,email:email,message:message},
                cache:false,
            success:function(){
                $('#success').html("<div class='alert alert-success col-md-6 offset-md-3'>");
                $('#success>.alert-success')
                .append("<strong>Thank You! "+name+",we will response to you soon.</strong>");
                $('#success>.alert-success')
                .append('</div>');
                   $('#contact').trigger("reset");
                 },
                //success message generate korbea 
                     error:function(){

                            $('#success').html("<div class='alert alert-danger'>");
                           $('#success>.alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                          $('#success>.alert-danger')
                          .append("<strong>Your message can not be send</strong>");
                $('#success>.alert-danger')
                .append('</div>');

                $('#contact').trigger("reset");


                     },

                     })


            },

         filter:function()
         {
            return $(this).is(":visible");
         },

}); } );