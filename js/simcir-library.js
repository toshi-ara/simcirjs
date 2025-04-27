//
// SimcirJS - library
//
// Copyright (c) 2014 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//

// includes following device types:
//  HalfAdder
//  FullAdder
//  4bitAdder

simcir.registerDevice('HalfAdder',
    {
        "width":320,
        "height":160,
        "showToolbox":false,
        "toolbox":[
        ],
        "devices":[
            {"type":"Toggle","id":"dev0","x":96,"y":80,"label":"Toggle"},
            {"type":"DC","id":"dev1","x":48,"y":56,"label":"DC"},
            {"type":"AND","id":"dev2","x":192,"y":80,"label":"AND"},
            {"type":"XOR","id":"dev3","x":192,"y":32,"label":"XOR"},
            {"type":"In","id":"dev4","x":144,"y":32,"label":"A"},
            {"type":"In","id":"dev5","x":144,"y":80,"label":"B"},
            {"type":"Out","id":"dev6","x":240,"y":32,"label":"S"},
            {"type":"Out","id":"dev7","x":240,"y":80,"label":"C"},
            {"type":"Toggle","id":"dev8","x":96,"y":32,"label":"Toggle"}
        ],
        "connectors":[
            {"from":"dev0.in0","to":"dev1.out0"},
            {"from":"dev2.in0","to":"dev4.out0"},
            {"from":"dev2.in1","to":"dev5.out0"},
            {"from":"dev3.in0","to":"dev4.out0"},
            {"from":"dev3.in1","to":"dev5.out0"},
            {"from":"dev4.in0","to":"dev8.out0"},
            {"from":"dev5.in0","to":"dev0.out0"},
            {"from":"dev6.in0","to":"dev3.out0"},
            {"from":"dev7.in0","to":"dev2.out0"},
            {"from":"dev8.in0","to":"dev1.out0"}
        ]
    }
);

simcir.registerDevice('FullAdder',
    {
        "width":440,
        "height":200,
        "showToolbox":false,
        "toolbox":[
        ],
        "devices":[
            {"type":"In","id":"dev0","x":120,"y":32,"label":"Cin"},
            {"type":"In","id":"dev1","x":120,"y":80,"label":"A"},
            {"type":"In","id":"dev2","x":120,"y":128,"label":"B"},
            {"type":"Toggle","id":"dev3","x":72,"y":32,"label":"Toggle"},
            {"type":"Toggle","id":"dev4","x":72,"y":80,"label":"Toggle"},
            {"type":"Toggle","id":"dev5","x":72,"y":128,"label":"Toggle"},
            {"type":"DC","id":"dev6","x":24,"y":80,"label":"DC"},
            {"type":"HalfAdder","id":"dev7","x":168,"y":104,"label":"HalfAdder"},
            {"type":"HalfAdder","id":"dev8","x":248,"y":56,"label":"HalfAdder"},
            {"type":"OR","id":"dev9","x":328,"y":104,"label":"OR"},
            {"type":"Out","id":"dev10","x":376,"y":104,"label":"Cout"},
            {"type":"Out","id":"dev11","x":376,"y":48,"label":"S"}
        ],
        "connectors":[
            {"from":"dev0.in0","to":"dev3.out0"},
            {"from":"dev1.in0","to":"dev4.out0"},
            {"from":"dev2.in0","to":"dev5.out0"},
            {"from":"dev3.in0","to":"dev6.out0"},
            {"from":"dev4.in0","to":"dev6.out0"},
            {"from":"dev5.in0","to":"dev6.out0"},
            {"from":"dev7.in0","to":"dev1.out0"},
            {"from":"dev7.in1","to":"dev2.out0"},
            {"from":"dev8.in0","to":"dev0.out0"},
            {"from":"dev8.in1","to":"dev7.out0"},
            {"from":"dev9.in0","to":"dev8.out1"},
            {"from":"dev9.in1","to":"dev7.out1"},
            {"from":"dev10.in0","to":"dev9.out0"},
            {"from":"dev11.in0","to":"dev8.out0"}
        ]
    }
);

simcir.registerDevice('4bitAdder',
    {
        "width":280,
        "height":480,
        "showToolbox":false,
        "toolbox":[
        ],
        "devices":[
            {"type":"FullAdder","id":"dev0","x":120,"y":72,"label":"FullAdder"},
            {"type":"FullAdder","id":"dev1","x":120,"y":136,"label":"FullAdder"},
            {"type":"FullAdder","id":"dev2","x":120,"y":200,"label":"FullAdder"},
            {"type":"FullAdder","id":"dev3","x":120,"y":264,"label":"FullAdder"},
            {"type":"In","id":"dev4","x":40,"y":80,"label":"A0"},
            {"type":"In","id":"dev5","x":40,"y":128,"label":"A1"},
            {"type":"In","id":"dev6","x":40,"y":176,"label":"A2"},
            {"type":"In","id":"dev7","x":40,"y":224,"label":"A3"},
            {"type":"In","id":"dev8","x":40,"y":272,"label":"B0"},
            {"type":"In","id":"dev9","x":40,"y":320,"label":"B1"},
            {"type":"In","id":"dev10","x":40,"y":368,"label":"B2"},
            {"type":"In","id":"dev11","x":40,"y":416,"label":"B3"},
            {"type":"Out","id":"dev12","x":200,"y":72,"label":"S0"},
            {"type":"Out","id":"dev13","x":200,"y":120,"label":"S1"},
            {"type":"Out","id":"dev14","x":200,"y":168,"label":"S2"},
            {"type":"Out","id":"dev15","x":200,"y":216,"label":"S3"},
            {"type":"Out","id":"dev16","x":200,"y":280,"label":"Cout"},
            {"type":"In","id":"dev17","x":40,"y":24,"label":"Cin"}
        ],
        "connectors":[
            {"from":"dev0.in0","to":"dev17.out0"},
            {"from":"dev0.in1","to":"dev4.out0"},
            {"from":"dev0.in2","to":"dev8.out0"},
            {"from":"dev1.in0","to":"dev0.out1"},
            {"from":"dev1.in1","to":"dev5.out0"},
            {"from":"dev1.in2","to":"dev9.out0"},
            {"from":"dev2.in0","to":"dev1.out1"},
            {"from":"dev2.in1","to":"dev6.out0"},
            {"from":"dev2.in2","to":"dev10.out0"},
            {"from":"dev3.in0","to":"dev2.out1"},
            {"from":"dev3.in1","to":"dev7.out0"},
            {"from":"dev3.in2","to":"dev11.out0"},
            {"from":"dev12.in0","to":"dev0.out0"},
            {"from":"dev13.in0","to":"dev1.out0"},
            {"from":"dev14.in0","to":"dev2.out0"},
            {"from":"dev15.in0","to":"dev3.out0"},
            {"from":"dev16.in0","to":"dev3.out1"}
        ]
    }
);

