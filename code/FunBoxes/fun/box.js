let zIndex = 1;

function createBox() {
    let boxStyle = `position:absolute;
                left: ${Math.floor(Math.random() * (window.outerWidth + 450)) - 450}px;
                top: ${Math.floor(Math.random() * (window.outerHeight + 450)) - 450}px;
                height:${Math.floor(Math.random() * 250) + 200}px;
                width:${Math.floor(Math.random() * 250) + 200}px;
                background-color: white;
                box-shadow: 0 0 50px gray;
                z-index:${zIndex};
`;
    let box = document.createElement('div');
    box.setAttribute('class', 'ui-widget-content');
    box.setAttribute('id', `${zIndex}`);
    box.setAttribute('style', boxStyle);
    box.setAttribute('onclick', 'toTop(event)');
    $(function () {
        $(`#${box.getAttribute('id')}`).draggable();
    });
    document.body.appendChild(box);
}

function toTop(event) {
    let elem = event.srcElement;
    elem.style.zIndex = ++zIndex;
    elem.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255) + 1},
                                      ${Math.floor(Math.random() * 255) + 1},
                                      ${Math.floor(Math.random() * 255) + 1},
                                      ${Math.random() + 0.5}                               
                                      )`
}