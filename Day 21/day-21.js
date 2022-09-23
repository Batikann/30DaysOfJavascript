const colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

const liItems=document.querySelectorAll('li');
const spanItem=document.getElementById("year");
const dateDiv=document.getElementById('date-div');
liItems.forEach((v)=>{
    v.style.padding='1rem'
    if (v.innerHTML.includes('Done')) {
        v.style.background='green'
        v.style.opacity='0.7'
        v.style.width
        v.style.textAlign='left'
        v.style.marginBottom='0.2rem'
    }
    else if(v.innerHTML.includes('Ongoing')){
        v.style.background='yellow'
        v.style.opacity='0.7'
        v.style.width
        v.style.textAlign='left'
        v.style.marginBottom='0.2rem'
        
    }
    else if(v.innerHTML.includes('Coming')){
        v.style.background='red'
        v.style.opacity='0.7'
        v.style.width
        v.style.textAlign='left'
        v.style.marginBottom='0.2rem'
    }
});

const randomColorGenerator=()=>{
    let result=Math.floor(Math.random()*148)
    spanItem.style.color=colors[result];
}

const randomBackgroundColorGenerator=()=>{
    let result=Math.floor(Math.random()*148)
    dateDiv.style.background=colors[result];
    dateDiv.style.width='180px';
    dateDiv.style.padding='0.3rem'
    dateDiv.style.marginLeft='15rem'
}

const getDate=()=>{
    let date=new Date();
    dateDiv.textContent=date.toLocaleString();
}

setInterval(randomColorGenerator,1000);
setInterval(randomBackgroundColorGenerator,1000)

getDate();
