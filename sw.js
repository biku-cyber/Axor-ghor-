const CACHE_NAME = "akhor-ghor-v1";

const STATIC_FILES = [

"/",

"/index.html",

"/learning.html",

"/swara.html",

"/vyanjan.html",

"/numbers.html",

"/lesson.html",

"/profile.html",

"/css/style.css",

"/css/dashboard.css",

"/css/lesson.css",

"/css/profile.css",

"/js/loader.js",

"/js/navigation.js",

"/js/dashboard.js",

"/js/lesson.js",

"/js/profile.js",

"/js/swara-data.js",

"/js/vyanjan-data.js",

"/js/number-data.js",

"/manifest.json",
  
"/offline.html"

];


/* Install */

self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>{

return cache.addAll(
STATIC_FILES
);

})

);

self.skipWaiting();

}
);


/* Activate */

self.addEventListener(
"activate",
event=>{

event.waitUntil(

caches.keys()
.then(keys=>{

return Promise.all(

keys.map(key=>{

if(
key!==CACHE_NAME
){

return caches.delete(key);

}

})

);

})

);

self.clients.claim();

}
);


/* Fetch */

self.addEventListener(
"fetch",
event=>{

event.respondWith(

caches.match(
event.request
)

.then(response=>{

return (

response ||

fetch(
event.request
)

.then(networkResponse=>{

const copy =
networkResponse.clone();

caches.open(
CACHE_NAME
)

.then(cache=>{

cache.put(
event.request,
copy
);

});

return networkResponse;

})

.catch(()=>{

return caches.match(
"/offline.html"
);

})

);

})

);

}
);
