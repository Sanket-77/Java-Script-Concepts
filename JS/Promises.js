//promises => promises is process which used to perform any kind of async operation.  
// Promises has two state resolve and reject.
// resolve state means there execution is successfully done.Ther are one more state are pending.
// pending will wait the promises processis inprogress.

var promiseobject = new Promise(function (resolve, reject) {
    // resolve("I am successfull Executed");
    // reject("Error");

    var testuser = "This is promis responce bind with controls"
    try {

    } catch (error) { console.log(error) }
    if (testuser) {
        resolve(testuser);
    }
    reject("error")
});

promiseobject.then((response) => { document.getElementById('promiseRes').innerHTML = response }).catch((error) => console.log(error))


