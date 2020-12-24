const s = require("Scene");
const p = require("Patches");


(async () => {

    const name = await p.outputs.getString("textname");
    const text = await s.root.findFirst(name.pinLastValue());


    p.outputs.getScalar("score").then(e => {
        e.monitor().subscribe((ea) => {
            text.text = ea.newValue.toString();
        });
    });
})()
