//console.log("hi");
//function getUserNameById(id) {
//   let num =  Math.floor(Math.random() * 11);  
//    switch (num) {
//        case 0:
//            return "John Wick";
//        case 1:
//            return "Ali Ashraf";
//        case 2:
//            return "Qamar Shareef";
//        case 3:
//            return "Imran Khan";
//        case 4:
//            return "Nawaz Shareef";
//        case 5:
//            return "Abdullah Waseem";
//        case 6:
//            return "Maryam Umar";
//        case 7:
//            return "Fatima Waseem";
//        case 8:
//            return "Ayesha Waseem";
//        default:
//            return "Umar Shareef";
//    }
//}

function getStatusByCode(code) {
    switch (code) {
        case "N":
            return "New";
        case "I":
            return "In Progress";
        case "A":
            return "Approved";
        case "C":
            return "Closed";
        default:
            return "Invalid";
    }
}

function auto_grow(element) { // for textareas
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}

function getUserNameById(userId) {
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    let user = allUsers.find((user) => {
        return user.Id === userId;
    });
    return user.FirstName + " " + user.LastName;    
}

function getAssingeesBySearch(search) {
    let allAssignees = JSON.parse(localStorage.getItem("allUsers"));

    let newList = [];
    if (search !== "") {
        newList = allAssignees.filter((assignee) => {
            return (
                assignee.FirstName.toUpperCase().startsWith( search.toUpperCase() )
                ||
                assignee.LastName.toUpperCase().startsWith(search.toUpperCase())
              );
        });
    }

    if (newList !== undefined && newList.length !== 0) {
        //check if there is atlease one assignee
        newList = [].concat(newList);
    } else {
        //if search found nothing, show all assignees
        newList = allAssignees.slice(0, allAssignees.length);
    }

    return newList;
}

function setDate(datetime) {
    let date = new Date(datetime);

    return (
        (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
        + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        )   
}


function getAllNotifications() {
    let user = JSON.parse(localStorage.getItem("userLogin"));
    let token = user.Token;
    let userId = user.user.Id;
    
    axios.defaults.headers = { 'Authorization': `Bearer ${ token + ""}` };
    const url = apiBaseUrl + "api/Users/UserNotifications" + "?userId=" + userId;
    return axios.get(url);       
}

function setNotificationStatus  (id, isRead) {
    let user = JSON.parse(localStorage.getItem("userLogin"));
    let token = user.Token;

    axios.defaults.headers = { 'Authorization': `Bearer ${token + ""}` };
    const url = apiBaseUrl + "api/Users/UpdateIsRead" + "?notificationId=" + id + "&isRead=" + isRead;
    axios.get(url)
        .then((response) => {           
        })
        .catch((err) => {
            console.log(err);
        });    
}

function updateHubId(hubId) {
    let user = JSON.parse(localStorage.getItem("userLogin"));
    let token = user.Token;
    let userId = user.user.Id;

    axios.defaults.headers = { 'Authorization': `Bearer ${token + ""}` };
    const url = apiBaseUrl + "api/Users/UpdateHubId";
    axios.post(url, {
        HubId: hubId,
        UserId: userId
    }).then((response) => {  
        console.log("HubId updated");
        })
        .catch((err) => {
            console.log(err);
        });
}

function sendUpdateToSignalR(incidentId) {
    let user = JSON.parse(localStorage.getItem("userLogin"));   
    let userId = user.user.Id;

    let connection = new signalR.HubConnectionBuilder()
        .withUrl(apiBaseUrl + "hubs/notifications")
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.start()
        .then(result => {
            if (connection.connectionStarted) {
                connection.send("SendIncidentUpdate", incidentId, userId);

            } else {
                alert("No connection to server yet.");
            }
        })
        .catch(e => console.log('Connection failed: ', e));
}

function signlrListener() {

    const connection = new signalR.HubConnectionBuilder()
        .withUrl(apiBaseUrl + "hubs/notifications")
        .configureLogging(signalR.LogLevel.Information)
        .build();

    connection.start()
        .then(result => {
            console.log('Connected!');
            let hubId = connection.connectionId;
            updateHubId(hubId);

            connection.on('UpdateNotifications', (incidentId) => {
                console.log("Update Received from Hub : ", incidentId);
                setnotifications();
                toastr.success('An incident just updated. Please check your notifications.', 'Updates');
            });
        })
        .catch(e => console.log('Connection failed: ', e)); 
}


function setToaster() { // UI alerts
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
}