<?php

require_once './conn.php';


$newDev = new Candidate();

// Post candidate 
if(filter_has_var(INPUT_POST,"age")){
    $fullname =  htmlspecialchars($_POST['full-name']);
    $age =       htmlspecialchars($_POST['age']);
    $ville =      htmlspecialchars($_POST['ville']);
    $email =     htmlspecialchars($_POST['email']);
    $telephone =     htmlspecialchars($_POST['telephone']);
    $cnss =      htmlspecialchars($_POST['cnss']);
   
    $php =       htmlspecialchars($_POST['php']);
    $html =      htmlspecialchars($_POST['html5']);
    $css =       htmlspecialchars($_POST['css']);
    $js =        htmlspecialchars($_POST['js']);
    $angular =   htmlspecialchars($_POST['angular']);
    $bootstrap = htmlspecialchars($_POST['bootstrap4']);
    $uml =       htmlspecialchars($_POST['uml']);
    $jquery =    htmlspecialchars($_POST['jquery']);
    $ajax =      htmlspecialchars($_POST['ajax']);
    $typscript = htmlspecialchars($_POST['typscript']);
    $react =     htmlspecialchars($_POST['react']);
    $symphony =  htmlspecialchars($_POST['symphony']);
    $mysql =     htmlspecialchars($_POST['mysql']);
    $nodejs =    htmlspecialchars($_POST['nodejs']);
    $expressjs = htmlspecialchars($_POST['expressjs']);
  
    $anciennete =          htmlspecialchars($_POST['anciennete']);
    $front_back_full =     htmlspecialchars($_POST['front_back_full']);
    $nombre_prj =          htmlspecialchars($_POST['nombre_prj']);
    $salaire =             htmlspecialchars($_POST['salaire']);
    $cv =                  $newDev->upload_file($_FILES["pdf"]);
    $question =            htmlspecialchars($_POST['question']);
    
    if(filter_var($email , FILTER_VALIDATE_EMAIL) == false){
        $response['msg'] = 'please use a  valid E-mail';
    }else{
        $newDev->insertCandidate($fullname,$age,$ville,$email,$telephone,$cnss,$php,$html,$css,$js,$angular,$bootstrap,$uml,$jquery,$ajax,$typscript,$react,$symphony,$mysql,$nodejs,$expressjs,$anciennete,$front_back_full,$nombre_prj,$salaire,$cv,$question);
    }
    
}

// fetch candidates 
if(isset($_POST['action']) && $_POST['action'] == 'fetch'){
   
    $newDev->fetchCandidates();

}

//delete candidate
if(isset($_POST['action']) && $_POST['action'] == 'delete'){

    $id = $_POST['id'];
    $newDev->deleteCondidate($id); 

}

// get all candidate as a table
if(isset($_POST['action']) && $_POST['action'] == 'fetch_condidates'){
    if(isset($_POST['page']) && isset($_POST['page']) != null){
        $newDev->create_table_condidate($_POST['page']);
    }else{
        $newDev->create_table_condidate(1);
    }

    
    
}
?>