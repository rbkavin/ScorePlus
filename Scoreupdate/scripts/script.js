const s = require("Scene");
const p = require("Patches");

p.getScalarValue("score").monitor().subscribe(()=>{
s.root.find(p.getStringValue("textname").pinLastValue()).text = p.getScalarValue("score").toString();
});
