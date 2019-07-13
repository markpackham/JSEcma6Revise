const dnperm = document.getElementById('dnperm');
const dntrigger = document.getElementById('dntrigger');

dnperm.addEventListener('click', function (e) {
        e.preventDefault();
        //Check for notificaiton support if user has terrible browser
        if (!window.Notification) {
            alert('Sorry notificaitons not supported');
        } else {
            Notification.requestPermission(function (p) {
                    console.log(p);
                    if (p === 'denied') {
                        alert('You have denied notificaitons');
                    } else if (p === 'granted') {
                        alert('You have granted notifications');
                    }
                }
            );
        }
    }
);

//Simulate an event
dntrigger.addEventListener('click', function (e) {
        let notify;
        e.preventDefault();
        //console.log(Notification.permission);

        if (Notification.permission === 'default') {
            alert('Please allow notificaitons before doing this');
        } else {
            notify = new Notification('New message from Mark', {
                body: 'This is the body',
                icon: 'img/drupal.png',
                tag: 'myUniqueTag'
            });

            //do something if user clicks on notification
            notify.onclick = function () {
                window.location = '?message' + this.tag;
            }
            //If you click on the notification you get in the url http://localhost/JSRevise/DesktopNotificationsAPI/?messagemyUniqueTag
        }
    }
);