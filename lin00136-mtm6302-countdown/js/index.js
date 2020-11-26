$(function () {
    let timer = null;
    let dayOptions = '';
    for (let i = 1; i <= 31; i++) {
        dayOptions += `<option value="${i}">${i}</option>`;
    }
    $('#day').html(dayOptions);

    setNow();

    let countdownTime = localStorage.getItem('countdown');

    if (countdownTime) {
        $('.countdown-form').addClass('hidden');
        $('.countdown-wrapper').removeClass('hidden');
        $('.countdown-title').html(localStorage.getItem('title'));
        timer = setInterval(function () {
            let t = countdown(countdownTime);
            $('.day-wrapper').html(t.days);
            $('.hour-wrapper').html(t.hours);
            $('.minute-wrapper').html(t.minutes);
            $('.second-wrapper').html(t.secondes);
        }, 1000);
    } else {
        $('.countdown-form').removeClass('hidden');
        $('.countdown-wrapper').addClass('hidden');
    }

    let t = countdown(countdownTime);
    $('.day-wrapper').html(t.days);
    $('.hour-wrapper').html(t.hours);
    $('.minute-wrapper').html(t.minutes);
    $('.second-wrapper').html(t.secondes);
    let fTime = '';
    $('#get-countdown').click(function () {
        let title = $('#title').val();
        let year = $('#year').val();
        let month = $('#month').val();
        let day = $('#day').val();
        fTime = new Date(year + '-' + (month - 0 + 1) + '-' + day + ' 00:00:00').getTime();
        console.log(fTime, Date.now());
        if (fTime > Date.now()) {
            localStorage.setItem('countdown', fTime);
            localStorage.setItem('title', $('#title').val());
            $('.countdown-form').addClass('hidden');
            $('.countdown-wrapper').removeClass('hidden');
            $('.countdown-title').html($('#title').val());
            let t = countdown(fTime);
            $('.day-wrapper').html(t.days);
            $('.hour-wrapper').html(t.hours);
            $('.minute-wrapper').html(t.minutes);
            $('.second-wrapper').html(t.secondes);
            timer = setInterval(function () {
                let t = countdown(fTime);
                $('.day-wrapper').html(t.days);
                $('.hour-wrapper').html(t.hours);
                $('.minute-wrapper').html(t.minutes);
                $('.second-wrapper').html(t.secondes);
            }, 1000);
        } else {
            alert('Invalid time');
        }
    });
    $('#change-countdown').click(function () {
        localStorage.removeItem('countdown');
        localStorage.removeItem('title');
        $('#title').val('');
        $('.countdown-form').removeClass('hidden');
        $('.countdown-wrapper').addClass('hidden');
        setNow();
        $('.day-wrapper').html('');
        $('.hour-wrapper').html('');
        $('.minute-wrapper').html('');
        $('.second-wrapper').html('');
        clearInterval(timer);
    });

    function setNow() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();

        $('#day').val([day]);
        $('#month').val([month]);

        let yearOptions = '';
        for (let i = year; i <= year + 100; i++) {
            yearOptions += `<option value="${i}">${i}</option>`
        }
        $('#year').html(yearOptions);
    }

    function countdown(fTime) {
        let nTime = Date.now();
        let dTime = (fTime - nTime) / 1000;

        let days = Math.floor(dTime / 3600 / 24);
        let hours = Math.floor(dTime / 3600 % 24);
        let minutes = Math.floor(dTime / 60 % 60);
        let secondes = Math.floor(dTime % 60);
        return {
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            secondes: secondes.toString().padStart(2, '0')
        }
    }
});