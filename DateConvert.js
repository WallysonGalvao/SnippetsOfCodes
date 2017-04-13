// Declare and initialize the variable sDateBra as an String
var sDateBra = "30/03/2017";

// Declare and initialize the sDateBraSplit variable with the sDateBra variable split by the slash
var sDateBraSplit = sDateBra.split("/");

// Declare and initialize the sDateUsa variable with sDateBraSplit formatted "03/30/2017"
var sDateUsa = sDateBraSplit[1] + "/" + sDateBraSplit[0] + "/" + sDateBraSplit[2];

// Declare and initialize the oDate variable with a new Date passing as a parameter sDateUsa
var oDate = new Date(sDateUsa);
