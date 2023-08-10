function toLoad() {
    let message = document.getElementById('message');
    let image = document.getElementById('image');
    let date = new Date()
    let hour =  date.getHours();
    message.innerHTML = `Now it's ${hour} o'clock.`
    if(hour >= 0 && hour < 12){
        //Good Morning
        image.src = 'assets/morning.jpg';
        document.body.style.background = '#aba970';
    }else if( hour < 18 && hour >= 12){
        //Good Afternoon
        image.src = 'assets/afternoon.jpg';
        document.body.style.background = '#852f22';

    }else{
        //Good night
        image.src = 'assets/night.jpg'
        document.body.style.background = '#02030a';

    }
}




