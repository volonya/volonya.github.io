let imgIndex = 0;
 
let data = [
    {
        photo: 'images/0.jpeg',
        title: 'look and see',
        description: 'open your eyes and see what is happening around you...'
    },
    {
        photo: 'images/1.jpeg',
        title: 'walk the line',
        description: 'study from your mistakes and do not see behind'
    },
    {
        photo: 'images/2.jpeg',
        title: 'in the jungle',
        description: 'be brave and go in that path what you got from God'
    },
    {
        photo: 'images/3.jpeg',
        title: 'earth',
        description: 'your home is that place where feel yourself at home'
    },
    {
        photo: 'images/4.jpeg',
        title: 'sun',
        description: 'if you are not see the forest from the tree, make 3 steps behind and everithing will shine'
    },
    {
        photo: 'images/5.jpeg',
        title: 'far from home',
        description: 'it is hard sometimes, but never give up your faith'
    },
    {
        photo: 'images/6.jpeg',
        title: 'space',
        description: 'sometimes if you feel space inside of you, think about how much star shining inside your space'
    },
];

$(document).ready(function () {
    console.log("ready! Initialize content");
    loadThumbs();
    changeimgContainer(imgIndex);
});

$("#thumbnailContainer").click(function (event) {
    imgIndex = event.target.name;
    changeimgContainer(event.target.name);
});

function changeimgContainer(index) {
    console.log(index);
    if (data[index].photo) {
        $('#mainImg').attr('src', data[index].photo);
        $('#mainTitle').text(data[index].title);
        $('#mainDescription').text(data[index].description);
        updateThumbSelection();
    } else {
        console.error("Please click on thumbnails");
    }

}

function loadThumbs() {
    $('.thumb').remove();
    $.each(data, function (key, value) {
        console.log("load1", key, value);
        $("#thumbnailContainer").append("<img class=\"thumb\" src=\"" + value.photo + " \" name=\"" + key + "\">");
    });
}

function updateThumbSelection() {
    $.each($(".thumb"), function (key) {
        console.log("key", key, "imgindex", imgIndex);
        if (Number(key) === Number(imgIndex)) {
            console.log("EGYENLŐ");
            $(this).addClass("thumbShowing");
        } else {
            $(this).removeClass("thumbShowing");
        }
    });
}

$("#leftButton").click(function () {
    shiftLeft();
});

$("#rightButton").click(function () {
    shiftRight();
});

$(document).keyup(function (event) {
    console.log("Handler for .keyup() called.", event.which);
    if (event.which === 37) {
        shiftLeft();
    } else if (event.which === 39) {
        shiftRight();
    }
});

function shiftLeft() {
    console.log("left");
    if (imgIndex > 0) {
        imgIndex--;
    } else {
        imgIndex = data.length - 1;
    }
    changeimgContainer(imgIndex);
}

function shiftRight() {
    console.log("right");
    if (imgIndex < data.length - 1) {
        imgIndex++;
    } else {
        imgIndex = 0;
    }
    changeimgContainer(imgIndex);
}