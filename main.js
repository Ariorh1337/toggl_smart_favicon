function new_icon(text = '0:00', color = '#fff') {
    let c = document.createElement("canvas"); // Используем тот же канвас
    c.height = c.width = 16;
    let cx = c.getContext("2d");
    cx.beginPath();// рисуем голубенький квадратик и черный текст на нем
    cx.font = "22px";
    cx.fillStyle = color;
    cx.fillText( text, 0, 12, 16 );
    return c.toDataURL()
}

setTimeout(function() {
    var s$icon = { back: true, elm: document.querySelector( 'link[rel="shortcut icon"]').href};
	setInterval( () => {
		let time = document.querySelector('div > div > div[title="Add duration"]').innerText.slice(-4);
		if (time !== '0:00') {
			document.querySelector('link[rel="shortcut icon"]').href = new_icon(time);
			s$icon.back == false;
		} else {
			if (s$icon.back == false) {
				document.querySelector('link[rel="shortcut icon"]').href = s$icon.elm;
				s$icon.back = true;
			}
		}
	}, 1000, s$icon);
}, 5000);
