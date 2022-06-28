document.getElementById('button').addEventListener('click', loadData);

function loadData () {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open(
        // request type
        'GET',
        // file the request is made to
        'data.txt',
        // is async
        true
    );
        console.log(xhr.readyState);
        // console.log(Date.now());
        // setTimeout(function() {console.log('boom')}, 3000);

        // setTimeout(
        //     function() {
                xhr.onprogress = function () {
                    console.log('readystate', xhr.readyState)
                    setTimeout(function() {console.log('boom')}, 2000)
                    }
            //     },
            // 2000)

        xhr.onerror = function() {
            console.log('oops')
        }


    xhr.onload = function () {
        if (this.status === 200) {
            console.log(xhr.readyState);
            // console.log(this.responseText);
            // console.log(Date.now());
        };
        if (this.status === 404) {
            console.log('oops')
        }
    };
    xhr.send();
}