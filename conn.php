<?php

 class Candidate {
   public $conn;
   private $host = 'localhost';
   private $username = 'root';
   private $password = '';
   private $dbname = 'formulaire';
   
    function __construct()
    {
        $this->connect();
    }

// create connection
    private function connect(){
            $dsn = "mysql:host=".$this->host.";dbname=".$this->dbname."";
            $this->conn = new PDO($dsn, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ);
    }

    // upload file 
    function upload_file($file){
      if(isset($file)){
            $filename    =  explode('.', $file["name"]);
            $extention   =  $filename[1];
            $new_name    =  $filename[0] . date("d-m-y") .time().'.' . $extention;
            $destination =  './upload/'. $new_name;

            move_uploaded_file($file["tmp_name"],$destination);
           
            return $new_name;
      }
    }

    // insert candidate 
    function insertCandidate($fullname,$age,$ville,$email,$telephone,$cnss,$php,$html,$css,$js,$angular,$bootstrap,$uml,$jquery,$ajax,$typscript,$react,$symphony,$mysql,$nodejs,$expressjs,$anciennete,$front_back_full,$nombre_prj,$salaire,$cv,$question){
           
      $dataF =[
              ':fullName'=>$fullname,
              ":age"=>$age,
              ':ville'=>$ville,
              ':email'=>$email,
              ':telephone'=>$telephone,
              ':cnss'=>$cnss,
              ':php'=>$php,
              ':html'=>$html,
              ':css'=>$css,
              ':js'=>$js,
              ':angular'=>$angular,
              ':bootstrap'=>$bootstrap,
              ':uml'=>$uml,
              ':jquery'=>$jquery,
              ':ajax'=>$ajax,
              ':typscript'=>$typscript,
              ':react'=>$react,
              ':symphony'=>$symphony,
              ':mysql'=>$mysql,
              ':nodejs'=>$nodejs,
              ':expressjs'=>$expressjs,
              ':anciennete'=>$anciennete,
              ':front_back_full'=>$front_back_full,
              ':nombre_prj'=>$nombre_prj,
              ':salaire'=>$salaire,
              ':cv'=>$cv,
              ':question'=>$question
          ];

          $sql = "INSERT INTO candidat(fullName,age,ville,email,telephone,cnss,php,html,css,js,angular,bootstrap,uml,jquery,ajax,typescript,react,symphony,mysql,nodejs,expressjs,anciennete,front_back_full,nombre_prj,salaire,cv,question) VALUE(:fullName,:age,:ville,:email,:telephone,:cnss,:php,:html,:css,:js,:angular,:bootstrap,:uml,:jquery,:ajax,:typscript,:react,:symphony,:mysql,:nodejs,:expressjs,:anciennete,:front_back_full,:nombre_prj,:salaire,:cv,:question)";
          $stml = $this->conn->prepare($sql);
          $stml->execute($dataF);
          echo 'create success';

    }

    // fetch Candidates
    function fetchCandidates(){

          $qry='SELECT * FROM candidat ORDER BY id DESC';
          $stmt= $this->conn->prepare($qry);
          $stmt->execute();
          $dev = $stmt->fetchAll();
          echo json_encode($dev);
    }

    // fetch Candidate
    function fetchCandidate($id){
          $qry="SELECT * FROM candidat where id=$id";
          $stmt= $this->conn->prepare($qry);
          $stmt->execute();
          $condidate = $stmt->fetch();
          return $condidate;  
    }


    // Delete Condidate
    function deleteCondidate($id){

      $condidat = $this->fetchCandidate($id);
       // file path
       $dirPath = __DIR__.'\upload\\';
       $filename = $condidat->cv;
       //check all file from upload directory
       $files = scandir($dirPath);
       
      $qry_delete="Delete FROM candidat where id = $id";
     
      $stmt= $this->conn->prepare($qry_delete);

      if($stmt->execute()){
            // delete pdf also 
            if(in_array($filename,$files)){
                unlink($dirPath . $filename);
            }
            $result['type'] ="success";
            $result['msg'] ="delete success";

      }else{
            
            $result['type'] ="error";
            $result['msg'] ="sorry is not found this id";
      }

      echo json_encode($result);
    }

    // get real name of any value of lang 
    function getRealName($value){
      if($value != null || $value != ''){
        switch(intval($value)) {
          case 1:
              return "Débutant (1/5)";
              break;
          case 2:
              return "Junior (2/5)";
              break;
          case 3:
              return "Senior (3/5)";
              break;
          case 5:
            return "Expert (5/5)";
            break;
       }
      }
    }

    // get the candidates as an table 
    function create_table_condidate($pg){
      $page = $pg; // page Number
      $output = '';
      $record_per_page = 8; //Limit of candidates that will be shown
      $start_from = ($page - 1) * $record_per_page; // limit from

      $qry="SELECT * FROM candidat ORDER BY id DESC LIMIT $start_from,$record_per_page";
      $stmt= $this->conn->prepare($qry);
      $stmt->execute();
      $candidates = $stmt->fetchAll();
      
      $output .='<div class="table-responsive ">';
      $output .='<table class="table table-dark table-striped table-hover table-bordered">';
      $output .='<thead>
                <tr>
                  <th scope="col">Créer à</th>
                  <th scope="col">Fullname</th>
                  <th scope="col">Age</th>
                  <th scope="col">Ville</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Téléphone</th>
                  <th scope="col">CNSS</th>
                  <th scope="col">Php</th>
                  <th scope="col">Html</th>
                  <th scope="col">Css</th>
                  <th scope="col">Javascript</th>
                  <th scope="col">Angular</th>
                  <th scope="col">Bootstrap4</th>
                  <th scope="col">Uml</th>
                  <th scope="col">Jquery</th>
                  <th scope="col">Ajax</th>
                  <th scope="col">Typescript</th>
                  <th scope="col">React</th>
                  <th scope="col">Symphony</th>
                  <th scope="col">Mysql</th>
                  <th scope="col">Nodejs</th>
                  <th scope="col">Expressjs</th>
                  <th scope="col">Anciennete</th>
                  <th scope="col">F_B_F</th>
                  <th scope="col">N_projets</th>
                  <th scope="col">Salaire</th>
                  <th scope="col">Cv</th>
                  <th scope="col">Question</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>';
    $output .= '<tbody>';
      if($candidates != null){
        foreach($candidates as $condidate){
           
          
          $output .=' <tr class="row__">
                          <td scope="col">'.date('Y-m-d', strtotime($condidate->date)).'</td>
                          <td scope="col">'.$condidate->fullName.'</td>
                          <td scope="col">'.$condidate->age.'</td>
                          <td scope="col">'.$condidate->ville.'</td>
                          <td scope="col">'.$condidate->email.'</td>
                          <td scope="col">'.$condidate->telephone.'</td>
                          <td scope="col">'.$condidate->cnss.'</td>
                          <td scope="col">'.$this->getRealName($condidate->php).'</td>
                          <td scope="col">'.$this->getRealName($condidate->html).'</td>
                          <td scope="col">'.$this->getRealName($condidate->css).'</td>
                          <td scope="col">'.$this->getRealName($condidate->js).'</td>
                          <td scope="col">'.$this->getRealName($condidate->angular).'</td>
                          <td scope="col">'.$this->getRealName($condidate->bootstrap).'</td>
                          <td scope="col">'.$this->getRealName($condidate->uml).'</td>
                          <td scope="col">'.$this->getRealName($condidate->jquery).'</td>
                          <td scope="col">'.$this->getRealName($condidate->ajax).'</td>
                          <td scope="col">'.$this->getRealName($condidate->typescript).'</td>
                          <td scope="col">'.$this->getRealName($condidate->react).'</td>
                          <td scope="col">'.$this->getRealName($condidate->symphony).'</td>
                          <td scope="col">'.$this->getRealName($condidate->mysql).'</td>
                          <td scope="col">'.$this->getRealName($condidate->nodejs).'</td>
                          <td scope="col">'.$this->getRealName($condidate->expressjs).'</td>
                          <td scope="col">'.$condidate->anciennete.'</td>
                          <td scope="col">'.$condidate->front_back_full.'</td>
                          <td scope="col">'.$condidate->nombre_prj.'</td>
                          <td scope="col">'.$condidate->salaire.'</td>
                          <td scope="col">'.$condidate->question.'</td>
                          <td scope="col"><a href="./upload/'.$condidate->cv.'" class="btn btn-light">CV (resume) <i class="fa fa-download ms-3" aria-hidden="true"></i></a></td>
                          <td scope="col"><button class="btn btn-danger" onclick="deleteCandidate('.$condidate->id.');"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
                        </tr>';
             
        } //end foreach
        

       }else{
         $output .= '<tr><td colspan="29" class="p-3 text-danger"><p> <b>Sorry</b>, there no candidate to list</p></dt></tr>';
       }

      $output .='</tbody>'; 
      $output .='</table>';
      $output .='</div>';
      
      //pagination
      
      $qry_pagination="SELECT * FROM candidat ORDER BY id DESC";
      $stmt_p= $this->conn->prepare($qry_pagination);
      $stmt_p->execute();

      // get total condidate
      $total_records = $stmt_p->rowCount();
      // calc total pages 
      $total_pages = ceil($total_records / $record_per_page); 

      if($candidates != null){
            $output .='<div aria-label="Page navigation example">
                          <ul class="pagination justify-content-center">';
                             

                      for($i=1; $i <= $total_pages ; $i++){

                            $output .='<li class="page-item"><a class="page-link" onclick="load_table('.$i.')">'.$i.'</a></li>';
                            
                     
                            }

            $output .=  '  </ul>
                       </div>';
      }

       echo $output;
    }

    
  }


?> 