
   
    const formControl = document.querySelectorAll('.form_control');
    const formGroup = document.querySelectorAll('.form-group');
    var error = [];
    
    formControl.forEach((el)=>{
    //  add focus class to parent of input when focus it 
        el.addEventListener('focus',()=>{
            el.parentElement.classList.add('focus');
        });
        //  remove focus class to parent of input when blur it 
        el.addEventListener('blur',()=>{
            el.parentElement.classList.remove('focus');
            
            if(el.value.length < 1){
                //TODO Check if success class exists delete it when value.length == 0
                if(el.parentElement.classList.contains('success')){
                    el.parentElement.parentElement.classList.remove('success');
                    el.parentElement.classList.remove('success');
                }
                //TODO add class error value.length == 0
                el.parentElement.parentElement.classList.add('error');
                el.parentElement.classList.add('error');
                el.setAttribute('placeholder','Cette question est obligatoire*');
            }

            else{
                //TODO Check if error class exists delete it when value.length > 0
                el.parentElement.parentElement.classList.remove('error');
                el.parentElement.classList.remove('error');
                //TODO add class success when value.length > 0
                el.parentElement.parentElement.classList.add('success');
                el.parentElement.classList.add('success');
            }
        });
        el.addEventListener('keyup',()=>{
            if(el.parentElement.classList.contains('error')){
                el.parentElement.parentElement.classList.remove('error');
                el.parentElement.classList.remove('error');
                el.parentElement.parentElement.classList.add('success');
                el.parentElement.classList.add('success');
            }
        });

    })



    // check file cv 

    const file = document.querySelector(".form_file");
    const labelFile = document.querySelector(".label_file");
    var msgFile ='Selectionner Votre CV';
      
    file.addEventListener('change',(e)=>{
       
        var arrEx = ['pdf','docx'];
        var extention = file.files[0].name.split('.').pop().toLowerCase();
        // check if it is a pdf or docx file 
        if(arrEx.includes(extention)){
            //  check size of this file if less than 5Mb
            if(Math.round(file.files[0].size/(1024*1024)) < 5){
                msgFile = file.files[0].name;
                document.querySelector("#file_cv").classList.add('success');
                document.querySelector('.fa-cloud-upload').style.color = 'green';
        

            }else{
                error.push['error'];
                msgFile = '<b>Sorry<b> must be less than 5Mb';
                document.querySelector('.fa-cloud-upload').style.color = 'red';
                if(document.querySelector("#file_cv").classList.contains('success')){

                    document.querySelector("#file_cv").classList.remove('success');
                    document.querySelector("#file_cv").classList.add('error');
                }
            }
        }else{

           msgFile='must be PDF or Docs';
           document.querySelector('.fa-cloud-upload').style.color = 'red';
            if(document.querySelector("#file_cv").classList.contains('success')){
                document.querySelector("#file_cv").classList.remove('success');
                document.querySelector("#file_cv").classList.add('error');
            }
            file.value = '';
            error.push['error'];
        }
        document.querySelector('.fileName').innerHTML = msgFile;
    })




    // show msg must be pdf or Docs on input file 
    labelFile.addEventListener('click',()=>{
         labelFile.classList.add('show');
         setTimeout(()=>{
            labelFile.classList.remove('show');
         },4000);
    })



    // submit function 
    
    $('.dev_formulaire').on('submit', function(e) {
      e.preventDefault();

    // check all field input
      document.querySelectorAll('.form_control').forEach((el)=>{
          if(el.value.length > 0){
                
                el.parentElement.parentElement.classList.remove('error');
                el.parentElement.classList.remove('error');
          }else{
                error.push['error'];
                el.parentElement.parentElement.classList.add('error');
                el.parentElement.classList.add('error');
          }
      })
      
    
    // check email

        const email = $('#email');
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(!regex.test($('input[name=email]').val())) {
            error.push['error'];

            $('input[name=email]').attr('placeholder','must be a valid email');
            if($('input[name=email]').parent().hasClass('success')){
                $('input[name=email]').parent().addClass('error');
                $('input[name=email]').parent().removeClass('success');
                email.removeClass('success');
            }
        email.addClass('error');
        }else{
        $('input[name=email]').parent().addClass('success');
    }
      

    // check cnss
    if ($('input[name=cnss]:checked').length == 0) {
        $('#cnss').addClass('error');
        error.push['error'];
    }else{
        $('#cnss').removeClass('error');
    }

    // check lang

    if( 
    $('input[name=php]:checked').length  == 0 ||
    $('input[name=html5]:checked').length  == 0 ||
    $('input[name=css]:checked').length  == 0 ||
    $('input[name=js]:checked').length  == 0 ||
    $('input[name=angular]:checked').length  == 0 ||
    $('input[name=bootstrap4]:checked').length  == 0 ||
    $('input[name=uml]:checked').length  == 0 ||
    $('input[name=jquery]:checked').length  == 0 ||
    $('input[name=ajax]:checked').length  == 0 ||
    $('input[name=typscript]:checked').length  == 0 ||
    $('input[name=react]:checked').length  == 0 || 
    $('input[name=symphony]:checked').length  == 0 || 
    $('input[name=mysql]:checked').length  == 0 || 
    $('input[name=nodejs]:checked').length == 0 
    ){
        $('#lang').addClass('error');
        error.push['error'];
    }else{
        $('#lang').removeClass('error');
     }

    // check experience
     if ($('input[name=anciennete]:checked').length == 0) {
        $('#anciennete').addClass('error');
        error.push['error'];
    }else{
        $('#anciennete').removeClass('error');
    }

    // check type of dev 
    if ($('input[name=front_back_full]:checked').length == 0) {
        $('#dfront_back_full').addClass('error');
        error.push['error'];
    }else{
        $('#dfront_back_full').removeClass('error');
    }

    //check number of prj
    if ($('input[name=nombre_prj]:checked').length == 0) {
        $('#nombre_prj').addClass('error');
        error.push['error'];
    }else{
        $('#nombre_prj').removeClass('error');
    }

    //check salary
     if ($('input[name=salaire]:checked').length == 0) {
        $('#salaire').addClass('error');
        error.push['error'];
    }else{
        $('#salaire').removeClass('error');
    }

     // check file cv 
       
     function checkFile(){
        
         var arrEx = ['pdf','docx'];
         var extention = file.files[0].name.split('.').pop().toLowerCase();
         // check if it is a pdf or docx file 
         if(arrEx.includes(extention)){
             //  check size of this file if less than 5Mb
             if(Math.round(file.files[0].size/(1024*1024)) < 5){
                 msgFile = file.files[0].name;
                 document.querySelector("#file_cv").classList.add('success');
                 document.querySelector('.fa-cloud-upload').style.color = 'green';
         
 
             }else{
                 error.push['error'];
                 msgFile = '<b>Sorry<b> must be less than 5Mb';
                 document.querySelector('.fa-cloud-upload').style.color = 'red';
                 if(document.querySelector("#file_cv").classList.contains('success')){
 
                     document.querySelector("#file_cv").classList.remove('success');
                     document.querySelector("#file_cv").classList.add('error');
                 }
             }
         }else{
 
            msgFile='must be PDF or Docs';
            document.querySelector('.fa-cloud-upload').style.color = 'red';
             if(document.querySelector("#file_cv").classList.contains('success')){
                 document.querySelector("#file_cv").classList.remove('success');
                 document.querySelector("#file_cv").classList.add('error');
             }
             file.value = '';
             error.push['error'];
         }
         document.querySelector('.fileName').innerHTML = msgFile;
     }

     checkFile();
 

    // check error  
    if(error.includes('error') == false){
        var formD = $('#form')[0];
        $.ajax({
            url:"action.php",
            method:"POST",
            data:new FormData(formD),
            processData: false,
            contentType: false,
            success: function(data){
               console.log(data);
               $('#form')[0].reset();
               window.location.href = "arg.html";
            }
        })

    }else{
        // reset error 
        error = [];
        window.scrollTo(0,0);
    }
 });


