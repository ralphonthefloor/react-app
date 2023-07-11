var socket = io('192.168.86.100:5000',{
    reconnectionDelayMax: 10000,
    query: {
        "type" : "client",
        "name" : new URLSearchParams(window.location.search).get('locID'),
        "sessionId" : sessionStorage.getItem("id"),
        "sessionName" : sessionStorage.getItem("name"),
    }});