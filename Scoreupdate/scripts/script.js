const s = require("Scene");
const p = require("Patches");


s.root.find(p.getStringValue("textname").pinLastValue()).text = p.getScalarValue("score").toString();
