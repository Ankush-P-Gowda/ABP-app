var now = new Date();

mobiscroll.eventcalendar('#demo-custom-event-data', {
    theme: 'mobiscroll',
    themeVariant: 'light',
    display: 'inline',
    view: {
        calendar: { type: 'week' },
        // eventList: { type: 'month', scrollable: true  }
    },
    // cssClass: 'md-custom-data',
    // data: [{
    //     d: new Date(now.getFullYear(), now.getMonth(), 8, 8, 0),
    //     text: 'Green box to post office',
    //     color: '#6e7f29',
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 8, 45),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 9, 0),
    //     text: 'Quick mtg. with Martin <div class="mbsc-bold md-event-desc">Deal offer</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>13 Walnut Avenue, Eden Hazelton</div><span class="md-event-emoji">🎉</span>',
    //     color: '#de3d83',
    //     category: 'meeting',
    //     location: '13 Walnut Avenue, Eden Hazelton'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 9, 30),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 10, 30),
    //     text: 'Product team mtg. <div class="mbsc-bold md-event-desc">Promote Justin</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>Office</div><span class="md-event-emoji">💬</span>',
    //     color: '#f67944',
    //     category: 'meeting',
    //     location: 'Office'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 11, 0),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 11, 30),
    //     text: 'Stakeholder mtg. <div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>Office</div><span class="md-event-emoji">💬</span>',
    //     color: '#f67944',
    //     category: 'meeting',
    //     location: 'Office'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 8, 13, 0),
    //     end: new Date(now.getFullYear(), now.getMonth(), 8, 13, 30),
    //     text: 'Pick up Kate <div class="mbsc-bold md-event-desc">Lunch @ Butcher\'s</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>38 Hardman Road, Cedar Court</div><span class="md-event-emoji">🍔</span>',
    //     color: '#00aabb',
    //     category: 'date',
    //     location: '38 Hardman Road, Cedar Court'
    // }, {
    //     start: new Date(now.getFullYear(), 9, 9, 9),
    //     text: 'Coffee with Steve <div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>1334 Rose Street, Walpole</div><span class="md-event-emoji">☕</span>',
    //     color: '#00aabb',
    //     category: 'coffee break',
    //     location: '1334 Rose Street, Walpole'
    // }, {
    //     start: new Date(now.getFullYear(), 10, 2, 12),
    //     text: 'Trip to England <div class="mbsc-bold md-event-desc">Family visit</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>Evergreen Drive</div><span class="md-event-emoji">✈</span>',
    //     color: '#00aabb',
    //     category: 'vacation',
    //     location: 'Evergreen Drive'
    // }, {
    //     start: new Date(now.getFullYear(), 4, 3, 11),
    //     end: new Date(now.getFullYear(), 4, 3, 12),
    //     text: 'Photoshoot <div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>431 Durham Road, Indianapolis</div><span class="md-event-emoji">📸</span>',
    //     color: '#00aabb',
    //     category: 'hobby',
    //     location: '431 Durham Road, Indianapolis'
    // }, {
    //     start: new Date(now.getFullYear(), now.getMonth(), 17, 30, 0),
    //     text: 'Shopping with mom <div class="mbsc-bold md-event-desc">List on the fridge</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>587 Grant Street, Montpelier</div><span class="md-event-emoji">🛒</span>',
    //     color: '#f67944',
    //     category: 'hobby',
    //     location: '587 Grant Street, Montpelier'
    // }, {
    //     d: (now.getMonth() + 1) + '/14',
    //     text: 'Dexter BD <div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>52 Crescent Street, Phoenix</div><span class="md-event-emoji">🎂</span>',
    //     color: '#37bbe4',
    //     category: 'party',
    //     location: '52 Crescent Street, Phoenix'
    // }, {
    //     d: (now.getMonth() + 1) + '/5',
    //     text: 'Luke BD <div class="mbsc-bold md-event-desc">Party at 4 PM</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>57 Mulberry Street, Fremont</div><span class="md-event-emoji">🎉</span>',
    //     color: '#37bbe4',
    //     category: 'birthday',
    //     location: '57 Mulberry Street, Fremont'
    // }, {
    //     d: 'w3',
    //     text: 'Employment <div class="mbsc-bold md-event-desc">Semi-weekly</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>Office</div><span class="md-event-emoji">✍</span>',
    //     color: '#635045',
    //     category: 'meeting',
    //     location: 'Office'
    // }, {
    //     d: 'w5',
    //     text: 'Employment <div class="mbsc-bold md-event-desc">Semi-weekly</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>Office</div><span class="md-event-emoji">✍</span>',
    //     color: '#ff9966',
    //     category: 'meeting',
    //     location: 'Office'
    // }, {
    //     start: new Date(now.getFullYear(), 1, 7),
    //     end: new Date(now.getFullYear(), 1, 25),
    //     text: 'Dean OFF <div class="mbsc-bold md-event-desc">Vacation</div><span class="md-event-emoji">🌄</span>',
    //     color: '#99ff33',
    //     category: 'vacation'
    // }, {
    //     start: new Date(now.getFullYear(), 2, 1),
    //     end: new Date(now.getFullYear(), 2, 14),
    //     text: 'Mike probation time <div class="mbsc-bold md-event-desc">Jack\'s supervision</div><div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>Office</div><span class="md-event-emoji">📋</span>',
    //     color: '#e7b300',
    //     category: 'work',
    //     location: 'Office'
    // }, {
    //     start: new Date(now.getFullYear(), 4, 7),
    //     end: new Date(now.getFullYear(), 4, 16),
    //     text: 'John OFF <div class="mbsc-bold md-event-desc">Sick leave</div><span class="md-event-emoji">💊</span>',
    //     color: '#669900',
    //     category: 'sickness',
    // }, {
    //     start: new Date(now.getFullYear(), 5, 1),
    //     end: new Date(now.getFullYear(), 5, 11),
    //     text: 'Carol OFF <div class="mbsc-bold md-event-desc">Personal problems</div>',
    //     color: '#6699ff',
    //     category: 'vacation'
    // }, {
    //     start: new Date(now.getFullYear(), 6, 2),
    //     end: new Date(now.getFullYear(), 6, 17),
    //     text: 'Business trip <div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>5th Street North</div><span class="md-event-emoji">🚌</span>',
    //     color: '#cc9900',
    //     category: 'vacation',
    //     location: '5th Street North'
    // }, {
    //     start: new Date(now.getFullYear(), 7, 6),
    //     end: new Date(now.getFullYear(), 7, 14),
    //     text: 'Ashley OFF <div class="mbsc-bold md-event-desc">On a trip</div><span class="md-event-emoji">🚌</span>',
    //     color: '#339966',
    //     category: 'vacation'
    // }, {
    //     start: new Date(now.getFullYear(), 8, 10),
    //     end: new Date(now.getFullYear(), 8, 20),
    //     text: 'Marisol OFF <div class="mbsc-bold md-event-desc">Family time</div><span class="md-event-emoji">👨‍‍👧‍👦</span>',
    //     color: '#8701a9',
    //     category: 'vacation'
    // }, {
    //     start: new Date(now.getFullYear(), 9, 1),
    //     end: new Date(now.getFullYear(), 9, 4),
    //     text: 'Sharon OFF <div class="mbsc-bold md-event-desc">Sick leave</div><span class="md-event-emoji">🤕</span>',
    //     color: '#cc6699',
    //     category: 'sickness'
    // }, {
    //     d: '12/25',
    //     text: 'Christmas Day <div class="md-event-loc mbsc-txt-muted"><span class="mbsc-ic mbsc-ic-location"></span>Home</div><span class="md-event-emoji">🎄</span>',
    //     color: '#ff0066',
    //     category: 'holiday',
    //     location: 'Home'
    // }, {
    //     d: '1/1',
    //     text: 'New Year\'s day <span class="md-event-emoji">🎆</span>',
    //     color: '#99ccff',
    //     category: 'holiday'
    // }, {
    //     d: '4/1',
    //     text: 'April Fool\'s Day <div class="mbsc-bold md-event-desc">Just kidding!</div><span class="md-event-emoji">🤡</span>',
    //     color: '#ff6666',
    //     category: 'joke'
    // }, {
    //     d: '11/2',
    //     text: 'File Form 720 for the third quarter <span class="md-event-emoji">📃</span>',
    //     color: '#a63e14',
    //     category: 'work'
    // }]
});