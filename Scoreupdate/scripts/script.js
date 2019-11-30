const s = require("Scene");
const p = require("Patches");

var score = p.getScalarValue("score");

p.getScalarValue("score").monitor().subscribe(()=>{
    s.root.find(p.getStringValue("textname").pinLastValue()).text = score.toString();

});