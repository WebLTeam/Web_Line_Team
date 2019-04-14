function modalBtn() {
var modal = document.getElementById('MyModal');
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
};
    console.log('test2');
}

function modalImg() {
    var modal = document.getElementsByClassName("Mymodalimg")[0];
    var img1 = document.getElementById("img01_open");
    var img2 = document.getElementById("img02_open");
    var img3 = document.getElementById("img03_open");
    var modalImg = document.getElementById('modal_img01');
    var captionText = document.getElementById('caption');
    var span = document.getElementsByClassName('close1')[0];

    img1.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

    img2.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
    img3.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };

    span.onclick = function () {
      modal.style.display = "none"
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

console.log('test');
};

function tabs() {
    var tab = document.getElementsByClassName('tab');
    var tabContent = document.getElementsByClassName('tabContent');
    hideTabsContent(1);

    function hideTabsContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('whiteborder');
        }
    }

        document.getElementById('tabs').onclick = function (event) {
            var target = event.target;
            if (target.className == 'tab'){
                for (var i = 0; i<tab.length; i++){
                    if (target == tab[i]){
                        showTabsContent(i);
                        break;
                    }
                }
            }
        }

     function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove ('hide');
            tabContent[b].classList.add ('show');
        }

     }

}

$(document).ready(function(){
    modalBtn();
    modalImg();
    tabs();
});