const donusumler = [
    //weight
    {
        from_key: "kg",
        to_key: "g",
        calculator: (value) => {
            return value * 1000;
        }
    }, 
    {
        from_key: "kg",
        to_key: "lb",
        calculator: (value) => {
            return value * 2.205 ;
        }
    },
    {
        from_key: "lb",
        to_key: "kg",
        calculator: (value) => {
            return value * 0.454 ;
        }
    },  
    {
        from_key: "lb",
        to_key: "g",
        calculator: (value) => {
            return value * 453.59237 ;
        }
    },      
    {
        from_key: "g",
        to_key: "kg",
        calculator: (value) => {
            return value * 0.001 ;
        }
    },      
    {
        from_key: "g",
        to_key: "lb",
        calculator: (value) => {
            return value * 0.00220462262 ;
        }
    },  
    //lenght
    {
        from_key:"m",
        to_key:"cm",
        calculator: (value) => {
            return value * 100;}
    },
    {
        from_key:"m",
        to_key:"ft",
        calculator: (value) => {
            return value * 3.2808399;
        }
    },
    {   
        from_key:"m",
        to_key:"in",
        calculator :(value) => {
        value * 39.3700787;
        }
    },
    {
        from_key:"cm",
        to_key:"ft",
        calculator:(value) => {
            value*0.393700787;
        }
    },
    {
        from_key:"cm",
        to_key:"ft",
        calculator:(value) =>{
            value*0.032808399;
        }
    },
    {
        from_key: "cm",
        to_key:"in",
        calculator:(value)=>{
            value*0.3937;
        }
    },
    {
        from_key:"ft",
        to_key:"m ",
        calculator:(value)=>{
            value*0.3048;
        }
    },
    {
        from_key:"ft",
        to_key:"cm ",
        calculator:(value)=>{
            value*30.48;
        }
    },
        {
        from_key:"ft",
        to_key:"in",
        calculator:(value)=>{
            value*12 ;
        }
    },
        {
        from_key:"in",
        to_key:"m ",
        calculator:(value)=>{
            value*0.0254;
        }
    },
    {
        from_key:"in",
        to_key:"ft ",
        calculator:(value)=>{
            value*0.0833 ;
        }
    },
        {
        from_key:"in",
        to_key:"cm",
        calculator:(value)=>{
            value*25.4 ;
        }
    },
    {
        from_key:"l",
        to_key:"ml ",
        calculator:(value)=>{
            value*1000;
        }
    },
        {
        from_key:"l",
        to_key:"gal",
        calculator:(value)=>{
            value*0.264172052 ;
        }
    },
        {
        from_key:"ml",
        to_key:"l ",
        calculator:(value)=>{
            value*0.001;
        }
    },
        {
        from_key:"ml",
        to_key:"gal",
        calculator:(value)=>{
            value*0.000264172052 ;
        }
    },
        {
        from_key:"gal",
        to_key:" l ",
        calculator:(value)=>{
            value*3.78541178;
        }
    },
        {
        from_key:"gal",
        to_key:"ml",
        calculator:(value)=>{
            value* 3785.41178;
        }
    },    
    
    

];