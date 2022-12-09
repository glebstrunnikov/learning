const UICtrl = function () {
    let text = 'oops'

    const changeText = function() {
        document.getElementById('header').textContent = text
    }

    function consLog(msg) {
        console.log(msg)
    }

    return {
        callConsLog: consLog,

        callChangeText: function () {
            changeText()
            console.log(text)
        }
    }
}

// UICtrl.callConsLog('privet')
UICtrl().callChangeText()




// UICtrl.callChangeText()

// const testiife = (function() {console.log('provided by iife')})()

// const asda = (() => {

// }
// {return 1}


// )()