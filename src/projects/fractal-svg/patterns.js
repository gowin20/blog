const fractalInfo = {
    bases: {
        line:["DRAW"],
        square:["DRAW",90,"DRAW",90,"DRAW",90,"DRAW"],
        triangle:["DRAW",120,"DRAW",120,"DRAW"],
        hexagon:["DRAW",60,"DRAW",60,"DRAW",60,"DRAW",60,"DRAW",60,"DRAW"]
    },
    options: {
        line150: {
            name:"Minkowski sausage (1.5)",
            base:"line",
            shape:"sausage150",
            maxDepth:6,
        },
        square150:{
            name:"Minkowski square (1.5)",
            base:"square",
            shape:"sausage150",
            maxDepth:5
        },
        line161: {
            name:"Minkowski sausage (1.61)",
            base:"line",
            shape:"sausage161",
            maxDepth:4
        },
        square161: {
            name:"Minkowski square (1.61)",
            base:"square",
            shape:"sausage161",
            maxDepth:4
        },
        koch: {
            name:"Koch curve",
            base:"line",
            shape:"koch",
            maxDepth:9
        },
        kochSnowflake: {
            name:"Koch snowflake",
            base:"triangle",
            shape:"koch",
            maxDepth:9
        },
        hexKoch: {
            name: "Koch curve (hexagon)",
            base:"hexagon",
            shape:"koch",
            maxDepth:9
        },
        quadKoch: {
            name: "Koch curve (quadratic)",
            base:"line",
            shape:"quadKoch",
            maxDepth:8
        },
        quadKochSquare: {
            name: "Koch square (quadratic)",
            base:"square",
            shape:"quadKoch",
            maxDepth:8
        },
        un: {
            name:"Helmet",
            base:"line",
            shape:"un",
            maxDepth:8
        },
        maple: {
            name:"Mandel",
            base:"line",
            shape:"maple",
            maxDepth:6
        },
        peano: {
            name:"Peano",
            base:"line",
            shape:"peano",
            maxDepth:6
        }
    },
    patterns: {
        sausage150: {
            dimension:1.5,
            scale:4,
            shape:["DRAW",90,"DRAW",-90,"DRAW",-90,"DRAW","DRAW",90,"DRAW",90,"DRAW",-90,"DRAW"]
        },
        sausage161: {
            dimension:1.61,
            scale:4,
            shape:["DRAW",-90,"DRAW","DRAW",90,"DRAW","DRAW",90,"DRAW",90,"DRAW",-90,"DRAW",-90,"DRAW","DRAW",90,"DRAW",90,"DRAW",-90,"DRAW",-90,"DRAW","DRAW",-90,"DRAW","DRAW",90,"DRAW"]
        },
        koch: {
            dimension:0,
            scale:3,
            shape:["DRAW",-60,"DRAW",120,"DRAW",-60,"DRAW"]
        },
        quadKoch: {
            dimension:0,
            scale:3,
            shape:["DRAW",-90,"DRAW",90,"DRAW",90,"DRAW",-90,"DRAW"]
        },
        un: {
            dimension:0,
            scale:3,
            shape:[-90,"DRAW",90,"FLIP","DRAW","FLIP","DRAW","FLIP","DRAW","FLIP",90,"DRAW",-90]
        },
        maple: {
            dimension:0,
            scale:3,
            shape:["DRAW",-120,"DRAW",120,"DRAW",120,"DRAW","DRAW",-120,"DRAW",-120,"DRAW",120,"DRAW","DRAW"]
        },
        peano: {
            dimension:0,
            scale:3,
            shape:[-90,"DRAW","DRAW",90,"DRAW",90,"DRAW","DRAW",-90,"DRAW",-90,"DRAW","DRAW",90]
        }
    }};
    
    export default fractalInfo