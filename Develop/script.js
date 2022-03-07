console.log('file loaded!')

var currentDay = moment().format("dddd, MMMM Do");

var currentTime = moment().format("YYYY-MM-DD h:mm:ss a");

$("#currentDay").text(currentDay);

var texting_input = document.querySelector('.text_inputing')

for (let i = 0; i <= 24; i++) {

    console.log('looping ?', i)

    var time = moment(i, "h").format("YYYY-MM-DD h:mm:ss a");


    if(moment(currentTime).isBefore(time, "h:mm:ss a") ){

        console.log('true')

        textArea.addClass('ash')

        textArea.removeClass('text_input')

    }else if(moment(currentTime).isSame(time, "h") ){

        console.log('equal')

        textArea.addClass('green')

        textArea.removeClass('text_input')

    } else if(moment(currentTime).isAfter(time, "h") ){

        console.log('false')

 

    }

 

    console.log(currentTime);

    console.log(time);

 

    var row = $('<div>')

    row.attr('id', i)

    var timeSpan = $('<span>')

    timeSpan.text(i)

    timeSpan.addClass('border')

    var textArea = $('<textarea>')

    textArea.addClass('text_input')

    textArea.addClass('')

    textArea.attr('idd', 'input_' + i)

    var saveButton = $('<button>')

    saveButton.attr('name', i)

    saveButton.addClass('adjust')

    saveButton.text('Save')

 

    saveButton.on('click', saveClick)

 

    row.append(timeSpan,textArea, saveButton)

 

    $('.container').append(row)    

 

}

 

function saveClick(e) {

    console.log('our save button got click', $(this).attr('name'))

    console.log('what we typed', $(this).parent().find('textarea').val())

 

}

 

function loadExistingStuff() {

    for (var i = 0, len = localStorage.length; i < len; ++i) {

        console.log('hour!!', localStorage.key(i))

        console.log('text!!', )

    }

}