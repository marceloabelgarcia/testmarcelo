<?php


function serialToRange2($serials): string
    {        
        
        $serial = explode(" ", $serials);
        $range = $serial[0];
        
        array_unshift($serial, " "," ");
        $count = count($serial);
        $sep = '';

 
        for ($i = 3; $i <= $count ; $i++) 
            {
            $c1 = $serial[$i-2];    
            $c2 = $serial[$i-1];
            $c3 = $serial[$i];
            
 
            $dat = $c2;
            if ($i!=$count) $dat .=',';
            if ($c1+1 == $c2 && $c2+1 == $c3) $dat = '-';
            if ($c1+1 != $c2 && $c2+1 == $c3) $dat = $c2.'-';
                

            if (!( strpos($last,'-') >-1  && strpos($dat,'-') > -1))
                {
                $range .= $dat;
                $last = $dat;
                }
            }
        return $range;
    }



 

$serial1 = "1 2 3 5 6 8 9 11 15 16 17";
$s = serialToRange2($serial1);
 

echo $s;

?>