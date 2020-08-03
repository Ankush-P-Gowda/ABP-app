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

var date = mobiscroll.util.datetime.parseDate('dd-mm-yy', '10-02-2020');
console.log(date);
