'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5e20c98ea4a43b16f432a95282cbacf2",
"version.json": "a165964716d18050d030741d398bc615",
"splash/img/light-2x.png": "f8f0dfa10a281aa38d3c7cf84b1fb6ad",
"splash/img/dark-4x.png": "244532d4c40ff998cf00bb51c458fc3d",
"splash/img/light-3x.png": "ca7347f7d58e2f20ee71dd01322cf13d",
"splash/img/dark-3x.png": "ca7347f7d58e2f20ee71dd01322cf13d",
"splash/img/light-4x.png": "244532d4c40ff998cf00bb51c458fc3d",
"splash/img/dark-2x.png": "f8f0dfa10a281aa38d3c7cf84b1fb6ad",
"splash/img/dark-1x.png": "810853d3e6155971f6b405ff6149a27e",
"splash/img/light-1x.png": "810853d3e6155971f6b405ff6149a27e",
"index.html": "019c50d93ae11c7b48a3d56890ef3154",
"/": "019c50d93ae11c7b48a3d56890ef3154",
"main.dart.js": "26be686011d890b8f3b96a23c13f35be",
"404.html": "ab3883de91536276712cf8819bb6d33b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "1b4c96e3134cfb11ed16ca229804a140",
"icons/Icon-192.png": "eb94317ed0dbd5593e97f70b2360a130",
"icons/Icon-maskable-192.png": "b95f2ef640e3131a05e83d9ce08bf309",
"icons/Icon-maskable-512.png": "d093a45389f62503570e7141bed7a574",
"icons/Icon-512.png": "43560d332e49b54205c924ca566d7fad",
"manifest.json": "7a24f6e88b4cc712d9b5c1163410e037",
"google159133ae262dfe30.html": "5a5dac7bbb72eeb6e5000a07cee2e973",
"assets/AssetManifest.json": "39502210f3ef0a7887028c439aadce7d",
"assets/NOTICES": "efd00ae74e6c2a0c9801d1ff2cb27ddb",
"assets/FontManifest.json": "d125b8ddf5af31a5bd772d5caeab5af4",
"assets/AssetManifest.bin.json": "eb2be983714d5f9bc3f5a1327c775a7f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a74df18e5784d80959a78c79e57e4c31",
"assets/fonts/appicons.ttf": "4091ac005968b1fbe4dad9fb322d8359",
"assets/fonts/MaterialIcons-Regular.otf": "4f764e935f7a58b830661858a1fbc5f1",
"assets/assets/cc-by-nc-80x15.png": "7dcfa22535e1ebeb7695df76b7ceda20",
"assets/assets/inaturalist-1419-original.png": "b1fbf407f978882fb88512bd835a944c",
"assets/assets/icon-foreground.png": "0ffcd0da5ab155270436ecba48f9e550",
"assets/assets/i18n/en.yaml": "2b980865654f26088489f2475eaadc79",
"assets/assets/i18n/zh_hans.yaml": "dd7077edb72c875d498d5c844c70fb72",
"assets/assets/i18n/zh_hant.yaml": "71e915dceace142075cb8152341f4819",
"assets/assets/320px-Cc-by-nc_icon.svg.png": "c7ecda7e5200c9aac11f872209819ac4",
"assets/assets/badges/ios/Download_on_the_App_Store_Badge_CNSC_RGB_blk_092917.svg": "4641acc302b3ddc1937be912cef1da8d",
"assets/assets/badges/ios/Download_on_the_App_Store_Badge_CNTC_RGB_blk_100217.svg": "97118bcf86319ccdcf4fca0879889e64",
"assets/assets/badges/ios/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/badges/android/GetItOnGooglePlay_Badge_Web_color_English.png": "e6d552c5deec92675d47f9b89d816ab8",
"assets/assets/badges/android/GetItOnGooglePlay_Badge_Web_color_Chinese-TW.png": "00a0502943ae74caf82b65c360555e83",
"assets/assets/badges/android/GetItOnGooglePlay_Badge_Web_color_Chinese-CN.png": "c38f6ffcbab3245ed2f9988188243ffe",
"assets/assets/group-images/cordyceps-light.png": "ec40a804944747e548dc2d957c56351e",
"assets/assets/group-images/tooth-light.png": "19f552c11ab0ae173b0b7b9ea60c9182",
"assets/assets/group-images/lichen-light.png": "0923f51c9c8100a474cfa6348985018d",
"assets/assets/group-images/coral-light.png": "3164bef1678d4388af0b149592a763c3",
"assets/assets/group-images/slimemold-light.png": "f0a94c76f9e2e748c0166bd4c5ef4c14",
"assets/assets/group-images/cup-light.png": "2e44bf446dffc45bcd3b30c3b24ccd3b",
"assets/assets/group-images/agarics-light.png": "05746ab4c03c7796c6fb3bfb16c3b57b",
"assets/assets/group-images/corticioid-light.png": "83377d1e0448930d999be04e63b99cfd",
"assets/assets/group-images/cantharellus-light.png": "d82340c242e7957be4c6bdfdaa5f49a9",
"assets/assets/group-images/polypores-light.png": "e81ef5faf03cd59054f402f9fc4a2657",
"assets/assets/group-images/jelly-light.png": "f6af29375196f0bad998e4d2a4fb0de2",
"assets/assets/group-images/gasteroid-light.png": "f3f7ff7c86835c067be3a31eb44286d5",
"assets/assets/group-images/boletes-light.png": "e15e9e97030f4ac1a09ef5cae7b89256",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
