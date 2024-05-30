const checkout = document.querySelector('.checkout');

var flag = false;

checkout.addEventListener('click', () => {
    const option = document.querySelector('.options');

    if(!flag){
        if(option.selectedIndex === 0){
            // alert('0');
            window.open("https://buy.stripe.com/test_14kaHe2aK0S1cXS9AA", '_blank');
            window.location.href = "moviewebsite.html"
        }
        else if(option.selectedIndex === 1){
            // alert('1');
            window.open("https://buy.stripe.com/test_eVaeXu6r0bwFga4fYZ", '_blank');
            window.location.href = "moviewebsite.html"
        }
        else if(option.selectedIndex === 2){
            // alert('2');
            window.open("https://buy.stripe.com/test_5kA2aIdTs0S11fadQS", '_blank');
            window.location.href = "moviewebsite.html"
        }
        else{
            // alert('3');
            window.open("https://buy.stripe.com/test_9AQ9Da8z83090b6dQT", '_blank');
            window.location.href = "moviewebsite.html"
        }
        flag = true;
    }
    else{
        alert('You are already a Member!');
    }

});
