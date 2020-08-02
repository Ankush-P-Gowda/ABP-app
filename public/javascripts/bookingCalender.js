mobiscroll.settings = {
    theme: 'mobiscroll',
    themeVariant: 'light'
};

var inst = mobiscroll.calendar('#demo', {
    display: 'inline'
});

document.querySelectorAll('.md-view-change').forEach(function (elm) {
    elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
            case 'month':
                inst.option({ weeks: 6 })
                break;
        }
    });
});