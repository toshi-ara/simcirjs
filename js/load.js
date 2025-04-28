$(function() {
    const $s = simcir;
    const $simcir = $('#simcir');
    const $getDataBtn = $('#getDataBtn');
    const $setDataBtn = $('#setDataBtn');
    const $dataArea = $('#dataArea');

    function getCircuitData() {
        return $s.controller(
            $simcir.find('.simcir-workspace')).text();
    };
    function setCircuitData(data) {
        $s.setupSimcir($simcir, JSON.parse(data));
    };

    // button click events
    $getDataBtn.click(() => {
        $dataArea.val(getCircuitData());
    });
    $setDataBtn.click(() => {
        setCircuitData($('#dataArea').val());
    });

    // load default (just specifies circuit size).
    setCircuitData('{ "width": 800, "height": 600, "showToolbox": true, "toolbox": [ {"type": "DC"}, {"type": "Joint"}, {"type": "Toggle"}, {"type": "LED", "color":"#ff0000", "label":"LED"}, {"type": "AND", "label": "AND"}, {"type": "OR", "label": "OR"}, {"type": "NOT","label": "NOT"}, {"type": "NAND","label": "NAND"}, {"type": "NOR","label": "NOR"}, {"type": "XOR","label": "XOR"}, {"type": "HalfAdder","label": "HalfAdder"}, {"type": "FullAdder","label": "FullAdder"}, {"type": "4bit7seg", "color":"#ff0000"} ] }');
});

