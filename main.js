function new_icon(text = '0:00', color = '#fff') {
    let c = document.createElement("canvas");
    c.height = c.width = 16;
    let cx = c.getContext("2d");
    cx.beginPath();
    cx.font = "22px";
    cx.fillStyle = color;
    cx.fillText( text, 0, 12, 16 );
    return c.toDataURL()
}

setTimeout(function() {
    var sicon = { back: true, href: document.querySelector( 'link[rel="shortcut icon"]').href};
    document.querySelector( 'link[rel="shortcut icon"]').setAttribute('rel', 'icon');
	setInterval( () => {
		let time = document.querySelector('div > div > div[title="Add duration"]').innerText.split(':');
		let link = document.querySelector('link[rel="icon"]');
		if (Number(time[0]) == 0 && Number(time[1]) == 0 && Number(time[2]) == 0) {
			if (sicon.back == false) {
				link.href = sicon.href;
				sicon.back = true;
			}
		} else {
			(Number(time[1]) < 9 && Number(time[0]) == 0) ? link.href = new_icon(time[1].slice(1) + ':' + time[2]) : false;
			(Number(time[1]) > 9 && Number(time[0]) == 0) ? link.href = new_icon(time[1] + ':' + time[2].slice(0,1)) : false;
			(Number(time[0]) > 0) ? link.href = new_icon(time[0] + ':' + time[1]) : false;
			(Number(time[0]) > 9) ? link.href = new_icon(time[0] + ':' + time[1].slice(0,1)) : false;
			(Number(time[0]) > 99) ? link.href = new_icon(time[0]) : false;
			sicon.back = false;
		}
	}, 1000, sicon);
}, 5000);
