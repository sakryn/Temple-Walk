// hide/show captions
// set caption to specified text (change image given input)

const caption = document.getElementById("closedCaptioning");

function hideCaptions(){
    caption.setAttribute("visible","false");
}

function showCaptions(){
    caption.setAttribute("visible","true");
}

function changeCaptions(CC){
    if (CC === "01") {caption.setAttribute("src","#CC01");}
    else if (CC === "02") {caption.setAttribute("src","#CC02");}
    else if (CC === "03") {caption.setAttribute("src","#CC03");}
    else if (CC === "04") {caption.setAttribute("src","#CC04");}
    else if (CC === "05") {caption.setAttribute("src","#CC05");}
    else if (CC === "06") {caption.setAttribute("src","#CC06");}
    else if (CC === "07") {caption.setAttribute("src","#CC07");}
    else if (CC === "08") {caption.setAttribute("src","#CC08");}
    else if (CC === "09") {caption.setAttribute("src","#CC09");}
    else if (CC === "10") {caption.setAttribute("src","#CC10");}
    else if (CC === "11") {caption.setAttribute("src","#CC11");}
    else if (CC === "12") {caption.setAttribute("src","#CC12");}
    else if (CC === "13") {caption.setAttribute("src","#CC13");}
    else if (CC === "14") {caption.setAttribute("src","#CC14");}
    else if (CC === "15") {caption.setAttribute("src","#CC15");}
    else if (CC === "16") {caption.setAttribute("src","#CC16");}
    else if (CC === "17") {caption.setAttribute("src","#CC17");}
    else if (CC === "18") {caption.setAttribute("src","#CC18");}
    else if (CC === "19") {caption.setAttribute("src","#CC19");}
}