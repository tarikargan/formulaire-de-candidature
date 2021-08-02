
window.onload = () =>{
  const NumberofCandidate = document.querySelectorAll('.nm-of-rp');
  const tabItem = document.querySelectorAll('.tab-content');
  const sectionTab = document.querySelectorAll('.section-tab');
  const Indicator = document.querySelector('#indicator');
  const toggleAcceptCandidate = document.querySelector('#toggle-accept');
  
  // resume section & animation section
   const resumeSection = document.querySelector('.resume');
   const animaSection = document.querySelector('.animation');
  // individuel section 
   const indexOfCandidate = document.querySelector('.index_of_rep');
   const btnprev = document.querySelector('.prevControl');
   const btnnext = document.querySelector('.nextControl');

  var allCandidates =[];
  var Candidate = null;
  var index = 1;


  function fetchCandidate(){
    $.ajax({
      url:'action.php',
      method:'POST',
      data:{action:"fetch"},
      dataType:'JSON',
      success:function(data){
        // set data in global variable as an array 
          allCandidates = data;
          headerOption();
          
          // get Number of candidates
          NumberofCandidate.forEach(el=>{
            if(allCandidates.length != 0){
                el.innerHTML = allCandidates.length;
                 
                // get Length of Candidates
                // if index Of Candidate greater than index set index value length of candidates
                setTimeout(()=>{
                  setMaxLength();
                  if(index > allCandidates.length && allCandidates.length != 0){

                    index = allCandidates.length;

                    indexOfCandidate.value = index; 

                    GetCandidate(allCandidates.length - 1);
                  }else{
                    GetCandidate(index - 1);
                  }
                },1500);
            }else{
                index = 0;
            }
          });  
      }
    })
  }
  fetchCandidate();



  // toggleAcceptCandidate 
  toggleAcceptCandidate.addEventListener('change',()=>{
      if(toggleAcceptCandidate.checked){
          document.querySelector('.option_accept').style.background ="#fff";
      }else{
          document.querySelector('.option_accept').style.background ="red";
      }
  })
  
  // set offset to indicator 
  Indicator.style.width = tabItem[0].offsetWidth+'px';
  Indicator.style.left = tabItem[0].offsetLeft+'px';
  
  function indicator(e){
    Indicator.style.width = e.offsetWidth+'px';
    Indicator.style.left = e.offsetLeft+'px';
  }
  
  sectionTab.forEach(section=>{
      section.style.display="none";
      sectionTab[0].style.display="block";
  });
  
  
  // set style to header of response page 
  
  function headerOption(){

      tabItem.forEach((el,i)=>{
            el.addEventListener('click',(e)=>{

              if(allCandidates.length !== 0){
                  for(let x = 0; x < 2;x++){
                      // show section resume or individuel if allCandidates.length !== 0
                      sectionTab[x].style.display="none";
                      sectionTab[i].style.display="block";
                      // set border radius to header 
                      if(i != 0){
                        document.querySelector('.header').style.borderRadius = '8px 8px 0px 0px';
                      }else{
                        document.querySelector('.header').style.borderRadius = '8px';
                      }
                  }
              }else{
                  // hide section resume & individuel if allCandidates.length == 0
                  for(let x = 0; x < 2;x++){
                    sectionTab[x].style.display="none";
                  }
              }
              // change offset of indicator 
              indicator(e.target);
            });

            
      });

      if(allCandidates.length < 1){
          for(let x = 0; x < 2; x++){
            sectionTab[x].style.display="none";
          }
          setTimeout(()=>{
            animaSection.style.display="none";
            alert('sorry no candidates to list');
          },4000)
      }else{
        loadeingAnimation();
      }

  }
  
  


 
  //show and hide animation
      function loadeingAnimation(){
          // resumeSection.style.display="none";
          animaSection.style.display="flex";
          setTimeout(()=>{
              // resumeSection.style.display="block";
              animaSection.style.display="none";
          },2000);
      }
   

  

   

   
  // set input class index of Candidate ==> max = allCandidates.length 
      function setMaxLength(){
        if(allCandidates.length != 0){
          indexOfCandidate.setAttribute('max',allCandidates.length);
        }
      }
      setMaxLength();
      
      
  // Btn Next Candidate
          btnnext.addEventListener('click',()=>{
              if(index < allCandidates.length){
                  index++;
                  indexOfCandidate.value = index ; 
                  GetCandidate(index -1);
                  loadeingAnimation()

              }
          })
       
  //  Btn Last Candidate
          btnprev.addEventListener('click',()=>{
              if(index > 1){
                  index--;
                  indexOfCandidate.value = index;
                  GetCandidate(index -1);
                  loadeingAnimation()
              }
          })



  //  individuel section

  const indivF = document.querySelector('.dev_formulaire');
  function GetCandidate(indexAns){
     
      indivF.style.opacity=0;
      // animaSection.style.display="flex";
     
      setTimeout(()=>{

          indivF.style.opacity= 1;

          // animaSection.style.display="none";
          
          if(allCandidates.length !== 0){
            
              Candidate = allCandidates[indexAns];
   
              const name = document.querySelector('#full-name').value = Candidate.fullName;
              const age = document.querySelector('#age').value = Candidate.age;
              const ville = document.querySelector('#ville').value = Candidate.ville;
              const email = document.querySelector('#email').value = Candidate.email;
              const tele = document.querySelector('#telephone').value = Candidate.telephone;
             
              const cnss = document.querySelectorAll(".cnss").forEach(el=>{
                if(el.value == Candidate.cnss){
                    el.setAttribute('checked','checked');
                }
              });

              const php = document.querySelectorAll(".php").forEach(el=>{
                  if(el.value == parseInt(Candidate.php)){
                      el.setAttribute('checked','checked');
                  }
              });

              const html5 = document.querySelectorAll(".html5").forEach(el=>{
                  if(el.value == parseInt(Candidate.html)){
                      el.setAttribute('checked','checked');
                  }
              });

              const css = document.querySelectorAll(".css").forEach(el=>{
                  if(el.value == parseInt(Candidate.css)){
                      el.setAttribute('checked','checked');
                  }
              });

              const js = document.querySelectorAll(".js").forEach(el=>{
                  if(el.value == parseInt(Candidate.js)){
                      el.setAttribute('checked','checked');
                  }
                });

                const bottstrap = document.querySelectorAll(".angular").forEach(el=>{
                  if(el.value == parseInt(Candidate.angular)){
                      el.setAttribute('checked','checked');
                  }
                });

                const typscript = document.querySelectorAll(".typescript").forEach(el=>{
                  if(el.value == parseInt(Candidate.typescript)){
                      el.setAttribute('checked','checked');
                  }
                });

                const uml = document.querySelectorAll(".uml").forEach(el=>{
                  if(el.value == parseInt(Candidate.uml)){
                      el.setAttribute('checked','checked');
                  }
                })

                const bootstrap4 = document.querySelectorAll(".bootstrap4").forEach(el=>{
                  if(el.value == parseInt(Candidate.bootstrap)){
                      el.setAttribute('checked','checked');
                  }
                })

                const jquery = document.querySelectorAll(".jquery").forEach(el=>{
                  if(el.value == parseInt(Candidate.jquery)){
                      el.setAttribute('checked','checked');
                  }
                });

                const ajax = document.querySelectorAll(".ajax").forEach(el=>{
                  if(el.value == parseInt(Candidate.ajax)){
                      el.setAttribute('checked','checked');
                  }
                });

                const react = document.querySelectorAll(".react").forEach(el=>{
                  if(el.value == parseInt(Candidate.react)){
                      el.setAttribute('checked','checked');
                  }
                });

                const symphony = document.querySelectorAll(".symphony").forEach(el=>{
                  if(el.value == parseInt(Candidate.symphony)){
                      el.setAttribute('checked','checked');
                  }
                });

                const mysql = document.querySelectorAll(".mysql").forEach(el=>{
                  if(el.value == parseInt(Candidate.mysql)){
                      el.setAttribute('checked','checked');
                  }
                 });

                 const nodejs = document.querySelectorAll(".nodejs").forEach(el=>{
                  if(el.value == parseInt(Candidate.nodejs)){
                      el.setAttribute('checked','checked');
                  }
                 });

                 const epressjs = document.querySelectorAll(".expressjs").forEach(el=>{
                  if(el.value == parseInt(Candidate.expressjs)){
                      el.setAttribute('checked','checked');
                  }
                 });

                const exp = document.querySelectorAll(".exp").forEach(el=>{
                  if(el.value == Candidate.anciennete){
                      el.setAttribute('checked','checked');
                  }
                });

                const dev_t = document.querySelectorAll(".dev_t").forEach(el=>{
                  if(el.value == Candidate.front_back_full){
                      el.setAttribute('checked','checked');
                  }
                });

                const pr_number = document.querySelectorAll(".pr_number").forEach(el=>{
                  if(el.value == Candidate.nombre_prj){
                      el.setAttribute('checked','checked');
                  }
                });

                const qu = document.querySelector(".qu_").value = Candidate.question;
              
          }else{
            document.querySelector('.section-tab').style.display = 'none';
          }
        },2000);
  }
  // GetCandidate(index - 1);



  // delete candidate 
 const DeleteAns = document.querySelector('.deleteRes');
 const MsgAlert = document.querySelector('.msg-alert');

 function deleteCandidate(){

  DeleteAns.addEventListener('click',()=>{
       
      if(window.confirm('do you want to delete this Candidate ?')){
                  //get id 
                  let id = allCandidates[index-1].id;

                  $.ajax({
                    url:'action.php',
                    method:'POST',
                    data:{ id:id, action:'delete'},
                    dataType:"JSON",
                    success:function(data){
                      
                          fetchCandidate();
                          loadeingAnimation();

                          // check type of msg for choose type of alert 
                          if(data.type == 'success'){
                             MsgAlert.classList.add('alert-success');
                              //  set alert message value 
                             MsgAlert.innerHTML = '<i class="fa fa-check me-3" aria-hidden="true"></i>' + data.msg;
                          }else{
                             MsgAlert.classList.add('alert-danger');
                              //  set alert message value 
                             MsgAlert.innerHTML = '<i class="fa fa-exclamation-circle me-3" aria-hidden="true"></i>' + data.msg;
                          }
                          //  show alert message
                            
                            MsgAlert.style.display = 'block';
                          //  after 2 second hide alert message
                            setTimeout(()=>{
                              MsgAlert.style.display = 'none';
                            },2000);
                    }
                  });
      }else{
        return false;
      }

  });
 }
 deleteCandidate();

 
  

}





