var Body = {
    setColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('backgroundColor', color);
    }
}
var Links = {
    setColor:function(color){
    //     var array = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i < array.length){
    //         array[i].style.color = color;
    //         i += 1;
    //     }
    // }
    $('a').css('color', color);
    }
}
function DarkLight(self){
    var target = document.querySelector('body');
    if(self.value === 'dark'){
        self.value = 'light';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
    } else {
        self.value = 'dark';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
    }
}