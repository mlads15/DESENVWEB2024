<?php

function ola(){
    echo "Olá mundo da função!";
}

function soma ($n1, $n2, $n3){
    $soma = $n1 + $n2 +$n3;
    return $soma;
}

//programa principal -- chamada da função
ola();
echo "<br>";

$n3 = 10;
$soma = soma(5, 12, $n3);
echo $soma;

// /home/lab/m_desenweb/ml_javascript/aula4/exercicioFuncao.php4