<?php 
    if(isset($_GET['filtro'])){
        echo json_encode(['1',[$_GET['filtro'], "otros datos"]]);
    } else {
        echo json_encode(['1',$_POST['usuario'],$_POST['pass']]);
    }
?>
